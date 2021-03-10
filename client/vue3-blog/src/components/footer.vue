<template>
  <div class="footer-container">
    <p>
      © {{ year }} - 焦文松的博客 -
      <a target="_black" href="">蜀ICP备目前不确定号</a>
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
  border-top: 1px solid #ddd;
  font-size: 0.9em;
  margin-top: 20px;
  a{
      color: #2479cc;
  }
}
</style>