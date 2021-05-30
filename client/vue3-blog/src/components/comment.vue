<template>
  <div class="comment-container">
    <div class="header" v-show="isUserName">
      <input
        class="name"
        type="text"
        v-model="name"
        placeholder="用户昵称"
        maxlength="9"
      />
      <span class="number">{{ name.length }}/9</span>
    </div>
    <div class="reply" id="reply-content" v-show="commentStoreRef.isReply">
      @{{ commentStoreRef.pitchInfo.userName
      }}<i @click="replyState(false)" class="iconfont">&#xe6a0;</i>
    </div>
    <div class="content">
      <textarea
        class="comment-text"
        placeholder="请输入内容"
        autocomplete="off"
        maxlength="99"
        v-model="text"
      ></textarea>
      <span class="number">{{ text.length }}/99</span>
    </div>
    <div class="save">
      <button @click="save(2000)">提交</button>
    </div>
  </div>
</template>

<script>
//评论模块
import { addRootComment, addChildrenComment } from "../request/comment";
import { v4 as uuidv4 } from "uuid";
import { ElMessage } from "element-plus";
import { commentStoreRef, replyState } from "../store/comment";
export default {
  props: {
    articleId: {
      required: true,
    },
    changeCommentList: {
      require: true,
      type: Function,
    },
    pushCommentChiredn: {
      require: true,
      type: Function,
    },
  },
  setup() {
    return {
      commentStoreRef,
      replyState,
    };
  },
  data() {
    return {
      name: "",
      text: "",
      timerDate: 0, //记录上一次点击的时间
      isUserName: true, //是否显示输入name的div
      isReply: true, //是否显示@元素
    };
  },
  created() {
    const userInfo = localStorage.getItem("userInfo");
    userInfo ? (this.isUserName = false) : "";
  },
  methods: {
    //提交事件(防抖函数)
    async save(time) {
      if (!localStorage.getItem("userInfo") && !this.name) {
        ElMessage({
          message: "请输入昵称",
          type: "warning",
          center: "center",
        });
        return;
      }
      if (!this.text) {
        ElMessage({
          message: "请输入内容",
          type: "warning",
          center: "center",
        });
        return;
      }
      if (Date.now() - this.timerDate < time) {
        return;
      }
      this.timerDate = Date.now(); //记录这次点击的时间
      let userInfo = localStorage.getItem("userInfo");
      let result = null;

      //判断是不是子评论
      if (
        commentStoreRef.value.pitchInfo.userName &&
        commentStoreRef.value.isReply
      ) {
        if (userInfo) {
          //有用户信息
          userInfo = JSON.parse(userInfo);
          result = await addChildrenComment(
            userInfo.userId,
            userInfo.userName,
            this.text,
            commentStoreRef.value.pitchInfo.id,
            this.articleId,
            userInfo.avatar
          );
        } else {
          // 没有存有用户信息
          const chUserId = uuidv4();
          result = await addChildrenComment(
            chUserId,
            this.name,
            this.text,
            commentStoreRef.value.pitchInfo.id
          );
          //保存用户信息
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              userId: result.data.data.userId,
              userName: result.data.data.userName,
              avatar: result.data.data.avatarSrc,
            })
          );
          this.isUserName = false;
        }
        this.pushCommentChiredn(
          commentStoreRef.value.pitchInfo,
          result.data.data
        );
        commentStoreRef.value.pitchInfo = {};
        commentStoreRef.value.isReply = false;
      } else {
        if (userInfo) {
          //已经评论过了
          userInfo = JSON.parse(userInfo);
          result = await addRootComment(
            userInfo.userId,
            userInfo.userName,
            this.text,
            this.articleId,
            userInfo.avatar
          );
          if (result.data) {
            this.changeCommentList(result.data);
          } else {
            ElMessage({
              message: result.msg,
              type: "warning",
              center: "center",
            });
          }
        } else {
          //第一次评论
          const userId = uuidv4();
          //判断是不是子评论
          result = await addRootComment(
            userId,
            this.name,
            this.text,
            this.articleId
          );
          //得到服务器返回的结果
          if (result.code) {
            localStorage.setItem(
              "userInfo",
              JSON.stringify({
                userId: result.data.userId,
                userName: result.data.userName,
                avatar: result.data.avatar,
              })
            );
            this.isUserName = false;
            this.changeCommentList(result.data);
          }
        }
      }
      this.name = "";
      this.text = "";
    },
  },
};
</script>

<style lang="less" scoped>
.comment-container {
  // font-family: 宋体;
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 5px;
  color: #999;
  .reply {
    height: 25px;
    line-height: 23px;
    display: inline-block;
    border: 1px solid black;
    margin-bottom: 0.7em;
    padding: 0 8px;
    border-radius: 20px;
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;
    font-size: 12px;
    .iconfont {
      font-size: 16px;
      cursor: pointer;
      margin-left: 2px;
    }
  }
  .save {
    margin-top: 15px;
    button {
      width: 80px;
      height: 30px;
      border: none;
      color: #fff;
      outline: none;
      cursor: pointer;
      border-radius: 3px;
      background-color: #424242;
      &:hover {
        box-shadow: 1px 1px 10px red;
        transform: translateY(-3px);
      }
    }
  }
  .header {
    width: 300px;
    height: 30px;
    position: relative;
    margin-bottom: 0.7em;
    input.name {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      padding-left: 10px;
      border-bottom: 1px dashed #dcdff6;
      &:focus {
        border-color: #008c8c;
      }
      &::placeholder {
        color: #eee;
      }
    }
    .number {
      position: absolute;
      right: 0;
      top: 8px;
    }
  }
  .content {
    position: relative;
    height: 150px;
    .comment-text {
      width: 100%;
      outline: none;
      padding: 0;
      border: none;
      height: 100%;
      resize: none;
      box-sizing: border-box;
      padding: 10px;
      border: 1px dashed #dcdff6;
      border-radius: 4px;
      &:focus {
        border-color: #008c8c;
      }
      &::placeholder {
        color: #eee;
      }
    }
    .number {
      position: absolute;
      right: 10px;
      bottom: 10px;
      color: #999;
    }
  }
}
</style>