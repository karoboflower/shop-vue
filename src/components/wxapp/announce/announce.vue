<template>
  <div class="announce_box">
    <ul>
      <!-- 上下边距 -->
      <li class="distance d_start">
        <span>上下边距</span>
        <div class="dis_slider">
          <Slider v-model="value1" @on-input="changeStyle" :tip-format="format"></Slider>
        </div>
        <div>{{value1/2}}px(像素)</div>
      </li>
      <!-- 背景颜色 -->
      <li class="color d_start">
        <span>背景颜色</span>
        <div class="point_color d_around">
          <span @click="changeColor1" class="color_input" :style="currentStyle1"></span>
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
          <span @click="changeColor2" class="color_input black" :style="currentStyle2"></span>
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
      <li class="d_start">
        <span>文字大小</span>
        <InputNumber type="text" v-model="textSize" @on-blur="changeStyle" />
      </li>
      <!-- 公告图标 -->
      <li class="d_start photo_item">
        <span>公告图标</span>
        <div class="img_box">
          <img :src="img?img:defaultImgUrl" alt @click="changeImg()" />
          <p>建议尺寸32*32</p>
        </div>
      </li>
      <!-- 公告内容 -->
      <li class="distance d_start">
        <span>公告内容</span>
        <Input v-model="title" @on-blur="changeParam" />
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
    defaultData: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      defaultImgUrl: require("../../../assets/images/defaultImg.png"),
      showColor1: false,
      showColor2: false,
      format (val) {
        return val + "%";
      },
      colors1: {
        hex: "#fff",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      },
      colors2: {
        hex: "#000",
        hsl: { h: 150, s: 0, l: 0, a: 1 },
        hsv: { h: 150, s: 0, v: 0, a: 1 },
        rgba: { r: 1, g: 1, b: 1, a: 1 },
        a: 1
      },
      isShowModel: false,
    };
  },
  methods: {
    //上传图片
    changeImg () {
      let _this = this
      _this.isShowModel = true
      window.windowphotoGallery.show({
        isShowModel: _this.isShowModel,
        onConfirm: function (data) {
          _this.img = data[0].fileUrl;
          _this.changeParam()
        }
      })
    },
    // 显示颜色版弹框
    changeColor1 () {
      this.showColor1 = true;
    },
    // 显示颜色版弹框
    changeColor2 () {
      this.showColor2 = true;
    },
    // 颜色版选背景颜色
    updateValue1 (data) {
      this.choseColor1 = data.hex;
    },
    // 颜色版选文字颜色
    updateValue2 (data) {
      this.choseColor2 = data.hex;
    },
    // 确定提交选中背景颜色
    sure1 () {
      this.showColor1 = false;
      this.changeStyle()
    },
    // 颜色版选文字颜色
    sure2 () {
      this.showColor2 = false;
      this.changeStyle()
    },
    //关闭背景颜色
    close1 () {
      this.showColor1 = false;
    },
    //关闭文字颜色
    close2 () {
      this.showColor2 = false;
    },
    // 重置组件颜色
    resetColor1 () {
      this.choseColor1 = "#fff";
      this.changeStyle()
    },
    // 重置组件颜色
    resetColor2 () {
      this.choseColor2 = "#fff";
      this.changeStyle()
    },
    changeStyle () {
      this.$store.commit("incrementCompListItem", {
        type: 'style',
        value: {
          background: this.choseColor1, textColor: this.choseColor2, paddingTop: this.value1 * 2,textSize:this.textSize        }
      });
    },
    changeParam () {
      this.$store.commit("incrementCompListItem", {
        type: 'params',
        value: {
          text: this.title,
          img: this.img
        }
      });
    },
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
        return this.defaultData.style.textColor;
      },
      set: function (val) {
        this.defaultData.style.textColor = val;
      },
    },
    value1: {
      get: function () {
        return this.defaultData.style.paddingTop / 2;
      },
      set: function (val) {
        this.defaultData.style.paddingTop = val * 2;
      },
    },
    textSize: {
      get: function () {
        return Number(this.defaultData.style.textSize);
      },
      set: function (val) {
        this.defaultData.style.textSize = val;
      },
    },
    title: {
      get: function () {
        return this.defaultData.params.text;
      },
      set: function (val) {
        this.defaultData.params.text = val;
      }
    },
    img: {
      get: function () {
        return this.defaultData.params.img;
      },
      set: function (val) {
        this.defaultData.params.img = val;
      }
    }

  },


};
</script>
<style >
.announce_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}
.announce_box li span {
  padding-right: 10px;
}
.announce_box .distance,
.announce_box .photo_item {
  margin: 20px auto;
}
.announce_box .ivu-input-wrapper {
  flex: 1;
}
.announce_box .ivu-input {
  border: none;
  border-bottom: 1px solid #dcdee2;
}
.announce_box .photo_item img {
  height: 50px;
  width: 60px;
}
.photo_box .photo_item .img_box {
  margin-bottom: 20px;
}
.announce_box .photo_item .img_box {
  margin-bottom: 20px;
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
.white {
  background: #fff;
}
.black {
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


