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
      <p class="end">{{end}}</p>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { getArticleContnet } from "../request/article-content";
import moment from "moment";
import marked from '../library/marked';
export default {
  data() {
    return {
      articleDate: { name: "1" }, //文章的信息
      type: {}, //类型信息
      end:'<< 完 >>'
    };
  },
  async created() {
    const router = useRoute();
    const id = router.params.id;
    const result = await getArticleContnet(id);
    result.time = moment(+result.time).format("YYYY/MM/DD");
    result.updatedAt = moment(result.updatedAt).format("YYYY/MM/DD");
    result.content = marked(result.content); //解析content
    this.articleDate = result;
    this.type = result.type;
  },
};
</script>

<style lang="less" >
@media screen and (max-width:765px) {
  .header .attath {
    display: none;
  }
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
.marked-container{
  padding-bottom: 40px;
  .end{
    text-align: center;
    margin-top: 20px;
  }
}
</style>