<template>
  <div class="line_box">
    <ul>
      <!-- 背景颜色 -->
      <li class="color d_start">
        <span>背景颜色</span>
        <div class="point_color d_around">
          <span @click="changeColor1" class="color_input" ref="color1"></span>
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
        <RadioGroup v-model="radioGroup" @on-change="changeBor">
          <Radio label="0">实线</Radio>
          <Radio label="1">虚线</Radio>
          <Radio label="2">点状</Radio>
        </RadioGroup>
      </li>
      <!-- 线条颜色 -->
      <li class="color d_start">
        <span>线条颜色</span>
        <div class="point_color d_around">
          <span @click="changeColor2" class="black" ref="color2"></span>
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
          <Slider v-model="value1" @on-input="changHeight" :tip-format="format1"></Slider>
        </div>
        <div>{{lineHeight}}px(像素)</div>
      </li>
      <!-- 上下边距 -->
      <li class="distance d_start">
        <span>上下边距</span>
        <div class="dis_slider">
          <Slider v-model="value2" @on-input="changTopBot" :tip-format="format2"></Slider>
        </div>
        <div>{{margin}}px(像素)</div>
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
  data() {
    return {
      radioGroup: "0",
      styleObject: {
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "#000",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "#fff"
      },
      value1: 5,
      lineHeight: 1,
      margin: 10,
      value2: 20,
      format1(val) {
        return val + "%";
      },
      format2(val) {
        return val + "%";
      },
      showColor1: false,
      colors1: {
        choseColor1: "#fff",
        hex: "#fff",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      },
      showColor2: false,
      colors2: {
        choseColor: "#000",
        hex: "#000",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      }
    };
  },
  methods: {
    // 线条样式
    changeBor(data) {
      if (data == "0") {
        this.styleObject.borderBottomStyle = "solid";
        this.$store.commit("incrementAuxiliarlineStyleObj", this.styleObject);
      } else if (data == "1") {
        this.styleObject.borderBottomStyle = "dashed";
        this.$store.commit("incrementAuxiliarlineStyleObj", this.styleObject);
      } else if (data == "2") {
        this.styleObject.borderBottomStyle = "dotted";
        this.$store.commit("incrementAuxiliarlineStyleObj", this.styleObject);
      }
    },
    // 线条高度
    changHeight(data) {
      this.lineHeight = parseInt(data / 5);
      this.styleObject.borderBottomWidth = this.lineHeight + "px";
      this.$store.commit("incrementAuxiliarlineStyleObj", this.styleObject);
    },
    // 改变上下边距
    changTopBot(data) {
      this.margin = parseInt(data / 2);
      this.styleObject.marginTop = this.margin + "px";
      this.styleObject.marginBottom = this.margin + "px";
      this.$store.commit("incrementAuxiliarlineStyleObj", this.styleObject);
    },
    // 显示颜色版弹框
    changeColor1() {
      this.showColor1 = true;
    },
    // 颜色版选中颜色
    updateValue1(data) {
      this.choseColor1 = data.hex;
    },
    // 确定提交选中颜色
    sure1() {
      this.$refs.color1.style.backgroundColor = this.choseColor1;
      this.styleObject.backgroundColor = this.choseColor1;
      this.$store.commit("incrementAuxiliarlineStyleObj", this.styleObject);
      this.showColor1 = false;
    },
    //关闭颜色版
    close1() {
      this.showColor1 = false;
    },
    // 重置组件颜色
    resetColor1() {
      this.$refs.color1.style.backgroundColor = "#fff";
      this.styleObject.backgroundColor = "#fff";
      this.$store.commit("incrementAuxiliarlineStyleObj", this.styleObject);
    },

    // 显示颜色版弹框
    changeColor2() {
      this.showColor2 = true;
    },
    // 颜色版选中颜色
    updateValue2(data) {
      this.choseColor2 = data.hex;
    },
    // 确定提交选中颜色
    sure2() {
      this.$refs.color2.style.backgroundColor = this.choseColor2;
      this.styleObject.borderBottomColor = this.choseColor2;
      this.$store.commit("incrementAuxiliarlineStyleObj", this.styleObject);
      this.showColor2 = false;
    },
    //关闭颜色版
    close2() {
      this.showColor2 = false;
    },
    // 重置组件颜色
    resetColor2() {
      this.$refs.color2.style.backgroundColor = "#000";
      this.styleObject.borderBottomColor = "#000";
      this.$store.commit("incrementAuxiliarlineStyleObj", this.styleObject);
    }
  }
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




