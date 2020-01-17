<template>
  <div>
    <div class="home_wrapper d_start">
      <!-- 左边 -->
      <Menu active-name="1">
        <MenuItem  v-for="item of oneLevelMenu" :key="item.id" name="item.id">{{item.title}}</MenuItem>
      </Menu>
      <!-- 右边 -->
      <div class="home_right">
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
          <div class="d_start setting_warpper">
            <div class="page_menu_box" v-if="twoLevelMenu.length">
              <div class="page_menu_title">{{oneLevelMenu[activeIndex].pname}}</div>

              <!-- <ul>
                <li
                  v-for="(item,index) of twoLevelMenu"
                  :key="index"
                  :class="activeIndex1==index ?'page_menu_active':''"
                  @click="changeTab(index,item)"
                >
                  {{item.title}}
                  <Collapse simple v-if="item.child" v-model="value1">
                    <Panel name="1">
                      页面管理
                      <p
                        slot="content"
                        v-for="(child,i) of item.child"
                        :key="child.name"
                        @click="changePanle($event,i,index)"
                        :class="panleI==i ?'page_menu_active':''"
                      >{{child.name}}</p>
                    </Panel>
                  </Collapse>
                  <span v-else>{{item.name}}</span>
                </li>
              </ul> -->
            </div>
            <div class="setting_cnt">
              <div class="setting_mould">
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeService from '../../service/home/homeService'

export default {
  name: "home",
  data () {
    return {
      menuShow: true,
      oneLevelMenu: [],
      twoLevelMenu: [],
      activeIndex: 0,
      activeIndex1: 0,
    };
  },
  methods: {
    //显示或隐藏菜单
    handleMenu () {
      this.menuShow = !this.menuShow;
      if (this.menuShow) {
        this.$refs.top.style.width = "calc(100% - 160px)";
      } else {
        this.$refs.top.style.width = "100%";
      }
    },

    //菜单路由跳转
    gopage (val) {
      this.$router.push(val);
    },
    //退出登录
    loginOut () {
      homeService.loginOut().then(res => {
      })
    },
    changeTab (index, item) {
      let _this = this;
      if (item.children) {
        _this.twoLevelMenu = item.children;
        this.$router.push(_this.twoLevelMenu[0].purl);
      }
    }
  },
  created: function () {
    let _this = this
    homeService.getPowerList({ current: 1, size: 10 }).then(res => {
      if (res.code === 0) {
        _this.oneLevelMenu = res.data
        _this.twoLevelMenu = _this.oneLevelMenu[_this.activeIndex].children;

      }
    })
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
.home_right_cnt {
  height: calc(100% - 50px);
}
.menu {
  width: 160px;
  text-align: center;
}
.menu li:first-child {
  margin-top: 40px;
}
.menu li {
  padding: 10px 15px;
  margin: 10px auto;
  text-align: left;
  font-size: 15px;
  border-left: 3px solid transparent;
}
.menu li i {
  font-size: 20px;
  margin-right: 10px;
}
.menu li:nth-child(5) i {
  font-size: 15px;
  color: #36b313;
}
.menu li:nth-child(6) i {
  font-size: 22px;
  color: #36b313;
}
.menu li:hover {
  border-left: 3px solid #009688;
}
.menu_active {
  cursor: pointer;
  color: #fff;
  background: #009688;
}
.menu_active i {
  color: #fff !important;
}
.page_menu_box {
  background: #fff;
  width: 120px;
}
.page_menu_box .page_menu_title {
  font-size: 16px;
  padding: 15px 20px;
  line-height: 2em;
  text-align: center;
}
.page_menu_box ul {
  text-align: center;
  color: #333;
  font-size: 14px;
  line-height: 2em;
}
.page_menu_box ul li {
  padding: 5px 10px;
}
.page_menu_box .page_menu_active {
  background: #f5f5f5;
}
.setting_warpper {
  height: 100%;
}
.setting_cnt {
  margin: 20px 0 0 20px;
  flex: 1;
}
.setting_cnt .setting_mould {
  background-color: #fff;
  color: #333;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 10px 20px;
}
</style>







