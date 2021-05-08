<template>
  <div class="artilce-content">
    <div class="header">
      <h1 class="title">{{ articleDate.title }}</h1>
      <div class="attath">
        <span>发布日期: {{ articleDate.time }}</span>
        <span>更新日期: {{ articleDate.updatedAt }}</span>
        <span
          >分类:
          <router-link :to="`/type/${articleDate.typeId}`">{{
            type.title
          }}</router-link></span
        >
      </div>
    </div>
    <div class="marked-container">
      <div class="markdown-body" v-html="articleDate.content"></div>
      <p class="end">&lt;&lt; 完 &gt;&gt;</p>
    </div>
    <Comment
      :changeCommentList="changeCommentList"
      :articleId="articleDate.id"
      :pushCommentChiredn="pushCommentChiredn"
    />
    <CommentList :commentList="commentList" />
    <Catalogue :treePage="treePage" v-show="treePage.length" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { getArticleContnet } from "../request/article-content";
import hljs from "highlight.js";
import moment from "moment";
import marked from "marked";
import Catalogue from "./catalogue.vue";
import Comment from "./comment.vue";
import CommentList from "./commentList.vue";
import { getPageCommentList } from "../request/comment";
export default {
  data() {
    return {
      articleDate: {}, //文章的信息
      type: {}, //类型信息
      treePage: [], //目录的树形结构
      commentList: {
        count: 0,
        rows: [],
      }, //评论数据
      page: {
        offset: 1,
        limit: 10,
      },
      isScroll: true, //触底是否发送请求
    };
  },
  methods: {
    pushCommentChiredn(info, data) {
      const _this = this;
      data.createTime = moment(data.createTime).format(
            "YYYY/MM/DD hh:mm:ss"
          );
      for (let i = 0, len = _this.commentList.rows.length; i < len; i++) {
        if(_this.commentList.rows[i].id === info.id){
          _this.commentList.rows[i].commentchildren.unshift(data)
          break;
        }
      }
    },
    changeCommentList(data) {
      data.commentchildren = [];
      this.commentList.count++;
      data.createTime = moment(+data.createTime).format("YYYY/MM/DD hh:mm:ss");
      this.commentList.rows.unshift(data);
    },
    //在评论内容之后获取comment 可能或出现两个相同的评论数据
    //所以使用数组去重方法
    deleteArr() {
      //记录重复的下标
      let index;
      for (
        let i = 0, len = this.commentList.rows.length - 1;
        i < len - 1;
        i++
      ) {
        const id = this.commentList.rows[i].id;
        for (let j = i + 1; j < len; j++) {
          this.commentList.rows[j].id === id ? (index = j) : "";
        }
      }
      index ? this.commentList.rows.splice(index, 1) : "";
    },
    reverseMoment(data) {
      data.forEach((item) => {
        item.commentchildren.forEach((ele) => {
          ele.createTime = moment(+ele.createTime).format(
            "YYYY/MM/DD hh:mm:ss"
          );
        });
        item.commentchildren.reverse();
      });
    },
  },
  async created() {
    const router = useRoute();
    const id = router.params.id;
    const result = await getArticleContnet(id);
    result.time = moment(+result.time).format("YYYY/MM/DD");
    result.updatedAt = moment(result.updatedAt).format("YYYY/MM/DD");

    //生成一个marked的实例
    const renderer = new marked.Renderer();
    let indexID = 0;
    const _this = this;
    renderer.heading = function (text, level) {
      indexID++;
      const id = `article-title-${indexID}`;
      if (level === 1) {
        _this.treePage.push({
          text,
          id,
        });
      } else {
        if (!_this.treePage[_this.treePage.length - 1].children) {
          _this.treePage[_this.treePage.length - 1].children = [];
        }

        _this.treePage[_this.treePage.length - 1].children.push({
          text,
          id,
        });
      }

      return `<h${level} id="${id}">${text}</h${level}>`;
    };
    marked.setOptions({
      renderer: renderer,
      highlight: function (code, language) {
        const validLanguage = hljs.getLanguage(language)
          ? language
          : "plaintext";
        return hljs.highlight(validLanguage, code).value;
      },
      headerIds: true,
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });

    result.content = marked(result.content); //解析content
    this.articleDate = result;
    document.title = result.title + "-焦文松的博客";
    this.type = result.type;

    //分页获取评论
    const commentList = await getPageCommentList(
      this.articleDate.id,
      _this.page.offset,
      _this.page.limit
    );
    this.commentList = commentList.data;
    this.commentList.rows.forEach((item) => {
      item.createTime = moment(+item.createTime).format("YYYY/MM/DD hh:mm:ss");
    });
    this.reverseMoment(this.commentList.rows);
  },
  mounted() {
    const _this = this;
    window.onscroll = async function () {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollHeight - (scrollTop + windowHeight) < 1) {
        //触底执行事件
        if (_this.commentList.rows.length === _this.commentList.count) {
          //已经获取到所有的数据
          return;
        }
        //发送请求

        _this.page.offset++;
        const commentList = await getPageCommentList(
          _this.articleDate.id,
          _this.page.offset,
          _this.page.limit
        );
        commentList.data.rows.forEach((item) => {
          item.createTime = moment(+item.createTime).format(
            "YYYY/MM/DD hh:mm:ss"
          );
        });
        _this.commentList.rows = [
          ..._this.commentList.rows,
          ...commentList.data.rows,
        ];
        _this.commentList.count = commentList.data.count;
        //对评论的数据进行去重
        _this.deleteArr(_this.commentList.rows);
      }
    };
  },
  components: {
    Catalogue,
    Comment,
    CommentList,
  },
};
</script>

<style lang="less" >
@media screen and (max-width: 765px) {
  .header .attath {
    display: none;
  }
  .artilce-content {
    padding-right: 0 !important;
  }
}
.artilce-content {
  padding-right: 250px;
  scroll-behavior: smooth;
}

.header {
  margin-bottom: 1.7em;
  .title {
    color: #333;
    font-weight: 400;
    font-size: 2em;
    height: 50px;
    line-height: 53px;
    margin: 22px 0;
  }
  .attath {
    line-height: 1.7;
    span {
      margin-right: 20px;
      color: #999;
      font-size: 0.9em;
      a {
        color: #2479cc;
      }
    }
  }
}
.marked-container {
  padding-bottom: 40px;
  .end {
    text-align: center;
    margin-top: 20px;
  }
}
</style>