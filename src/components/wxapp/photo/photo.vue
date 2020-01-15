<template>
  <div class="photo_box">
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

      <li class="photo_items">
        <div class="photo_item" v-for="(item,index) of data" :key="index">
          <div class="img_box d_start">
            <span>图片</span>
            <div>
              <img :src="item.url" alt @click="changeImg(index)" />
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
  name: "photo",
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
      changeImgIndex: -1, //记录更换图片下标
      photoShow: false,
      styleObj: {
        backgroundColor: "#fff",
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
  watch: {
    data(oldVal, newVal) {
      console.log("newVal", newVal);
      console.log("oldVal", oldVal);
    }
  },
  methods: {
    //图片库"确定"触发
    sureGallery(val) {
      this.data[this.changeImgIndex].url = val;
      this.photoShow = false;
    },
    //图片库"取消"触发
    closeGallery() {
      this.photoShow = false;
    },
    //上传图片
    changeImg(index) {
        debugger
      this.changeImgIndex = index;
      this.photoShow = true;
    },
    //减少图片
    downImg(i) {
      if (this.data.length == 1) {
        this.$Message.info("至少保留一个");
      } else {
        this.data.splice(i, 1);
      }
      this.$emit("changePhoto", this.data);
    },
    //添加图片
    addImg() {
      var data = {
        url: "https://demo.yiovo.com/assets/store/img/diy/banner/01.png",
        link: ""
      };
      this.data.push(data);
      this.$emit("changePhoto", this.data);
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
      this.$store.commit("incrementPhotoStyleObj", this.styleObj);
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
      this.$store.commit("incrementPhotoStyleObj", this.styleObj);
    },
    // 改变上下边距
    changTopBot(data) {
      this.padding1 = parseInt(data / 2);
      this.styleObj.paddingBottom = this.padding1 + "px";
      this.styleObj.paddingTop = this.padding1 + "px";
      this.$store.commit("incrementPhotoStyleObj", this.styleObj);
    },
    changLeftRight(data) {
      this.padding2 = parseInt(data / 2);
      this.styleObj.paddingLeft = this.padding2 + "px";
      this.styleObj.paddingRight = this.padding2 + "px";
      this.$store.commit("incrementPhotoStyleObj", this.styleObj);
    }
  }
};
</script>
<style>
.photo_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}

.photo_box li span {
  padding-right: 10px;
}
.photo_box .distance {
  margin: 20px auto;
}
.photo_box .distance .dis_slider {
  width: 100px;
  margin: 10px 15px;
}
.photo_box .distance .dis_slider .ivu-slider-wrap {
  margin: 0;
}
.photo_box .distance .ivu-slider {
}
.photo_box .distance .ivu-slider-bar {
  background: #61bd12;
}
.photo_box .distance .ivu-slider-button {
  border: 2px solid #ddd;
}
.photo_box .color_pick {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
}
.photo_box li .point_color {
  border: 1px solid #efefef;
  width: 130px;
  height: 30px;
  align-items: center;
}
.photo_box li .point_color .color_input {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;
  background: #fff;
}
.photo_box li .point_color .color_btn {
  display: inline-block;
  width: 50px;
  border-left: 1px solid #efefef;
  padding-left: 8px;
}
.photo_box .color {
  margin: 20px auto;
}

.photo_box .photo_items {
}
.photo_box .photo_item {
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
.photo_box .photo_item img {
  height: 50px;
  width: 60px;
}
.photo_box .photo_item .img_box {
  margin-bottom: 20px;
}
.photo_box .photo_item p {
  color: #838fa1;
  font-size: 12px;
}
.photo_box .photo_item span {
  padding-top: 10px;
  width: 70px;
  margin-right: 10px;
  text-align: right;
}
.photo_box .photo_item .ivu-input-wrapper {
  width: auto;
}
.photo_box .photo_item .ivu-input {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
  background-color: transparent;
}
</style>


