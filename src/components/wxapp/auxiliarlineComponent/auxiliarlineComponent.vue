<template>
  <div class="line_com_box" :style="bg">
    <div class="line">
      <div class="position_bor" :style="styleObject"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "auxiliarlineComponent",
  data () {
    return {

    };
  },
  computed: {
    styleObject () {
      let defaultStyle = this.defaultData.style;
      return {
        borderBottomWidth: defaultStyle.lineHeight + "px",
        borderBottomStyle: defaultStyle.lineStyle,
        borderBottomColor: defaultStyle.lineColor,
        marginTop: defaultStyle.paddingTop+"px",
        marginBottom: defaultStyle.paddingTop+"px",
      }
    },
    bg() {
      return {backgroundColor: this.defaultData.style.background}
    }
  },
    props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
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