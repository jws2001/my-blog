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
      <p class="end">{{ end }}</p>
    </div>
    <Catalogue :treePage="treePage"/>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { getArticleContnet } from "../request/article-content";
import hljs from "highlight.js";
import moment from "moment";
import marked from "marked";
import Catalogue from './catalogue.vue';
export default {
  data() {
    return {
      articleDate: { name: "1" }, //文章的信息
      type: {}, //类型信息
      end: "<< 完 >>",
      treePage: [], //目录的树形结构
    };
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
    renderer.heading = function (text, level, raw) {
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
    console.log(this.treePage);

    this.articleDate = result;
    this.type = result.type;
  },
  components:{
    Catalogue
  }
};
</script>

<style lang="less" >
@media screen and (max-width: 765px) {
  .header .attath {
    display: none;
  }
}
.artilce-content{
  padding-right: 250px;
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