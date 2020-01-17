<template>
 
    <!-- 右边内容 -->
    <div class="user_cnt">
      <div class="user_mould">
        <router-view></router-view>
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

    };
  },
  methods: {
    // 改变默认选中
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
