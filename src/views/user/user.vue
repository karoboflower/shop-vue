<template>
  <div class="d_start user_warpper">
    <!-- 左边菜单栏 -->
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
    <!-- 右边内容 -->
    <div class="user_cnt">
      <div class="user_mould">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      activeI: 0,
      tabTitle: "管理员",
      tabList: [
        {
          name: "管理员列表",
          router: "/admin"
        },
        {
          name: "角色管理",
          router: "/roleManager"
        }
      ]
    };
  },
  methods: {
    // 改变默认选中
    changeTab(i, path) {
      this.activeI = i;
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.user_warpper {
  height: 100%;
}
.user_cnt {
  margin: 20px 0 0 20px;
  flex: 1;
}
.user_cnt .user_mould {
  background-color: #fff;
  color: #333;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 10px 20px;
}

.user_warpper .page_menu_box {
  background: #fff;
  width: 120px;
}
.user_warpper .page_menu_box .page_menu_title {
  font-size: 16px;
  padding: 15px 30px;
  line-height: 2em;
}
.user_warpper .page_menu_box ul {
  text-align: left;
  color: #333;
  font-size: 14px;
  line-height: 2em;
}
.user_warpper .page_menu_box ul li {
  padding: 5px 20px;
}
.user_warpper .page_menu_box .page_menu_active {
  background: #f5f5f5;
}
</style>
