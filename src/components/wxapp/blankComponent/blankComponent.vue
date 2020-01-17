<template>
  <div class="blank_com_box">
    <div :style="blankStyleObj"></div>
  </div>
</template>
<script>
export default {
  name: "blankComponent",
  data() {
    return {
      
    };
  },
    props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
  computed: {
    blankStyleObj() {
     let defaultStyle = this.defaultData.style;
      return {
        backgroundColor: defaultStyle.background,
        height:defaultStyle.height+"px"
      }
    }
  },
};
</script>


<style scoped>
.blank_com_box {
  position: relative;
}
</style>