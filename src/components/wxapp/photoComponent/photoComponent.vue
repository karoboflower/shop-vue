<template>
  <div>
    <ul class="photo_compon" :style="styleObject">
      <li v-for="(item,index) of list" :key="index" :style="styleObject" class="default">
        <img :src="item.img?item.img:defaultImgUrl" alt />
      </li>
      <slot name="del"></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: "photoComponent",
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
        backgroundColor: defaultStyle.background,
        paddingTop: defaultStyle.paddingTop+"px",
        paddingBottom: defaultStyle.paddingTop+"px",
        paddingLeft: defaultStyle.paddingLeft+"px",
        paddingRight: defaultStyle.paddingLeft+"px"
      }
    },
    list () {
      return this.defaultData.data
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


