<template>
  <h1>{{ $route.params.id }}</h1>
</template>

<script>
import {watchEffect} from 'vue';
import { useRoute } from "vue-router";
import getContainer from '../api/getContainer';
export default {
  setup(props, ctx) {
    const router = useRoute();
    //执行并监听 router.parame.id的棉花
    const typeId = watchEffect(() => {
      //参数
      const id = router.params.id;
      //根据参数不同请求不同的数据
      const typeData = getContainer(id);
    });
  },
};
</script>

<style>
</style>