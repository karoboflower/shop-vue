<template>
  <div class="blank_box">
    <ul>
      <!-- 背景颜色 -->
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
      <!-- 组件高度 -->
      <li class="distance d_start">
        <span>组件高度</span>
        <div class="dis_slider">
          <Slider v-model="value" @on-input="changHeight" :tip-format="format"></Slider>
        </div>
        <div>{{height}}px(像素)</div>
      </li>
    </ul>
  </div>
</template>


<script>
import { Photoshop } from "vue-color";
export default {
  name: "blank",
  components: {
    "photoshop-picker": Photoshop
  },

  data() {
    return {
      styleObject: {
        height: "20px",
        backgroundColor: "#fff"
      },
      value: 20,
      height:20,
      showColor: false,
      format(val) {
        return val + "%";
      },
      colors: {
        choseColor: "#fff",
        hex: "#fff",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      }
    };
  },
  methods: {
    // 显示颜色版弹框
    changeColor() {
      this.showColor = true;
    },
    // 颜色版选中颜色
    updateValue(data) {
      this.choseColor = data.hex;
    },
    // 确定提交选中颜色
    sure() {
      this.$refs.color.style.backgroundColor = this.choseColor;
      this.styleObject.backgroundColor = this.choseColor;
      this.$store.commit("incrementBlankStyleObj", this.styleObject);
      this.showColor = false;
    },
    //关闭颜色版
    close() {
      this.showColor = false;
    },
    // 重置组件颜色
    resetColor() {
      this.$refs.color.style.backgroundColor = "#fff";
      this.styleObject.backgroundColor = "#ffff";
      this.$store.commit("incrementBlankStyleObj", this.styleObject);
    },
    // 改变高度
    changHeight(data) {
      this.height = parseInt(data * 2);
      this.styleObject.height = this.height + "px";
      this.$store.commit("incrementBlankStyleObj", this.styleObject);
    }
  }
};
</script>
<style>
.blank_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}
.blank_box li span {
  padding-right: 10px;
}
.blank_box .distance {
  margin: 20px auto;
}
.blank_box .distance .dis_slider {
  width: 100px;
  margin: 10px 15px;
}
.blank_box .distance .dis_slider .ivu-slider-wrap {
  margin: 0;
}
.blank_box .distance .ivu-slider {
}
.blank_box .distance .ivu-slider-bar {
  background: #61bd12;
}
.blank_box .distance .ivu-slider-button {
  border: 2px solid #ddd;
}
.blank_box .color_pick {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
}
.blank_box li .point_color {
  border: 1px solid #efefef;
  width: 130px;
  height: 30px;
  align-items: center;
}
.blank_box li .point_color .color_input {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;
  background: #fff;
}
.blank_box li .point_color .color_btn {
  display: inline-block;
  width: 50px;
  border-left: 1px solid #efefef;
  padding-left: 8px;
}
.blank_box .color {
  margin: 20px auto;
}

.blank_box .blank_items {
}
.blank_box .blank_item {
  padding: 20px;
  background: #f7fafc;
  margin: 10px auto;
  position: relative;
}
.wrong {
  position: absolute;
  right: -5px;
  top: -10px;
  font-size: 20px;
  color: rgba(153, 153, 153, 0.7);
}
.blank_box .blank_item img {
  height: 50px;
  width: 60px;
}
.blank_box .blank_item .img_box {
  margin-bottom: 20px;
}
.blank_box .blank_item p {
  color: #838fa1;
  font-size: 12px;
}
.blank_box .blank_item span {
  padding-top: 10px;
  width: 70px;
  margin-right: 10px;
  text-align: right;
}
.blank_box .blank_item .ivu-input-wrapper {
  width: auto;
}
.blank_box .blank_item .ivu-input {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
  background-color: transparent;
}
</style>




