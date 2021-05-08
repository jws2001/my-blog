<template>
  <div class="page-container" v-show="totalPage.length > 1">
    <span @click="handleHomePage" :class="{ active: current != 1 }"
      >|&lt;&lt;</span
    >
    <span @click="handleIncRed('prev')" :class="{ active: current != 1 }"
      >&lt;&lt;</span
    >
    <span
      @click="handlePage(item)"
      :class="{ current: current == item }"
      class="active"
      v-for="(item, index) in totalPage"
      :key="index"
      >{{ item }}</span
    >
    <span
      @click="handleIncRed('next')"
      :class="{ active: current != totalPage }"
      >&gt;&gt;</span
    >
    <span @click="handleTrailerPage" :class="{ active: current != totalPage }"
      >&gt;&gt;|</span
    >
  </div>
</template>

<script>
// 分页组件
import pageRefStore from "../store/page";
export default {
  props: {
    //总页码数
    totalData: {
      require: true,
      type: Number,
    },
    //每页显示几条
    pageSize: {
      require: true,
      type: Number,
    },
    //页码改变执行的函数
    change: {
      type: Function,
      require: true,
    },
  },
  data() {
    return {
      current: 1, //当前的页码
      pagetotal: 5, //最多显示5个页码
      trailer: 1, //尾页
    };
  },
  computed: {
    //计算出渲染的页码数组
    totalPage() {
      if (pageRefStore.value.offset === 1) {
        this.current = 1;
      }
      const totalPage = Math.ceil(this.totalData / this.pageSize);
      this.trailer = totalPage;
      if (!totalPage) {
        return [];
      }
      let pageArray = []; //页码数组
      for (let i = 1; i <= totalPage; i++) {
        pageArray.push(i);
      }

      if (totalPage - this.current < this.pagetotal) {
        return pageArray;
      }
      pageArray = pageArray.slice(this.current - 1, this.pagetotal);
      return pageArray;
    },
  },
  methods: {
    //滚动条置顶函数
    moveScroll() {
      document.documentElement.scrollTop = 0;
    },
    //点击改变当前页码
    handlePage(pageIndex) {
      this.current = pageIndex;
      this.change(this.current);
      this.moveScroll();
    },
    //点击首页
    handleHomePage() {
      this.current = 1;
      this.change(this.current);
      this.moveScroll();
    },
    //点击尾页
    handleTrailerPage() {
      this.current = this.trailer;
      this.change(this.current);
      this.moveScroll();
    },
    //点击上一页 下一页
    handleIncRed(type) {
      this.moveScroll();
      if (type === "prev") {
        if (this.current == 1) {
          return;
        }
        this.current--;
        this.change(this.current);
        return;
      } else if (type === "next") {
        if (this.current == this.totalPage) {
          return;
        }
        this.current++;
        this.change(this.current);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.page-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  span {
    line-height: 1.7;
    padding: 0 5px;
    margin: 0 3px;
    cursor: pointer;
    &.active {
      color: #2479cc;
    }
    &.current {
      color: #000;
      font-weight: bold;
    }
  }
}
</style>