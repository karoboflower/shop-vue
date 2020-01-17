<template>
  <div class="blank_com_box">
    <div :style="blankStyleObj" v-html="content?content:'这里是文本的内容'"></div>
  </div>
</template>
<script>
export default {
  name: "richTextComponent",
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
        paddingTop:defaultStyle.paddingTop+"px",
        paddingBottom: defaultStyle.paddingTop + "px",
        paddingLeft: defaultStyle.paddingLeft + "px",
        paddingRight: defaultStyle.paddingLeft + "px",
      }
    },
    content(){
        return this.defaultData.params.content;
    }
  },
};
</script>


<style scoped>
.blank_com_box {
  position: relative;
}
</style>