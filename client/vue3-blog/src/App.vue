<template>
  <div class="container">
    <!-- 侧边栏 -->
    <div class="aside-container">
      <!-- 头像区域 -->
      <Aside/>
    </div>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Aside from './components/aside.vue';
export default {
  name: "App",
  components:{
    Aside
  }
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  height: 100%;
  // 左侧 侧边栏区域
  .aside-container {
    width: 250px;
    background-color: #202020;
    
  }
  .main-container {
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
  }
}
</style>