<template>
  <div class="line_com_box" :style="bg">
    <div class="line">
      <div class="position_bor" :style="styleObject"></div>
    </div>
    <slot name="del"></slot>
  </div>
</template>
<script>
export default {
  name: "auxiliarlineComponent",
  data() {
    return {
      styleObject: {
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "#000",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "#fff"
      },
      bg: {
        backgroundColor: "#fff"
      }
    };
  },
  computed: {
    auxiliarlineStyleObj() {
      return this.$store.state.auxiliarlineStyleObj;
    }
  },

  watch: {
    auxiliarlineStyleObj(newVal) {
      this.styleObject = newVal;
      console.log('背景色',newVal.backgroundColor)
       var obj={
        backgroundColor:newVal.backgroundColor
      }
      this.bg=obj;
    }
  }
};
</script>


<style scoped>
.line_com_box {
  position: relative;
}
.line_com_box .line {
  padding: 2px;
}
</style>