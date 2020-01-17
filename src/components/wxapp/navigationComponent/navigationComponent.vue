<template>
  <div>
    <ul class="navigation_compon d_start" :style="bg">
      <li v-for="(item,index) of list" :key="index" class="default" :style="styleObject">
        <img :src="item.img?item.img:defaultImgUrl" class="tabImg" />
        <p class="txt" :style="{'color':item.color?item.color:'#666'}">{{item.text?item.text:'按钮文字'+index}}</p>
      </li>
      <slot name="del"></slot>
    </ul>
  </div>
</template>


<script>
export default {
  name: "navigationComponent",
  data() {
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
        width: (defaultStyle.rowsNum=="4"?"25%":defaultStyle.rowsNum=="5"?"20%":defaultStyle.rowsNum=="3"?"33%":"100%")
      }
    },
    list () {
      return this.defaultData.data
    },
    bg(){
        return {
            backgroundColor:this.defaultData.style.background
        }
    }
  },
  methods: {}
};
</script>
<style scoped>
.navigation_compon {
  line-height: 0;
  position: relative;
  flex-wrap: wrap;
}

.navigation_compon .default {
  box-sizing: border-box;
  text-align: center;
  padding: 10px 0;
}
.navigation_compon .default .tabImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.navigation_compon .default .txt {
  font-size: 13px;
  line-height: 1.1em;
  color: rgb(102, 102, 102);
}
</style>


