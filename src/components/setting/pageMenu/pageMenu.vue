<template>
  <div class="page_menu_box">
    <div class="page_menu_title">{{tabTitle}}</div>
    <ul>
      <li
        v-for="(item,index) of tabList"
        :key="index"
        :class="activeI==index ?'page_menu_active':''"
        @click="changeTab(index,item.router)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pageMenu",
  data() {
    return {
      activeI: 0
    };
  },
  props: {
    tabList: {
      type: [Array],
      default: []
    },
    tabTitle: {
      type: [String],
      default: ""
    }
  },
  created() {
    this.refuibishHandle();
  },
  methods: {
    // 改变菜单栏
    changeTab(index, router) {
      this.activeI = index;
      this.$emit("goto", router);
    },
    // 刷新后判断
    refuibishHandle() {
      if (this.$route.name == "storeSetting") {
        this.activeI = 0;
      } else if (this.$route.name == "paySetting") {
        this.activeI = 1;
      } else if (this.$route.name == "sendSetting" || this.$route.name == "addSend" || this.$route.name == "editSend") {
        this.activeI = 2;
      } else if (this.$route.name == "inforSetting") {
        this.activeI = 3;
      } else if (this.$route.name == "upSetting") {
        this.activeI = 4;
      }
    }
  }
};
</script>

<style scoped>
.page_menu_box {
  background: #fff;
  width: 120px;
}
.page_menu_box .page_menu_title {
  font-size: 16px;
  padding: 15px 20px;
  line-height: 2em;
  text-align: center
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
</style>


