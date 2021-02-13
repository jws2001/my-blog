<template>
  <div>
      <!-- 侧边栏 -->
    <div class="aside-container">
      <!-- 头像区域 -->
      <div class="aside-profile">
        <router-link class="avat" to="/">
          <img class="logo" src="../assets/logo.jpg" alt="" />
        </router-link>
        <h1 class="aside-profile-title">焦文松的博客</h1>
        <div class="aside-profile-description">成长日记</div>
      </div>
      <!-- 类别区域 -->
      <ul class="aside-buttons">
        <li>
          <router-link to="/" title="首页">
            <i class="iconfont">&#xe611;</i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/type/前端">
          <i class="iconfont">&#xe637;</i>
          <span>前端</span>
          </router-link>
        </li>
        <li>
          <router-link to="/type/网络">
            <i class="iconfont">&#xe641;</i>
            <span>网络</span>
          </router-link>
        </li>
        <li>
          <router-link to="/type/demo">
            <i class="iconfont">&#xe658;</i>
            <span>demo</span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin">后台管理页面</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
    .aside-profile {
      padding: 40px 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .logo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        cursor: pointer;
      }
      .aside-profile-title {
        font-size: 18px;
        padding: 10px 0;
        color: #ccc;
      }
      .aside-profile-description {
        padding: 10px 0;
        color: #666;
        font-size: 14px;
      }
    }
    .aside-buttons {
      li {
        height: 45px;
        line-height: 45px;
        a{
          display: flex;
          width: 100%;
          height: 100%;
          line-height: 45px;
          padding-left: 25px;
          box-sizing: border-box;
          color: #666;
          text-align: center;
          transition: color .2s cubic-bezier(.4,.01,.165,.99);
          &:hover{
            color: #fff;
          }
          i.iconfont{
            width: 25px;
            margin-right: 15px;
          }
        }
        a.router-link-active{
          background-color: #2479cc;
          color: #fff;
        }
      }
    }
</style>