<template>
  <div class="announce_box">
    <ul>
      <!-- 上下边距 -->
      <li class="distance d_start">
        <span>上下边距</span>
        <div class="dis_slider">
          <Slider v-model="value" @on-input="changTopBot" :tip-format="format"></Slider>
        </div>
        <div>{{padding}}px(像素)</div>
      </li>
      <!-- 背景颜色 -->
      <li class="color d_start">
        <span>背景颜色</span>
        <div class="point_color d_around">
          <span @click="changeColor1" class="color_input" ref="color1"></span>
          <span class="color_btn white" @click="resetColor1">重置</span>
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
      <!-- 文字颜色 -->
      <li class="color d_start">
        <span>文字颜色</span>
        <div class="point_color d_around">
          <span @click="changeColor2" class="color_input  black" ref="color2"></span>
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

      <!-- 公告图片 -->
      <li class="distance d_start">
        <span>公告图片</span>
        <div class="txt_p">
          <img :src="data[0].url" alt />
          <p>建议尺寸32*32</p>
        </div>
      </li>
      <!-- 公告内容 -->
      <li class="distance d_start">
        <span>公告内容</span>
        <Input v-model="data[0].title" @on-blur="changeTitle" />
      </li>
    </ul>
  </div>
</template>


<script>
import { Photoshop } from "vue-color";
export default {
  name: "announce",
  components: {
    "photoshop-picker": Photoshop
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      styleObject: {
        backgroundColor: "#fff",
        color: "#000",
        paddingTop: "0",
        paddingBottom: "0"
      },
      value: 0,
      padding: 0,
      showColor1: false,
      showColor2: false,
      format(val) {
        return val + "%";
      },

      colors1: {
        choseColor1: "#fff",
        hex: "#fff",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      },
      colors2: {
        choseColor2: "#000",
        hex: "#000",
        hsl: { h: 150, s: 0, l: 0, a: 1 },
        hsv: { h: 150, s: 0, v: 0, a: 1 },
        rgba: { r: 1, g: 1, b: 1, a: 1 },
        a: 1
      }
    };
  },
  methods: {
    //改变标题内容
    changeTitle() {
      
      this.$emit("changeNotice", this.data);
    },
    // 显示颜色版弹框
    changeColor1() {
      this.showColor1 = true;
    },
    // 显示颜色版弹框
    changeColor2() {
      this.showColor2 = true;
    },
    // 颜色版选背景颜色
    updateValue1(data) {
      this.choseColor1 = data.hex;
    },
    // 颜色版选文字颜色
    updateValue2(data) {
      this.choseColor2 = data.hex;
    },
    // 确定提交选中背景颜色
    sure1() {
      this.$refs.color1.style.backgroundColor = this.choseColor1;
      this.styleObject.backgroundColor = this.choseColor1;
      this.$store.commit("incrementAnnounceStyleObj", this.styleObject);
      this.showColor1 = false;
    },
    // 颜色版选文字颜色
    sure2() {
      this.$refs.color2.style.backgroundColor = this.choseColor2;
      this.styleObject.color = this.choseColor2;
      this.$store.commit("incrementAnnounceStyleObj", this.styleObject);
      this.showColor2 = false;
    },
    //关闭背景颜色
    close1() {
      this.showColor1 = false;
    },
    //关闭文字颜色
    close2() {
      this.showColor2 = false;
    },
    // 重置组件颜色
    resetColor1() {
      this.$refs.color1.style.backgroundColor = "#fff";
      this.styleObject.backgroundColor = "#fff";
      this.$store.commit("incrementAnnounceStyleObj", this.styleObject);
    },
    // 重置组件颜色
    resetColor2() {
      this.$refs.color2.style.backgroundColor = "#000";
      this.styleObject.color = "#000";
      this.$store.commit("incrementAnnounceStyleObj", this.styleObject);
    },
    // 改变上下边距
    changTopBot(data) {
      this.padding = parseInt(data / 2);
      this.styleObject.paddingBottom = this.padding + "px";
      this.styleObject.paddingTop = this.padding + "px";
      this.$store.commit("incrementAnnounceStyleObj", this.styleObject);
    }
  }
};
</script>
<style>
.announce_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}
.announce_box li span {
  padding-right: 10px;
}
.announce_box .distance {
  margin: 20px auto;
}
.announce_box .ivu-input-wrapper {
  flex: 1;
}
.announce_box .ivu-input {
  border: none;
  border-bottom: 1px solid #dcdee2;
}
.announce_box .distance .txt_p {
  color: #838fa1;
  margin-left: 10px;
  font-size: 12px;
}
.announce_box .distance .dis_slider {
  width: 100px;
  margin: 10px 15px;
}
.announce_box .distance .dis_slider .ivu-slider-wrap {
  margin: 0;
}

.announce_box .distance .ivu-slider-bar {
  background: #61bd12;
}
.announce_box .distance .ivu-slider-button {
  border: 2px solid #ddd;
}
.announce_box .color_pick {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
}
.announce_box li .point_color {
  border: 1px solid #efefef;
  width: 130px;
  height: 30px;
  align-items: center;
}
.announce_box li .point_color .color_input {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;

}
.white{
    background: #fff;
}
.black{
      background: #000;
}
.announce_box li .point_color .color_btn {
  display: inline-block;
  width: 50px;
  border-left: 1px solid #efefef;
  padding-left: 8px;
}
.announce_box .color {
  margin: 20px auto;
}
</style>


