<template>
  <div>
    <div class="home_wrapper d_start">
      <!-- 左边 -->
      <menu-left class="home_left" v-show="menuShow" @goto="gopage"></menu-left>
      <!-- 右边 -->
      <div class="home_right" >
        <div class="home_right_top d_btw" ref="top">
          <div>
            <i class="iconfont icon-caidan" @click="handleMenu"></i>
            <i class="iconfont icon-shuaxin shuaxin"></i>
          </div>
          <div class="home_right_top_right">
            <span style="color:#23abf0;">商业版介绍</span>
            <span>欢迎你, xxx</span>
            <div style="display:inline-block" @click="loginOut">
              <i class="iconfont icon-yyexit exit"></i>
            <span>退出</span>
            </div>
          </div>
        </div>
        <div class="box"></div>
        <div class="home_right_cnt">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeService from '../../service/home/homeService'
export default {
  name: "home",
  data() {
    return {
      menuShow: true
    };
  },
  methods: {
    //显示或隐藏菜单
    handleMenu() {
      this.menuShow = !this.menuShow;
      if (this.menuShow) {
        this.$refs.top.style.width = "calc(100% - 160px)";
      } else {
        this.$refs.top.style.width = "100%";
      }
    },

    //菜单路由跳转
    gopage(val) {
      this.$router.push(val);
    },
    //退出登录
    loginOut(){
      homeService.loginOut().then(res=>{
      })
    }
  }
};
</script>

<style scoped>
.home_wrapper {
  width: 100%;
  font-size: 18px;
}
.home_left {
  color: rgba(255, 255, 255, 0.7);
  box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #20222a;
  height: 100vh;
  overflow: auto;

}
.home_right {
  flex: 1;
  overflow: auto;
  height: 100vh;

}
.home_right .home_right_top {
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  height: 50px;
  width: calc(100% - 160px);
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}
.home_right .home_right_top i {
  font-size: 22px;
}
.home_right .home_right_top .shuaxin {
  font-size: 20px;
  margin-left: 10px;
}
.home_right .home_right_top .exit {
  font-size: 18px;
}
.home_right .home_right_top span {
  font-size: 14px;
  margin-right: 30px;
}
.box {
  height: 50px;
}
.home_right_cnt{
  height: calc(100% - 50px);
}

</style>




