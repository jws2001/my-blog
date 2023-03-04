<template>
  <!-- 侧边栏 -->
  <div class="aside-container">
    <!-- 头像区域 -->
    <div class="aside-profile">
      <router-link class="avat" to="/" >
        <!-- <img class="logo" src="../assets/logo.jpg" alt="头像" @click="changePageIndex" /> -->
        <Taiji :size="150" class="taiji"/>
      </router-link>
      <h1 class="aside-profile-title">Wolf的博客</h1>
      <div class="aside-profile-description">祝:小花每天开心</div>
      <!-- <div class="aside-profile-description">Life is a funcking movie</div> -->
    </div>
    <!-- 类别区域 -->
    <ul class="aside-buttons">
      <li @click="handleisAside(!isAside),changePageIndex()">
        <router-link :to="{name:`Home`}" title="首页" exact>
          <i class="iconfont">&#xe611;</i>
          <span>首页</span>
        </router-link>
      </li>
      <li
        @click="handleisAside(!isAside),changePageIndex()"
        v-for="item in typeData"
        :key="item.id"
      >
        <router-link :to="`/type/${item.id}`" :exact="false">
          <i class="iconfont" v-html="item.iconText" ></i>
          <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
    <div class="close" @click="handleisAside(!isAside)" v-if="isAside">
      <i class="iconfont">&#xe61e;</i>
    </div>
  </div>
</template>

<script>
import {
  isAside,
  handleisAside,
} from "../composition/isAside/compositionAside";
import { ref } from "vue";
import { getType } from "../request/aside";
import pageRefStore from "../store/page";
import Taiji from "./taiJi.vue";
export default {
  setup() {
    let typeData = ref([]);
    getType(typeData);
    return {
      handleisAside,
      isAside,
      typeData,
    };
  },
  components:{
    Taiji
  },
  methods: {
    changePageIndex() {
      pageRefStore.value.offset = 1;
    },
  },
};
</script>

<style scoped lang='less'>
@keyframes taiji{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.taiji{
  margin-bottom: 20px;
  animation: taiji 10s linear infinite;
}
.aside-container {
  position: relative;
  z-index: 100;
  .close {
    position: absolute;
    right: -44px;
    top: 0;
    height: 50px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont {
      height: 24px;
      width: 24px;
      display: block;
      font-size: 24px;
      color: #ccc;
      cursor: pointer;
    }
  }
}
.aside-profile {
  padding: 40px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 2s;
    &:hover {
      transform: rotate(360deg);
    }
  }
  .aside-profile-title {
    font-size: 18px;
    padding: 10px 0;
    color: #ccc;
  }
  .aside-profile-description {
    padding: 10px 0;
    color: #bac9ff;
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
    font-size: 14px;
  }
}
.aside-buttons {
  li {
    height: 45px;
    line-height: 45px;
    a {
      display: flex;
      width: 100%;
      height: 100%;
      line-height: 45px;
      padding-left: 25px;
      box-sizing: border-box;
      color: #666;
      text-align: center;
      transition: color 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99);
      &:hover {
        color: #fff;
      }
      i.iconfont {
        width: 25px;
        margin-right: 15px;
      }
    }
    a.router-link-active {
      background-color: #2479cc;
      color: #fff;
    }
  }
}
@media screen and (min-width: 765px) {
  .aside-container .close {
    display: none;
  }
}
</style>