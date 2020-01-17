<template>
  <div>
    <ul class="photo_compon">
      <li :style="styleObject" class="default">
        <video
          :src="videoUrl"
          :poster="img?img:defaultImgUrl"
          :style="videoStyle"
          controls="controls"
        >您的浏览器不支持 video 标签</video>
      </li>
        <slot name="del"></slot>
    </ul>
  </div>
</template>


<script>
export default {
  name: "videoComponent",
  data () {
    return {
      defaultImgUrl: require("../../../assets/images/defaultImg.png")
    };
  },
  props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
  computed: {
    styleObject () {
      let defaultStyle = this.defaultData.style;
      return {
        paddingTop: defaultStyle.paddingTop + "px",
        paddingBottom: defaultStyle.paddingTop + "px",
      }
    },
    videoUrl () {
      if (this.defaultData.params.videoUrl) {
        return this.defaultData.params.videoUrl
      } else {
        return 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400'
      }

    },
    videoStyle () {
      return {
        height: this.defaultData.height+"px",
        width: '100%'
      }
    },
    img () {
      return this.defaultData.params.img
    }
  },
};
</script>
<style scoped>
.photo_compon {
  line-height: 0;
  position: relative;
}

.photo_compon .default {
  box-sizing: border-box;
}
.photo_compon .default img {
  width: 100%;
  height: 200px;
}
</style>


