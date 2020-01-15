<template>
  <div class="window_box">
    <ul>
      <!-- 上下边距 -->
      <li class="distance d_start">
        <span>上下边距</span>
        <div class="dis_slider">
          <Slider v-model="value1" @on-input="changTopBot" :tip-format="format1"></Slider>
        </div>
        <div>{{padding1}}px(像素)</div>
      </li>
      <!-- 左右边距 -->
      <li class="distance d_start">
        <span>左右边距</span>
        <div class="dis_slider">
          <Slider v-model="value2" @on-input="changLeftRight" :tip-format="format2"></Slider>
        </div>
        <div>{{padding2}}px(像素)</div>
      </li>
      <!-- 背景颜色 -->
      <li class="color d_start">
        <span>指示点颜色</span>
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
      <!-- 布局方式 -->
      <li class="flex_type d_start">
        <span>指示点颜色</span>
        <RadioGroup v-model="radioGroup" @on-change="changeFlex">
          <Radio label="堆积两列"></Radio>
          <Radio label="堆积三列"></Radio>
          <Radio label="堆积四列"></Radio>
          <Radio label="橱窗样式"></Radio>
        </RadioGroup>
      </li>
      <!-- 图片 -->
      <li class="window_items">
        <div class="window_item" v-for="(item,index) of windowData" :key="index">
          <div class="img_box d_start">
            <span>图片</span>
            <div>
              <img :src="item.url" alt @click="changeImg(index)"/>
              <p>建议尺寸750X360</p>
            </div>
          </div>
          <div class="img_link d_start">
            <span>链接地址</span>
            <Input type="text" :value="item.url" />
          </div>
          <i class="iconfont icon-web-icon- wrong" @click="downImg(index)"></i>
        </div>
      </li>
      <Button style="width: 100%;" @click="addImg">添加一个</Button>
    </ul>
    <photo-gallery v-if="photoShow" @sure="sureGallery" @close="closeGallery"></photo-gallery>
  </div>
</template>


<script>
import { Photoshop } from "vue-color";
export default {
  name: "window",
  components: {
    "photoshop-picker": Photoshop
  },
  props:{
    windowData:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      photoShow:false ,  //显示/隐藏图片库
      changeImgIndex: -1, //记录更换图片下标
      radioGroup: "堆积两列",
    
      styleObj: {
        backgroundColor: "#fff",
        width: "50%",
        paddingTop: "0",
        paddingBottom: "0",
        paddingLeft: "0",
        paddingRight: "0"
      },
      value1: 0,
      value2: 0,
      padding1: 0,
      padding2: 0,
      showColor: false,
      format1(val) {
        return val + "%";
      },
      format2(val) {
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
    //图片库"确定"触发
    sureGallery(val) {
      this.windowData[this.changeImgIndex].url = val;
      this.photoShow = false;
    },
    //图片库"取消"触发
    closeGallery() {
      this.photoShow = false;
    },
    //上传图片
    changeImg(index) {
      this.changeImgIndex = index;
      this.photoShow = true;
    },
    // 改变布局
    changeFlex(data) {
      if (data == "堆积两列") {
        this.styleObj.width = "50%";
        this.styleObj.statue = false;
        this.$store.commit("incrementWindowStyleObj", this.styleObj);
      } else if (data == "堆积三列") {
        this.styleObj.width = "33%";
        this.styleObj.statue = false;
        this.$store.commit("incrementWindowStyleObj", this.styleObj);
      } else if (data == "堆积四列") {
        this.styleObj.width = "25%";
        this.styleObj.statue = false;
        this.$store.commit("incrementWindowStyleObj", this.styleObj);
      } else if (data == "橱窗样式") {
        this.styleObj.width = "100%";
        this.styleObj.statue = true;
        this.$store.commit("incrementWindowStyleObj", this.styleObj);
      }
    },
    //减少图片
    downImg(i) {
      if (this.windowData.length == 1) {
        this.$Message.info("至少保留一个");
      } else {
        this.windowData.splice(i, 1);
      }
      this.$emit("changeWindow", this.windowData);
    },
    //添加图片
    addImg() {
      var data = {
        url: "https://demo.yiovo.com/assets/store/img/diy/banner/01.png",
        link: ""
      };
      this.windowData.push(data);
      this.$emit("changeWindow", this.windowData);
    },
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
      this.styleObj.backgroundColor = this.choseColor;
      this.$store.commit("incrementWindowStyleObj", this.styleObj);
      this.showColor = false;
    },
    //关闭颜色版
    close() {
      this.showColor = false;
    },
    // 重置组件颜色
    resetColor() {
      this.$refs.color.style.backgroundColor = "#fff";
      this.styleObj.backgroundColor = "#ffff";
      this.$store.commit("incrementWindowStyleObj", this.styleObj);
    },
    // 改变上下边距
    changTopBot(data) {
      this.padding1 = parseInt(data / 2);
      this.styleObj.paddingBottom = this.padding1 + "px";
      this.styleObj.paddingTop = this.padding1 + "px";
      this.$store.commit("incrementWindowStyleObj", this.styleObj);
    },
    changLeftRight(data) {
      this.padding2 = parseInt(data / 2);
      this.styleObj.paddingLeft = this.padding2 + "px";
      this.styleObj.paddingRight = this.padding2 + "px";
      this.$store.commit("incrementWindowStyleObj", this.styleObj);
    }
  }
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


