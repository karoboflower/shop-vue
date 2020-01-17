<template>
  <div>
    <div class="home_wrapper d_start">
      <!-- 左边 -->
      <Menu
        :theme="theme2"
        @on-select="checkFirstMenu"
        style="width:170px;background:#20222a;color:#fff;"
        :active-name="activeIndex"
        mode="vertical"
        v-if="hackReset"
      >
        <MenuItem v-for="(item,index) of oneLevelMenu" :key="index" :name="index">{{item.title}}</MenuItem>
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
              <Menu
                :theme="theme2"
                width="100%"
                mode="vertical"
                :active-name="activeIndex2"
                @on-select="selectMenu"
                v-if="hackReset"
              >
                <div v-for="(item1,index1) of twoLevelMenu" :key="index1">
                  <Submenu :name="item1.id" v-if="item1.children.length">
                    <template slot="title">{{item1.title}}</template>
                    <MenuItem
                      v-for="(item2,index2) of item1.children"
                      :key="index2"
                      :name="item2.id"
                      :to="item2.purl?item2.purl:''"
                    >{{item2.title}}</MenuItem>
                  </Submenu>
                  <MenuItem :name="item1.id" :to="item1.purl?item1.purl:''" v-else>{{item1.title}}</MenuItem>
                </div>
              </Menu>
            </div>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeService from "../../service/home/homeService";

export default {
  name: "home",
  data() {
    return {
      menuShow: true,
      oneLevelMenu: [],
      twoLevelMenu: [],
      //    activeIndex: 0,
      //  activeIndex2: 0,
      theme2: "light",
      currentUrl: "",
      hackReset: false
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
    //退出登录
    loginOut() {
      homeService.loginOut().then(res => {});
    },
    checkFirstMenu(index) {
      this.hackReset = false;
      this.$nextTick(() => {
        this.hackReset = true;
      });//刷新菜单
      this.twoLevelMenu = this.oneLevelMenu[index].children;
      if (this.twoLevelMenu.length) {
        let current = this.twoLevelMenu[0].children.length
          ? this.twoLevelMenu[0].children[0]
          : this.twoLevelMenu[0];
        let _url = current.purl ? current.purl : "index";
        this.$store.commit("getCurrentMenu", {
          sort: current.porder,
          parentId: this.oneLevelMenu[index].id, //一级菜单的id
          id: current.id,
          url: current.purl
        });
        this.$store.commit("getMenuResource", true);
        if (_url.indexOf("?") > 0) {
          let params = {};
          let _urlStr = _url
            .substr(_url.indexOf("?") + 1, _url.length)
            .split("&");
          for (let i = 0; i < _urlStr.length; i++) {
            params[_urlStr[i].split("=")[0]] = _urlStr[i].split("=")[1];
          }
          this.$router.push({ path: _url, query: params });
        } else {
          this.$router.push({ path: _url });
        }
      } else {
        this.$store.commit("getCurrentMenu", {
          sort: this.oneLevelMenu[index].porder,
          parentId: this.oneLevelMenu[index].parentId, //一级菜单的id
          id: this.oneLevelMenu[index].id,
          url: this.oneLevelMenu[index].purl
        });
        this.$store.commit("getMenuResource", true);
        this.$router.push({ path: this.oneLevelMenu[index].purl });
      }
    },
    selectMenu(id) {
      let _this = this;
      for (let i = 0; i < _this.twoLevelMenu.length; i++) {
        if (_this.twoLevelMenu[i].id === id) {
          _this.$store.commit("getCurrentMenu", {
            sort: _this.twoLevelMenu[i].porder,
            parentId: _this.twoLevelMenu[i].parentId,
            id: _this.twoLevelMenu[i].id,
            url: _this.twoLevelMenu[i].purl
          });
          break;
        } else {
          let _child = _this.twoLevelMenu[i].children;
          for (let j = 0; j < _child.length; j++) {
            if (_child[j].id === id) {
              _this.$store.commit("getCurrentMenu", {
                sort: _child[j].porder,
                parentId: child[j].parentId,
                id: child[j].parentId,
                url: child[j].purl
              });
              break;
            }
          }
        }
      }
    }
  },
  created: function() {
    let _this = this;
    let parentName = _this.$route.meta.parentsName;
    homeService.getPowerList({ current: 1, size: 10 }).then(res => {
      if (res.code === 0) {
        _this.oneLevelMenu = res.data;
        if (parentName) {
          //刷新页面的时候强制刷新
          let _sort = _this.$route.meta.sort;
          for (let i = 0; i < _this.oneLevelMenu.length; i++) {
            if (parentName === _this.oneLevelMenu[i].pval) {
              _this.activeIndex = i;
            }
          }
          _this.twoLevelMenu = _this.oneLevelMenu[_this.activeIndex].children;
          _this.activeIndex2 = _this.twoLevelMenu[_sort - 1].id;
        }
        _this.hackReset = false;
        _this.$nextTick(() => {
          _this.hackReset = true;
        });
      }
    });
  },
  computed: {
    activeIndex: function() {
      let parentId = this.$store.state.currentMenu.parentId;
      for (let i = 0; i < this.oneLevelMenu.length; i++) {
        if (parentId === this.oneLevelMenu[i].id) {
          return i;
        }
      }
       this.hackReset = false;
      this.$nextTick(() => {
        this.hackReset = true;
      });
      return 0;
    },
    activeIndex2: function() {
      return this.$store.state.currentMenu.id;
    }
  },
//   watch: {
//     hackReset: function() {
     
//     }
//   }
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
  width: 150px;
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
/deep/ .ivu-menu-vertical .ivu-menu-submenu-title-icon {
  right: 0px;
}
</style>







