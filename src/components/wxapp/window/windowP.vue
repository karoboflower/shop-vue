<template>
  <div class="window_box">
    <ul>
      <!-- 上下边距 -->
      <li class="distance d_start">
        <span>上下边距</span>
        <div class="dis_slider">
          <Slider v-model="paddingTop" @on-input="changeStyle" :tip-format="format1"></Slider>
        </div>
        <div>{{paddingTop/2 }}px(像素)</div>
      </li>
      <!-- 左右边距 -->
      <li class="distance d_start">
        <span>左右边距</span>
        <div class="dis_slider">
          <Slider v-model="paddingLeft" @on-input="changeStyle" :tip-format="format2"></Slider>
        </div>
        <div>{{paddingLeft/2}}px(像素)</div>
      </li>
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
      <!-- 布局方式 -->
      <li class="flex_type d_start">
        <span>布局方式</span>
        <RadioGroup v-model="layout" @on-change="changeStyle">
          <Radio label="2">
            <span>堆积两列</span>
          </Radio>
          <Radio label="3">
            <span>堆积三列</span>
          </Radio>
          <Radio label="4">
            <span>堆积四列</span>
          </Radio>
          <Radio label="1">
            <span>橱窗样式</span>
          </Radio>
        </RadioGroup>
      </li>
      <!-- 图片 -->
      <li class="window_items">
        <div class="window_item" v-for="(item,index) of imgList" :key="index">
          <div class="img_box d_start">
            <span>图片</span>
            <div>
              <img
                :src="item.img?item.img:defaultImgUrl"
                alt
                @click="changeImg(index)"
              />
              <p>建议尺寸750X360</p>
            </div>
          </div>
          <div class="img_link d_start">
            <span>链接地址</span>
            <Input type="text" :value="item.linkUrl" @on-blur="changeLinkUrl($event,index)" />
          </div>
          <i class="iconfont icon-web-icon- wrong" @click="downImg(index)"></i>
        </div>
      </li>
      <Button style="width: 100%;" @click="addImg">添加一个</Button>
    </ul>
  </div>
</template>


<script>
import { Photoshop } from "vue-color";
export default {
  name: "windowP",
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
      isShowModel: false,//显示/隐藏图片库
      photoShow: false,
      showColor: false,
      format1 (val) {
        return val + "%";
      },
      format2 (val) {
        return val + "%";
      },
      colors: {
        hex: "#fff",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      },
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
    paddingTop: {
      get: function () {
        return this.defaultData.style.paddingTop * 2;
      },
      set: function (val) {
        this.defaultData.style.paddingTop = val / 2;
      }
    },
    paddingLeft: {
      get: function () {
        return this.defaultData.style.paddingLeft * 2;
      },
      set: function (val) {
        this.defaultData.style.paddingLeft = val / 2;
      }
    },
    imgList: {
      get: function () {
        return this.defaultData.data;
      },
      set: function (val) {
        this.defaultData.data = val;
      },
    },
     layout: {
      get: function () {
        return this.defaultData.style.layout;
      },
      set: function (val) {
        this.defaultData.style.layout = val;
      },
    },
  },
  methods: {
    //上传图片
    changeImg (index) {
      let _this = this
      _this.isShowModel = true
      window.windowphotoGallery.show({
        isShowModel: _this.isShowModel,
        onConfirm: function (data) {
          _this.imgList[index].img = data[0].fileUrl;
          _this.changeData();
        }
      })
    },
    //减少图片
    downImg (i) {
      if (this.imgList.length == 1) {
        this.$Message.info("至少保留一个");
      } else {
        this.imgList.splice(i, 1);
      }
      this.changeData();
    },
    //添加图片
    addImg () {
      var data = {
        linkUrl: "",
        img: ""
      };
      this.imgList.push(data);
      this.changeData();
    },
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
      this.changeStyle();
    },
    //关闭颜色版
    close () {
      this.showColor = false;
    },
    // 重置组件颜色
    resetColor () {
      this.choseColor = "#fff";
      this.changeStyle();
    },

    changeLinkUrl (e, index) {
      let _value = e.target.value;
      this.imgList[index].linkUrl = _value;
      this.changeData();
    },
    changeStyle (data) {
      this.$store.commit("incrementCompListItem", {
        type: 'style',
        value: {
          background: this.choseColor, paddingLeft: this.paddingLeft/2, paddingTop: this.paddingTop/2, layout: this.layout        }
      });
    },
    changeData () {
      this.$store.commit("incrementCompListItem", {
        type: 'data',
        value: this.imgList
      });
    },
  },
};
</script>
<style>
.window_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}
.window_box li span {
  padding-right: 10px;
}
.window_box .distance {
  margin: 20px auto;
}
.window_box .distance .dis_slider {
  width: 100px;
  margin: 10px 15px;
}
.window_box .distance .dis_slider .ivu-slider-wrap {
  margin: 0;
}
.window_box .distance .ivu-slider {
}
.window_box .distance .ivu-slider-bar {
  background: #61bd12;
}
.window_box .distance .ivu-slider-button {
  border: 2px solid #ddd;
}
.window_box .color_pick {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
}
.window_box li .point_color {
  border: 1px solid #efefef;
  width: 130px;
  height: 30px;
  align-items: center;
}
.window_box li .point_color .color_input {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;
  background: #fff;
}
.window_box li .point_color .color_btn {
  display: inline-block;
  width: 50px;
  border-left: 1px solid #efefef;
  padding-left: 8px;
}
.window_box .color {
  margin: 20px auto;
}

.window_box .window_items {
}
.window_box .window_item {
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
.window_box .window_item img {
  height: 50px;
  width: 60px;
}
.window_box .window_item .img_box {
  margin-bottom: 20px;
}
.window_box .window_item p {
  color: #838fa1;
  font-size: 12px;
}
.window_box .window_item span {
  padding-top: 10px;
  width: 70px;
  margin-right: 10px;
  text-align: right;
}
.window_box .window_item .ivu-input-wrapper {
  width: auto;
}
.window_box .window_item .ivu-input {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
  background-color: transparent;
}
.window_box .ivu-radio-group {
  width: 190px;
}
.window_box .ivu-radio-wrapper {
  font-size: 14px;
}
</style>


