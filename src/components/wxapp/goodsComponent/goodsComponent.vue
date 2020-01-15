<template>
  <div class="goods_com_box">
    <div class="d_start goods_com_cnt" :style="bg">
      <div v-for="(item,index) of data" :key="index" class="goods_item" :style="styleObject">
        <img :src="item.url" alt />
        <p class="goods_name">{{item.name}}</p>
        <p class="goods_price">
          <span>{{item.nowPrice}}.00</span>
          <span>{{item.price}}.00</span>
        </p>
      </div>
    </div>
    <slot name="del"></slot>
  </div>
</template>

<script>
export default {
  name: "goodsComponent",
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      styleObject: {
        backgroundColor: "	#F5F5F5",
        width:'46%'

      },
      bg: {
        backgroundColor: " 	#F5F5F5"
      },
    };
  },
   computed: {
    goodsStyleObj() {
      return this.$store.state.goodsStyleObj;
    }
  },

  watch: {
    goodsStyleObj(newVal) {
      this.styleObject = newVal;
      this.bg.backgroundColor=newVal.backgroundColor;
      this.styleObject.backgroundColor='#fff';

    },
   
  },
 
};
</script>

<style scoped>
.goods_com_box {
  position: relative;
}
.goods_com_box .goods_com_cnt {
  flex-wrap: wrap;
}
.goods_com_box .goods_com_cnt .goods_item {
  margin: 5px 2%;
  box-sizing: border-box;
  background-color: #fff;
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


