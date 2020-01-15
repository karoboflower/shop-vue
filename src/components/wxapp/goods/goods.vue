<template>
  <div class="goods_box">
    <ul>
      <li class="goods_items">
        <span>商品来源</span>
        <RadioGroup v-model="origin" @on-change="changeOrigin">
          <Radio label="0">自动获取</Radio>
          <Radio label="1">手动选择</Radio>
        </RadioGroup>
      </li>
      <!-- 自动获取 -->
      <div v-if="auto">
        <li class="goods_items">
          <span>商品分类</span>
          <Select v-model="model" style="width:200px">
            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </li>
        <li class="goods_items">
          <span>商品排序</span>
          <RadioGroup v-model="sort" @on-change="changeSort">
            <Radio label="0">综合</Radio>
            <Radio label="1">销量</Radio>
            <Radio label="2">价格</Radio>
          </RadioGroup>
        </li>
        <li class="goods_items">
          <span>显示数量</span>
          <InputNumber :min="1" :value="number" />
        </li>
      </div>
      <!-- 手动选择 -->
      <div v-else class="img_box">
        <div class="img_item">
          <img src="https://demo.yiovo.com/assets/store/img/diy/goods/01.png" alt />
          <i class="iconfont icon-web-icon- wrong"></i>
        </div>
        <div class="img_item">
          <img src="https://demo.yiovo.com/assets/store/img/diy/goods/01.png" alt />
          <i class="iconfont icon-web-icon- wrong"></i>
        </div>
        <Button style="width:100%">选择商品</Button>
      </div>

      <div style="border-top: 1px dashed #ccc;margin:20px auto;"></div>
      <li class="color d_start">
        <span>背景颜色</span>
        <div class="point_color d_around">
          <span @click="changeColor" class="color_input" ref="color"></span>
          <span class="color_btn" @click="resetColor">重置</span>
        </div>
      </li>
      <photoshop-picker
        v-model="colors"
        v-if="showColor"
        @input="updateValue"
        @ok="sure"
        @cancel="close"
        class="color_pick"
      ></photoshop-picker>

      <li class="goods_items">
        <span>显示类型</span>
        <RadioGroup v-model="type" @on-change="changeType">
          <Radio label="0">列表平铺</Radio>
          <Radio label="1">横向滑动</Radio>
        </RadioGroup>
      </li>
      <li class="goods_items">
        <span>分列数量</span>
        <RadioGroup v-model="num" @on-change="changeNum">
          <Radio label="0">单列</Radio>
          <Radio label="1">两列</Radio>
          <Radio label="2">三列</Radio>
        </RadioGroup>
      </li>
      <li class="goods_items">
        <span>显示内容</span>
        <CheckboxGroup v-model="checkAllGroup">
          <Checkbox label="0">商品名称</Checkbox>
          <Checkbox label="1">商品价格</Checkbox>
          <Checkbox label="2">划线价格</Checkbox>
        </CheckboxGroup>
      </li>
    </ul>
  </div>
</template>

<script>
import { Photoshop } from "vue-color";
export default {
  name: "goods",
  components: {
    "photoshop-picker": Photoshop
  },
  props: {
    goodsData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      number: 6,
      styleObject: {
        backgroundColor: "#F5F5F5",
        width: "46%"
      },
      showColor: false,
      colors: {
        hex: "	#F5F5F5",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      },
      origin: "0",
      sort: "0",
      type: "0",
      num: "1",
      typeList: [
        {
          value: "全部分类",
          label: "-- 全部分类 --"
        }
      ],
      model: "全部分类",
      checkAllGroup: ["0"],
      auto: true,
      choseColor: "#fff"
    };
  },

  methods: {
    //商品来源
    changeOrigin(data) {
      if (data == 0) {
        this.auto = true;
      } else {
        this.auto = false;
      }
    },
    //商品排序
    changeSort(data) {},
    //显示类型
    changeType(data) {},
    //分列数量
    changeNum(data) {
      if (data == "0") {
        this.styleObject.width ='92%';
        this.$store.commit("incrementGoodsStyleObj", this.styleObject);
      } else if (data == "1") {
        this.styleObject.width ='46%';
        this.styleObject.backgroundColor = this.choseColor;
        this.$store.commit("incrementGoodsStyleObj", this.styleObject);
      } else if (data == "2") {
        this.styleObject.width ='28%';
        this.$store.commit("incrementGoodsStyleObj", this.styleObject);
      }
    },
    // 显示颜色版弹框
    changeColor() {
      this.showColor = true;
    },
    // 颜色版选中颜色
    updateValue(data) {
      this.choseColor = data.hex;
    },
    // 确定选中颜色
    sure() {
      this.$refs.color.style.backgroundColor = this.choseColor;
      this.showColor = false;
      this.styleObject.backgroundColor = this.choseColor;
      this.$store.commit("incrementGoodsStyleObj", this.styleObject);
    },
    // 重置颜色
    resetColor() {
      this.$refs.color.style.backgroundColor = "#f4f4f4";
      this.$store.commit("incrementGoodsStyleObj", this.styleObject);
    },
    //关闭颜色板
    close() {
      this.showColor = false;
    }
  }
};
</script>
<style>
.goods_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}
.goods_box .img_box {
}
.goods_box .img_box .img_item {
  display: inline-block;
  background-color: #f7fafc;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
}
.goods_box .img_box .img_item i {
  position: absolute;
  top: -5px;
  right: -5px;
}
.goods_box .img_box .img_item img {
  width: 60px;
  height: 60px;
}

.goods_box .goods_items {
  margin: 15px 0;
  font-size: 14px;
}

.goods_box li span {
  padding-right: 10px;
}
.goods_box li .point_color {
  border: 1px solid #efefef;
  width: 130px;
  height: 30px;
  align-items: center;
}
.goods_box li .point_color .color_input {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;
  background-color: #f5f5f5;
}
.goods_box li .point_color .color_btn {
  display: inline-block;
  width: 50px;
  border-left: 1px solid #efefef;
  padding-left: 8px;
}
.goods_box .color {
  margin: 20px auto;
}
.goods_box .color_pick {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
}
.goods_box .goods_item p {
  color: #838fa1;
  font-size: 12px;
}
.goods_box .goods_item span {
  padding-top: 10px;
  width: 70px;
  margin-right: 10px;
  text-align: right;
}

.goods_box .ivu-select-single .ivu-select-selection {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
}

.goods_box .ivu-input-number {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
  width: 200px;
}
.goods_box .ivu-checkbox-group {
  display: inline-block;
}
</style>


