<template>
  <div class="announce_com">
    <div class="d_start item"   :style="styleObject">
      <img :src="params.img?params.img:defaultImgUrl" class="img" />
      <span class="txt" :style="{'fontSize':styleObject.fontSize}">{{params.text?params.text:'这里是第一条自定义公告的标题'}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "announceComponent",
  props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
         defaultImgUrl: require("../../../assets/images/defaultImg.png")
    };
  },
    computed: {
    styleObject () {
      let defaultStyle = this.defaultData.style;
      return {
        backgroundColor: defaultStyle.background,
        paddingTop: defaultStyle.paddingTop+"px",
        paddingBottom: defaultStyle.paddingTop+"px",
        color:defaultStyle.textColor,
        fontSize:defaultStyle.textSize+"px"
      }
    },
     params () {
      let params=this.defaultData.params;
      return {
        img: params.img,
        text:params.text
      }
    },
  },
};
</script>
<style scoped>
.announce_com {
  position: relative;
}
.announce_com .item {
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}
.announce_com .img {
  width: 20px;
}
.announce_com .txt {
  display: inline-block;
  flex: 1;
  padding: 0 10px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>


