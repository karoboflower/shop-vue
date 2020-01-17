<template>
  <div class="line_box">
    <ul>
      <!-- 背景颜色 -->
      <li class="color d_start">
        <span>背景颜色</span>
        <div class="point_color d_around">
          <span @click="changeColor1" class="color_input" :style="currentStyle1"></span>
          <span class="color_btn" @click="resetColor1">重置</span>
        </div>
      </li>
      <photoshop-picker
        v-model="colors1"
        v-if="showColor1"
        @input="updateValue1"
        @ok="sure1"
        @cancel="close1"
        class="color_pick"
      ></photoshop-picker>

      <!-- 线条样式 -->
      <li class="flex_type d_start">
        <span>指示点颜色</span>
        <RadioGroup v-model="radioGroup" @on-change="changeStyle">
          <Radio label="solid">实线</Radio>
          <Radio label="dashed">虚线</Radio>
          <Radio label="dotted">点状</Radio>
        </RadioGroup>
      </li>
      <!-- 线条颜色 -->
      <li class="color d_start">
        <span>线条颜色</span>
        <div class="point_color d_around">
          <span @click="changeColor2" class="black" :style="currentStyle2"></span>
          <span class="color_btn" @click="resetColor2">重置</span>
        </div>
      </li>
      <photoshop-picker
        v-model="colors2"
        v-if="showColor2"
        @input="updateValue2"
        @ok="sure2"
        @cancel="close2"
        class="color_pick"
      ></photoshop-picker>
      <!-- 线条高度 -->
      <li class="distance d_start">
        <span>线条高度</span>
        <div class="dis_slider">
          <Slider v-model="value1" @on-input="changeStyle" :tip-format="format1"></Slider>
        </div>
        <div>{{value1/5}}px(像素)</div>
      </li>
      <!-- 上下边距 -->
      <li class="distance d_start">
        <span>上下边距</span>
        <div class="dis_slider">
          <Slider v-model="value2" @on-input="changeStyle" :tip-format="format2"></Slider>
        </div>
        <div>{{value2/2}}px(像素)</div>
      </li>
    </ul>
  </div>
</template>


<script>
import { Photoshop } from "vue-color";
export default {
  name: "auxiliarline",
  components: {
    "photoshop-picker": Photoshop
  },
  data () {
    return {
      radioGroup: "solid",
      value1: 5,
      lineHeight: 1,
      value2: 20,
      format1 (val) {
        return val + "%";
      },
      format2 (val) {
        return val + "%";
      },
      showColor1: false,
      colors1: {
        hex: "#fff",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      },
      showColor2: false,
      colors2: {
        hex: "#000",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      }
    };
  },
   props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
   computed: {
    currentStyle1: function () {
      return {
        backgroundColor: this.choseColor1
      }
    },
    currentStyle2: function () {
      return {
        backgroundColor: this.choseColor2
      }
    },
    choseColor1: {
      get: function () {
        return this.defaultData.style.background;
      },
      set: function (val) {
        this.defaultData.style.background = val;
      }
    },
    choseColor2: {
      get: function () {
        return this.defaultData.style.lineColor;
      },
      set: function (val) {
        this.defaultData.style.lineColor = val;
      },
    },
     value1: {
      get: function () {
        return this.defaultData.style.lineHeight / 5;
      },
      set: function (val) {
        this.defaultData.style.lineHeight = val * 5;
      },
    },
     value2: {
      get: function () {
        return this.defaultData.style.paddingTop / 2;
      },
      set: function (val) {
        this.defaultData.style.paddingTop = val * 2;
      },
    },
   },
  methods: {
    changeStyle (data) {
      this.$store.commit("incrementCompListItem", {type: 'style',
        value: {
          background: this.choseColor1, lineColor: this.choseColor2, paddingTop: this.value2, lineHeight: this.value1, lineStyle: this.radioGroup}      
          });

    },
    // 显示颜色版弹框
    changeColor1 () {
      this.showColor1 = true;
    },
    // 颜色版选中颜色
    updateValue1 (data) {
      this.choseColor1 = data.hex;
    },
    // 确定提交选中颜色
    sure1 () {
      this.showColor1 = false;
      this.changeStyle()
    },
    //关闭颜色版
    close1 () {
      this.showColor1 = false;
    },
    // 重置组件颜色
    resetColor1 () {
      this.choseColor1 = "#fff";
      this.changeStyle();
    },

    // 显示颜色版弹框
    changeColor2 () {
      this.showColor2 = true;
    },
    // 颜色版选中颜色
    updateValue2 (data) {
      this.choseColor2 = data.hex;
    },
    // 确定提交选中颜色
    sure2 () {
      this.showColor2 = false;
      this.changeStyle();
    },
    //关闭颜色版
    close2 () {
      this.showColor2 = false;
    },
    // 重置组件颜色
    resetColor2 () {
      this.choseColor1 = "#000";
      this.changeStyle();
    }
  },
};
</script>
<style>
.line_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}
.line_box li span {
  padding-right: 10px;
}
.line_box .distance {
  margin: 20px auto;
}
.line_box .distance .dis_slider {
  width: 100px;
  margin: 10px 15px;
}
.line_box .distance .dis_slider .ivu-slider-wrap {
  margin: 0;
}
.line_box .distance .ivu-slider {
}
.line_box .distance .ivu-slider-bar {
  background: #61bd12;
}
.line_box .distance .ivu-slider-button {
  border: 2px solid #ddd;
}
.line_box .color_pick {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
}
.line_box li .point_color {
  border: 1px solid #efefef;
  width: 130px;
  height: 30px;
  align-items: center;
}
.line_box li .point_color .color_input {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;
  background: #fff;
}
.line_box li .point_color .black {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;
  background: #000;
}
.line_box li .point_color .color_btn {
  display: inline-block;
  width: 50px;
  border-left: 1px solid #efefef;
  padding-left: 8px;
}
.line_box .color {
  margin: 20px auto;
}
.line_box .ivu-radio-group {
  width: 200px;
}
.line_box .ivu-radio-wrapper {
  font-size: 14px;
}
</style>




