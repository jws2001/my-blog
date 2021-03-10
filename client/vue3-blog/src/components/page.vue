<template>
  <div class="page-container">
    <span @click="handleHomePage" :class="{ active: current != 1 }">|<<</span>
    <span @click="handleIncRed('prev')" :class="{ active: current != 1 }"><<</span>
    <span
      @click="handlePage(item)"
      :class="{ current: current == item }"
      class="active"
      v-for="(item, index) in totalPage"
      :key="index"
      >{{ item }}</span
    >
    <span @click="handleIncRed('next')" :class="{ active: current != totalPage }">>></span>
    <span @click="handleTrailerPage" :class="{ active: current != totalPage }"
      >>>|</span
    >
  </div>
</template>

<script>
// 分页组件
export default {
  data() {
    return {
      current: 1, //当前的页码
      totalPage: 10, //总页数
      pageSize:5,//显示的页码数
    };
  },
  components:{
    comTotalPage(){
      
    }
  },
  methods: {
    //点击改变当前页码
    handlePage(pageIndex) {
      this.current = pageIndex;
    },
    //点击首页
    handleHomePage() {
      this.current = 1;
    },
    //点击尾页
    handleTrailerPage() {
      this.current = this.totalPage;
    },
    //点击上一页 下一页
    handleIncRed(type) {
      if (type === "prev") {
        if (this.current == 1) {
          return;
        }
        this.current--;
        return;
      } else if (type === "next") {
        if (this.current == this.totalPage) {
          return;
        }
        this.current++;
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