<template>
  <div class="blank_box">
    <ul>
      <!-- 背景颜色 -->
      <li class="color d_start">
        <span>背景颜色</span>
        <div class="point_color d_around">
          <span @click="changeColor" class="color_input" :style="currentStyle"></span>
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
          <Slider v-model="value1" @on-input="changHeight" :tip-format="format"></Slider>
        </div>
        <div>{{value1*2}}px(像素)</div>
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
 
  props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      showColor: false,
      format (val) {
        return val + "%";
      },
      colors: {
        hex: "#fff",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      }
    };
  },
   computed: {
    currentStyle: function () {
      return {
        backgroundColor: this.choseColor
      }
    },
    choseColor: {
      get: function () {
        return this.defaultData.style.background;
      },
      set: function (val) {
        this.defaultData.style.background = val;
      }
    },
    value1: {
      get: function () {
        return this.defaultData.style.height / 2;
      },
      set: function (val) {
        this.defaultData.style.height = val * 2;
      }
    },
  },
  methods: {
    // 显示颜色版弹框
    changeColor () {
      this.showColor = true;
    },
    // 颜色版选中颜色
    updateValue (data) {
      this.choseColor = data.hex;
    },
    // 确定提交选中颜色
    sure () {
      this.showColor = false;
      this.changHeight();
    },
    //关闭颜色版
    close () {
      this.showColor = false;
    },
    // 重置组件颜色
    resetColor () {
      this.choseColor = "#fff";
      this.changHeight();
    },
    // 改变高度
    changHeight (data) {
      this.$store.commit("incrementCompListItem", {
        type: 'style',
        value: {
          background: this.choseColor,
          height: this.value1 * 2,
        }
      });
    },

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




