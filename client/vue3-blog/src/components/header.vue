<template>
  <div class="header-container">
    <div class="list-container" @click="handleisAside(!isAside)">
        <!-- 列表 -->
        <i class="iconfont">&#xe649;</i>
    </div>
    <h1 class="title-container">焦文松的博客</h1>
    <div class="avater-container">
      <router-link to="/">
        <img src="../assets/logo.jpg" alt="帅气的我" />
      </router-link>
    </div>
  </div>
</template>

<script>
// 是否显示侧边栏的变量
import { isAside,handleisAside} from '../composition/isAside/compositionAside';
export default {
    setup(props) {
       return{
         isAside,
           handleisAside
       }
    }
};
</script>

<style scoped lang="less">
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #323436;
  display: flex;
  line-height: 50px;
  align-items: center;
  padding: 0 10px;
  color: #ccc;
  justify-content: space-between;
  .list-container {
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    font-size: 24px;
    flex-shrink: 0;
    i{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 24px;
        cursor: pointer;
    }
  }
  .title-container{
      font-weight: bold;
      flex-grow: 1;
      flex-shrink: 1;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }
  .avater-container{
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
      }
  }
}
@media screen and (min-width: 765px) {
  .header-container {
    display: none;
  }
}
</style>