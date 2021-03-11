<template>
  <div class="daily-sentence-container">
    <div class="left">
      <span class="number">{{time[2]}}</span>
      <span class="en">{{time[1]}}.</span>
    </div>
    <div class="right">
      <p class="top">To be alive is to happy</p>
      <p class="bottom">人活着, 开心最终要</p>
    </div>
  </div>
</template>

<script>
//每日一句
export default {
    data(){
        return{
            time:new Date().toDateString().split(' ')
        }
    }
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
      //   line-height: 100px;
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
  }
}
@media screen and (max-width: 765px) {
    .daily-sentence-container{
        display: none;
    }
}
</style>