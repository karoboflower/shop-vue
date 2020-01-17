<template>
  <div ref="test">
    <ul class="sipwer_compon">
      <li>
        <img :src="list[0].img?list[0].img:defaultImgUrl" alt />
      </li>
      <div class="point">
        <div v-for="(item,index) of list" :key="index" class="point_item" :style="styleObject"></div>
      </div>
      <slot name="del"></slot>
    </ul>
  </div>
</template>


<script>
export default {
  name: "swiperComponent",
  props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      type: "",
       defaultImgUrl: require("../../../assets/images/defaultImg.png")
    };
  },
  computed: {
    styleObject () {
      let defaultStyle = this.defaultData.style;
      if (defaultStyle.btnShape === "round") {
        return {
          height: "15px",
          width: "15px",
          borderRadius: "50%",
          backgroundColor: defaultStyle.btnColor
        }
      } else if (defaultStyle.btnShape === "square") {
        return {
          height: "15px",
          width: "15px",
          borderRadius: "0%",
          backgroundColor: defaultStyle.btnColor
        }
      } else if (defaultStyle.btnShape === "rectangle") {
            return {
          height: "5px",
          width: "30px",
          borderRadius: "0%",
          backgroundColor: defaultStyle.btnColor
        }
      }
    },
    list(){
        return this.defaultData.data
    }
  },
};
</script>
<style scoped>
.sipwer_compon {
  line-height: 0;
  position: relative;
}
.sipwer_compon img {
  width: 100%;
  height: 200px;
}
.sipwer_compon .point {
  position: absolute;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
}

.sipwer_compon .point .point_item {
  display: inline-block;
  margin-left: 5px;
}
</style>


