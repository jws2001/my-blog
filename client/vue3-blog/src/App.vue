<template>
  <div class="container">
    <div class="nav" :class="{ show: isAside }">
      <Aside />
    </div>
    <div class="main-content">
      <Header />
      <div class="content">
        <router-view></router-view>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "./components/aside.vue";
import Header from "./components/header.vue";
import { isAside } from "./composition/isAside/compositionAside";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  setup() {
    return {
      isAside,
    };
  },
  components: {
    Aside,
    Header,
    Footer,
  },
};
</script>

<style scoped lang="less">
.container {
  .nav {
    position: fixed;
    width: 250px;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #202020;
    z-index: 1;
    transition: left 0.3s linear;
  }

  .content {
    padding: 0 40px;
    padding-left: 290px;
    transition: all 0.3s linear;
  }
}

// 响应式
@media screen and (max-width: 765px) {
  .container .nav {
    left: -250px;
    z-index: 100;
  }
  .container .nav.show {
    left: 0;
  }
  .container .content {
    padding: 0 10px;
  }
  .container .main-content {
    padding-top: 50px;
  }
}
</style>