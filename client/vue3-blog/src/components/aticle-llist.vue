<template>
  <div class="article-listitemcontainer">
    <div class="article-title">
      <router-link :to="`/article/${id}`" class="name"
        ><h1>{{ props.title }}</h1></router-link
      >
      <div class="time">发布于 {{ props.time }}</div>
    </div>
    <p class="brief">{{ props.describe }}</p>
    <div class="skip">
      <router-link :to="`/type/${props.typeId}`"
        >「{{ props.type.title }}」</router-link
      >
      <router-link :to="`/article/${id}`" class="article-listitemmore">
        阅读全文 >></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    typeId: {
      type: Number,
      required: true,
    },
    describe: {
      type: String,
      required: true,
    },
    type: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style scoped lang="less">
.article-listitemcontainer {
  box-sizing: border-box;
  padding-bottom: 20px;
  border-top: 1px solid #ddd;
  .article-title {
    display: flex;
    justify-content: space-between;
    line-height: 1.7;
    align-items: center;
    .name {
      font-weight: 300;
      line-height: 1.7;
      color: #333;
      font-size: 2em;
      flex-shrink: 1;
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        color: #2479cc;
      }
    }
    .time {
      flex-shrink: 0;
      color: #999;
      font-size: 0.9em;
    }
  }
  .brief {
    margin: 1em 0;
    line-height: 1.5;
  }
  .skip {
    a {
      color: #2479cc;
    }
    .article-listitemmore {
      margin-left: 20px;
    }
  }
}
</style>