<template>
  <div class="daily-sentence-container">
    <div class="left">
      <span class="number">{{ time[2] }}</span>
      <span class="en">{{ time[1] }}.</span>
    </div>
    <div class="right">
      <p class="top">{{ daily.en }}</p>
      <p class="bottom">{{ daily.zh_CN }}</p>
    </div>
  </div>
</template>

<script>
import getDaily from "../request/daily";
//每日一句
export default {
  data() {
    return {
      time: new Date().toDateString().split(" "),
      daily: {}, //每日一句
    };
  },
  async created() {
    const result = await getDaily();
    this.daily = result.data.data;
  },
};
</script>

<style lang="less" scoped>
.daily-sentence-container {
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  .left {
    color: #424242;
    padding-right: 20px;
    font-weight: 400;
    border-right: 1px solid rgb(221, 221, 221);
    .number {
      font-size: 60px;
      margin-right: 15px;
    }
    .en {
      color: #000;
      vertical-align: 0px;
    }
  }
  .right {
    font-family: 楷体;
    color: #424242;
    padding: 5px 0px 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top{
          word-wrap: break-word;
    line-height: 20px;
    }
  }
}
@media screen and (max-width: 765px) {
  .daily-sentence-container {
    display: none;
  }
}
</style>

