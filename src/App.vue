<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate(to, from, next) {
    // beforeCreate()，created(), beforeMount(), mounted() 都可以
    if(this.$router.path !== '/index'){
        this.$router.replace('/index')
    }
  },
  watch: {
    $route: function(to, from) {
      let _this = this;
         window.onpopstate = () => {
              history.go(1)
         }
    }
  }
};
</script>

<style>
#app {
  color: #2c3e50;
  height: 100%;
}
</style>
