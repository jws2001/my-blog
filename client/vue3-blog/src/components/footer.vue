<template>
  <div class="footer-container">
    <p>
      © {{ year }} - 焦文松的博客 -
      <a target="_black" href="https://beian.miit.gov.cn"
        >蜀ICP备2021010608号</a
      >
    </p>
    <p></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="less" scoped>
.footer-container {
  line-height: 1.8;
  text-align: center;
  padding: 15px 0;
  border-top: 1px solid #eee;
  font-size: 0.9em;
  margin-top: 20px;
  a {
    color: #2479cc;
  }
}
</style>