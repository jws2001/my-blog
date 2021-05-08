<template>
  <div v-show="commentList.rows.length" class="comment-list-container">
    <div class="title">
      <div class="text">评论列表</div>
      <div class="number">({{ commentList.count }})</div>
    </div>
    <div class="list-container">
      <div
        class="list-item"
        v-for="item in commentList.rows"
        :key="item.userId"
      >
        <div class="item-content">
          <div class="info">
            <img class="info-avatar" :src="item.avatar" alt="go" title="JWS" />
            <div class="name-time">
              <div class="name">
                <div>{{ item.userName }}</div>
                <div href="#" @click="removeHref(item)" class="reply">回复</div>
              </div>
              <div class="time">{{ item.createTime }}</div>
            </div>
          </div>
          <div class="root-content">{{ item.content }}</div>
        </div>
        <div class="children-container" v-show="item.commentchildren.length">
          <div class="children-item" v-for="itemCh in item.commentchildren" :key="itemCh.userId">
            <div class="children-content">
              <div class="info">
                <img
                  class="info-avatar"
                  :src="itemCh.avatarSrc"
                  alt=""
                />
                <div class="name-time">
                  <div class="name">
                    <div>{{itemCh.userName}}</div>
                  </div>
                  <div class="time">{{itemCh.createTime}}</div>
                </div>
              </div>
              <div class="root-content">{{itemCh.content}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//评论列表组件
import { commentStoreRef, replyState } from "../store/comment";
export default {
  props: {
    commentList: {
      require: true,
    },
  },
  methods: {
    //设置滚动条的@评论区域
    removeHref(info) {
      //设置commentStore的数据
      commentStoreRef.value.pitchInfo = info;
      replyState(true);
      setTimeout(() => {
        const replyContent = document.getElementById("reply-content");
        const top = replyContent.offsetTop;
        window.scrollTo(0, top - 200);
      }, 0);
    },
  },
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 765px) {
  .comment-list-container .list-container .list-item .info .name-time .name .reply{
    opacity: 1 !important;
  }
}
.comment-list-container {
  margin-top: 30px;
  .title {
    display: flex;
    .text {
      border-bottom: 1px solid #999;
      padding-bottom: 2px;
      margin-right: 10px;
    }
  }
  .item-content:hover .reply {
    opacity: 1 !important;
  }
  .list-container {
    margin-top: 50px;
    .list-item {
      margin-bottom: 20px;
    }

    .list-item,
    .children-item {
      border-bottom: 1px solid #eee;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin-right: 10px;
          flex-shrink: 0;
        }
        .name-time {
          flex-grow: 1;
          display: flex;
          flex-shrink: 1;
          justify-content: space-between;
          .name {
            color: rgb(36, 121, 204);
            display: flex;
            justify-content: space-between;
            flex-grow: 1;
            .reply {
              margin-right: 10px;
              color: rgb(36, 121, 204);
              text-decoration: underline;
              cursor: pointer;
              opacity: 0;
              transition: all 0.3s;
            }
          }
          .time {
            color: #999;
            font-size: 14px;
          }
        }
      }
      .root-content {
        padding-top: 10px;
        padding-bottom: 20px;
        padding-left: 54px;
        line-height: 25px;
        color: #424242;
      }
    }
    .children-item {
      padding-bottom: 0px;
      border: none;
    }
    .children-content {
      padding-left: 55px;
    }
  }
}
</style>