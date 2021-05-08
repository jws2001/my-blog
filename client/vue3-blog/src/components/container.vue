<template>
  <div class="home">
    <DailySentence />
    <h1 class="type-title" v-if="typeInfoRef">{{ typeInfoRef.title }}</h1>
    <Article
      v-for="(item, index) in dataList.rows"
      v-bind="item"
      :key="index"
    />
    <Page
      :current="pageRefStore.offset"
      :total="dataList.count"
      :limtSize="pageRefStore.limit"
      @pageChange="pageChange"
    />
  </div>
</template>


<script>
import Article from "./aticle-llist.vue";
import { useRoute } from "vue-router";
import { watchEffect, ref } from "vue";
import { getType, getArticle } from "../request/container";
import DailySentence from "./daily-sentence.vue";
import pageRefStore from "../store/page";
import Page from "./pageCom/index.vue";
export default {
  methods: {
    pageChange(newPage) {
      pageRefStore.value.offset = newPage
    },
  },
  setup() {
    //路由信息
    const router = useRoute();
    //type信息
    const typeInfoRef = ref(false);
    //列表数据
    const dataList = ref([]);
    //分页
    watchEffect(async () => {
      const path = router.path;
      //触发监听的响应式
      const offset = pageRefStore.value.offset;
      if (path === "/") {
        typeInfoRef.value = false;
        //获取文章
        dataList.value = await getArticle(
          pageRefStore.value.offset,
          pageRefStore.value.limit
        );
      } else {
        const isType = /^\/type\/\d*\d$/.test(path);
        if (!isType) {
          return;
        }
        //类型id 没有就是首页
        const typeId = router.params.id;
        typeInfoRef.value = await getType(typeId);
        //获取文章
        dataList.value = await getArticle(
          pageRefStore.value.offset,
          pageRefStore.value.limit,
          typeId
        );
      }
    });
    return {
      typeInfoRef,
      dataList,
      pageRefStore,
    };
  },
  components: {
    Article,
    Page,
    DailySentence,
  },
};
</script>

<style scoped lang="less">
.home {
  padding-top: 100px;
  .type-title {
    font-size: 2em;
    padding: 1em 0;
  }
  .page-container{
    border-top: 1px solid #eee;
  }
}

@media screen and (max-width: 765px) {
  .home {
    padding-top: 0;
  }
}
</style>