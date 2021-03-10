<template>
  <div class="home">
    <h1 class="type-title" v-if="typeInfoRef">{{ typeInfoRef.title }}</h1>
    <Article
      v-for="(item, index) in dataList.rows"
      v-bind="item"
      :key="index"
    />
  </div>
</template>


<script>
import Article from "../components/aticle-llist.vue";
import { useRoute } from "vue-router";
import { watchEffect, ref } from "vue";
import { getType, getArticle } from "../request/container";
export default {
  setup(prop, ctx) {
    //type信息
    const router = useRoute();
    //type信息
    const typeInfoRef = ref(false);
    //列表数据
    const dataList = ref([]);
    //分页
    const pagrRef = ref({
      offset: 1,
      limit: 10,
    });

    watchEffect(async () => {
      const path = router.path;
      if (path === "/") {
        typeInfoRef.value = false;
        //获取文章
        dataList.value = await getArticle(
          pagrRef.value.offset,
          pagrRef.value.limit
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
          pagrRef.value.offset,
          pagrRef.value.limit,
          typeId
        );
      }
    });
    return {
      typeInfoRef,
      dataList,
    };
  },
  components: {
    Article,
  },
};
</script>

<style scoped lang="less">
.home {
  .type-title {
    font-size: 2em;
    padding: 1em 0;
  }
}
</style>