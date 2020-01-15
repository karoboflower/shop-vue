<template>
  <div class="d_start wxapp_warpper">
    <!-- 左边菜单栏 -->
    <div class="page_menu_box">
      <div class="page_menu_title">{{tabTitle}}</div>
      <ul>
        <li
          v-for="(item,index) of tabList"
          :key="index"
          :class="activeI==index ?'page_menu_active':''"
          @click="changeTab(index,item.child)"
          @click.stop
        >
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
      </ul>
    </div>

    <!-- 右边内容 -->
    <div class="wxapp_cnt">
      <div class="wxapp_mould">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wxapp",
  data() {
    return {
      value1: '0',
      panleI: -1, //折叠菜单选中
      activeI: 0, //非折叠菜单选中
      tabTitle: "小程序",
      tabList: [
        {
          name: "小程序设置",
          router: "/wxappSetting"
        },
        {
          child: [
            {
              name: "页面设计",
              router: "/wxappPageDesign"
            },
            {
              name: "分类模板",
              router: "/wxappPageModule"
            },
            {
              name: "页面链接",
              router: "/wxappPageLink"
            }
          ]
        },
        {
          name: "帮助中心",
          router: "/wxappHelp"
        }
      ]
    };
  },
  created() {
    this.refuibishHandle();
  },
  methods: {
    // 刷新后判断
    refuibishHandle() {
      if (this.$route.name == "wxappSetting") {
        this.activeI = 0;
        this.panleI = -1;
      } else if (this.$route.name == "wxappHelp") {
        this.activeI = 2;
        this.panleI = -1;
      } else if (this.$route.name == "wxappPageDesign") {
        this.value1 = '1';
        this.panleI = 0;
        this.activeI = -1;
      } else if (this.$route.name == "wxappPageModule") {
        this.value1 = '1';
        this.panleI = 1;
        this.activeI = -1;
      } else if (this.$route.name == "wxappPageLink") {
        this.value1 = '1';
        this.panleI = 2;
        this.activeI = -1;
      }
    },
    //非折叠菜单选中
    changeTab(i, child) {
      this.panleI = -1;
      if (!child) {
        this.activeI = i;
        this.$router.push(this.tabList[i].router);
      }
    },
    //折叠菜单选中
    changePanle(e, i, parentI) {
      this.activeI = -1;
      this.panleI = i;
      this.$router.push(this.tabList[parentI].child[i].router);
      e.stopPropagation();
    }
  }
};
</script>

<style>
.wxapp_warpper {
  height: 100%;
}
.wxapp_warpper .page_menu_box {
  background: #fff;
  width: 120px;
}
.wxapp_warpper .page_menu_box .page_menu_title {
  font-size: 16px;
  padding: 15px 30px;
  line-height: 2em;
}
.wxapp_warpper .page_menu_box ul {
  text-align: left;
  color: #333;
  font-size: 14px;
  line-height: 2em;
}
.wxapp_warpper .page_menu_box ul li {
  padding: 5px 20px;
}
.wxapp_warpper .page_menu_box .page_menu_active {
  background: #f5f5f5;
}
.wxapp_warpper .ivu-collapse {
  border: none;
}

.wxapp_warpper .ivu-collapse > .ivu-collapse-item > .ivu-collapse-header {
  padding-left: 0;
  text-align: left;
  font-size: 14px;
  color: #333;
}
.wxapp_warpper .ivu-collapse-content {
  color: #333;
  padding: 0;
  width: 120px;
  margin-left: -20px;
  text-align: center;
}
.wxapp_warpper .ivu-collapse > .ivu-collapse-item > .ivu-collapse-header > i {
  margin: 0;
}
.wxapp_warpper .ivu-collapse-content > .ivu-collapse-content-box {
  padding: 0;
}
.ivu-collapse-simple
  > .ivu-collapse-item
  > .ivu-collapse-content
  > .ivu-collapse-content-box
  p {
  padding: 5px 10px;
}
.wxapp_cnt {
  margin: 20px 0 0 20px;
  flex: 1;
}

.wxapp_cnt .wxapp_mould {
  background-color: #fff;
  color: #333;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 10px 20px;
}
</style>
