<template>
  <div class="toc-container">
    <div class="toc-title">目录</div>
    <ul class="toc-item-container">
      <li v-for="(item, index) in treePage" :key="index">
        <div class="toc-item">
          <span>{{ index + 1 }}.</span>
          <a :href="`#${item.id}`">{{ item.text }}</a>
        </div>
        <template v-if="item.children">
          <ul class="children-container">
            <li v-for="(children, index) in item.children" :key="index">
              <div class="toc-item">
                <a :href="`#${children.id}`">{{
                  children.text
                }}</a>
              </div>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    treePage: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      timer: null, //定时器指针
    };
  }
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 765px) {
  .toc-container {
    display: none;
  }
}
.toc-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  box-sizing: border-box;
  padding: 10px 20px;
  border-left: 1px solid #eee;
  background-color: #fff;
  .toc-title {
    text-align: center;
    margin: 2em 0;
    font-family: 宋体;
  }
  .toc-item {
    height: 32px;
    line-height: 32px;
    display: flex;
    span {
      margin-right: 8px;
      color: #999;
    }
    a {
      color: #2479cc;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .children-container {
    list-style: initial;
    list-style-type: circle;
    padding-left: 32px;
  }
}
</style>