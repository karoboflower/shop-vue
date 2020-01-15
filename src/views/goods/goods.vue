<template>
  <div class="d_start setting_warpper">
    <!-- 左边菜单栏 -->
    <page-menu :tabList="tabList" :tabTitle="tabTitle" @goto="goPage"></page-menu>
    <!-- 右边内容 -->
    <div class="setting_cnt">
      <div class="setting_mould">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
      tabTitle: "商品管理",
      tabList: [
        {
          name: "商品列表",
          router: "/goodsList"
        },
        {
          name: "商品分类",
          router: "/goodsKind"
        }
      ]
    };
  },
  methods: {
    goPage(val) {
      this.$router.push(val);
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
