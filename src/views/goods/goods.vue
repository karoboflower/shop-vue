<template>
    <!-- 右边内容 -->
    <div class="setting_cnt">
      <div class="setting_mould">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
     
    };
  },
  methods: {
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
