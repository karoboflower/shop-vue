<template>
  <div class="goods_com_box">
    <div class=" goods_com_cnt" :style="bg">
      <div v-for="(item,index) of imglist" :key="index" class="goods_item" :style="styleObject">
        <img :src="item.img?item.img:item.src" alt />
        <p class="goods_name" v-show="showName">{{item.name}}</p>
        <p class="goods_price">
          <span  v-show="showPrice">{{item.price }}.00</span>
          <span  v-show="showLinePrice">{{item.linePrice}}.00</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsComponent",
  props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      defaultList: [{
        src: require("../../../assets/images/defaultImg.png"),
        name: "此处显示商品名称",
        price: "99",
        linePrice: "139"
      }, {
        src: require("../../../assets/images/defaultImg.png"),
        name: "此处显示商品名称",
        price: "99",
        linePrice: "139"
      }, {
        src: require("../../../assets/images/defaultImg.png"),
        name: "此处显示商品名称",
        price: "99",
        linePrice: "139"
      }, {
        src: require("../../../assets/images/defaultImg.png"),
        name: "此处显示商品名称",
        price: "99",
        linePrice: "139"
      }]
    };
  },
  computed: {
    styleObject () {
      let defaultStyle = this.defaultData.style;
      return {
        width: defaultStyle.column === "2" ? '48%' : defaultStyle.column === "3" ? '31%' : '98%',
      }
    },
    imglist () {
      if (this.defaultData.params.source === "choice") {//手动选择
        return this.defaultData.data
      } else {
        return this.defaultList;
      }

    },
    bg () {
      let defaultStyle = this.defaultData.style;
      return {
        backgroundColor: defaultStyle.background,
        whiteSpace: defaultStyle.display === "slide" ? 'nowrap' : 'normal',
        overflowX: defaultStyle.display === "slide" ? 'hidden' : 'visible',
      }
    },
    showName () {
      return this.defaultData.style.show.goodsName
    },
    showPrice () {
      return this.defaultData.style.show.goodsPrice
    },
    showLinePrice () {
      return this.defaultData.style.show.linePrice
    }
  },

};
</script>

<style scoped>
.goods_com_box {
  position: relative;
}
/* .goods_com_box .goods_com_cnt {
  flex-wrap: wrap;
} */
.goods_com_box .goods_com_cnt .goods_item {
  margin: 1%;
  box-sizing: border-box;
  background-color: #fff;
  display: inline-block;
}
.goods_com_box .goods_com_cnt .goods_item img {
  /* height: 160px;
   */
}
.goods_com_box .goods_com_cnt .goods_name {
  font-size: 14px;
  line-height: 2em;
  padding-left: 5px;
}
.goods_com_box .goods_com_cnt .goods_price {
  color: #f00;
  font-size: 15px;
  padding-left: 5px;
}
.goods_com_box .goods_com_cnt .goods_price span:last-child {
  color: #999;
  font-size: 14px;
  text-decoration: line-through;
  padding-left: 5px;
}
</style>


