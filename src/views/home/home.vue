<template>
  <div class="content">
    <div class="left-menu">
      <Menu
        mode="vertical"
        :theme="theme1"
        active-key="0"
        style="background-color: #20222a;color:#fff"
        accordion="true"
      >
        <div v-for="(item,index) of oneLevelMenu" :key="index">
          <Submenu :name="item.id" v-if="item.children.length">
            <template slot="title">{{item.title}}</template>
            <div v-for="(item1,index1) of item.children" :key="index1">
              <MenuGroup :title="item1.title" v-if="item1.children.length">
                <MenuItem
                  v-for="(item2,index2) of item1.children"
                  :key="index2"
                  :name="item2.id"
                  :to="item2.purl"
                >&nbsp;&nbsp;&nbsp;&nbsp;{{item2.title}}</MenuItem>
              </MenuGroup>
              <MenuItem v-else :key="index1" :name="item1.id" :to="item1.purl">{{item1.title}}</MenuItem>
            </div>
          </Submenu>
          <MenuItem :name="item.id" :to="item.purl" v-else>{{item.title}}</MenuItem>
        </div>
      </Menu>
    </div>
    <div class="right-content">
      <div class="right-content-top">
        <span style="color:#23abf0;">商业版介绍</span>
        <span>欢迎你, xxx</span>
        <div style="display:inline-block" @click="loginOut">
          <i class="iconfont icon-yyexit exit"></i>
          <span>退出</span>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import homeService from "../../service/home/homeService";

export default {
  name: "home",
  data() {
    return {
      oneLevelMenu: [],
      theme1: "dark",
      hackReset: false
    };
  },
  methods: {
    //退出登录
    loginOut() {
      homeService.loginOut().then(res => {

      });
    },
  },
  created: function() {
    let _this = this;
    let parentName = _this.$route.meta.parentsName;
    homeService.getPowerList({ current: 1, size: 10 }).then(res => {
      if (res.code === 0) {
        _this.oneLevelMenu = res.data;
        _this.hackReset = false;
        _this.$nextTick(() => {
          _this.hackReset = true;
        });
      }
    });
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  height: calc(100%);
}
.left-menu {
  width: 240px;
  background-color: #20222a;
  -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
.right-content {
  width: calc(100% - 240px);
}
.right-content-top {
  text-align: right;
  font-size: 16px;
  background-color: #fff;
  padding: 20px;
}
.right-content-top span {
  padding: 0px 20px;
}
</style>







