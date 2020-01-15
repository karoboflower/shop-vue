<template>
  <div class="blank_com_box">
    <div :style="styleObject"></div>
    <slot name="del"></slot>
  </div>
</template>
<script>
export default {
  name: "blankComponent",
  data() {
    return {
      styleObject: {
        height: "20px",
        backgroundColor: "#fff"
      }
    };
  },
  computed: {
    blankStyleObj() {
      return this.$store.state.blankStyleObj;
    }
  },

  watch: {
    blankStyleObj(newVal) {
      console.log('newVal',newVal)

      this.styleObject = newVal;
      console.log('styleObject',this.styleObject)
    }
  }
};
</script>


<style scoped>
.blank_com_box {
  position: relative;
}
</style>