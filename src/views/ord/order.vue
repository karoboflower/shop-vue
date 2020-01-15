<!--
 * @Author: wangchunhua
 * @Date: 2019-07-29 17:04:49
 * @Description: 
 -->
<template>
  <div class="d_start setting_warpper">
    <!-- 左边菜单栏 -->
    <page-menu :tabList="tabList"
               :tabTitle="tabTitle"
               @goto="goPage"></page-menu>
    <!-- 右边内容 -->
    <div class="setting_cnt">
      <div class="setting_mould">
        <router-view :key="$route.path + $route.query.type"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods",
  data () {
    return {
      tabTitle: "订单管理",
      tabList: [
        {
          name: "待发货",
          router: "wait"
        },
        {
          name: "待收货",
          router: "take"
        },
        {
          name: "待付款",
          router: "pay"
        },
        {
          name: "已完成",
          router: "finish"
        },
        {
          name: "已取消",
          router: "cancel"
        },
        {
          name: "全部订单",
          router: "all"
        }
      ]
    };
  },
  methods: {
    goPage (val) {
        this.$router.push({path: '/orderItem', query: {type:val}})
    }
  }
};
</script>

<style scoped>
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
