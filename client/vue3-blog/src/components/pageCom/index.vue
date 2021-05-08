<template>
  <div class="page-container" v-if="totalPage > 1">
    <span :class="{ disabled: current === 1 }" @click="handlePage(1)"
      >|&lt;&lt;</span
    >
    <span :class="{ disabled: current === 1 }" @click="handlePage(current - 1)"
      >&lt;&lt;</span
    >
    <span
      v-for="(item, index) in pageShowArr"
      :key="index"
      :class="{ active: item === current }"
      @click="handlePage(item)"
      >{{ item }}</span
    >
    <span
      :class="{ disabled: current === totalPage }"
      @click="handlePage(current + 1)"
      >&gt;&gt;</span
    >
    <span
      :class="{ disabled: current === totalPage }"
      @click="handlePage(totalPage)"
      >&gt;&gt;|</span
    >
    <i>{{ current }}/{{ totalPage }}</i>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      //总的数据量
      type: Number,
      default: 0,
    },
    limtSize: {
      //每页显示多少条
      type: Number,
      default: 10,
    },
    visiblePage: {
      //最多显示多少条页码
      type: Number,
      default: 5,
    },
  },
  computed: {
    //一共有多少页
    totalPage() {
      return Math.ceil(this.total / this.limtSize);
    },
    //最小页码
    pageMin() {
      let min = this.current - Math.ceil(this.visiblePage / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    //最大页码
    pageMax() {
      let max = this.pageMin + this.visiblePage;
      if (max > this.totalPage) {
        max = this.totalPage;
      }
      return max;
    },
    //显示页码数组
    pageShowArr() {
      const pageArr = [];
      for (let i = this.pageMin; i <= this.pageMax; i++) {
        pageArr.push(i);
      }
      return pageArr;
    },
  },
  methods: {
    handlePage(newPage) {
      let page = newPage;
      if (newPage < 1) {
        page = 1;
      } else if (newPage > this.totalPage) {
        page = this.totalPage;
      }
      this.$emit("pageChange", page);
    },
  },
};
</script>

<style lang="less" scoped>
.page-container {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  span,
  i {
    padding: 8px;
    color: rgb(36, 121, 204);
    cursor: pointer;
    &.disabled {
      color: #999;
      cursor: not-allowed;
    }
    &.active {
      color: #424242;
    }
  }
  i {
    color: burlywood;
  }
}
</style>