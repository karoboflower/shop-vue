<template>
  <div class="navigation_box">
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
      <!-- 每行行数 -->
      <li class="color d_start">
        <span>每行数量</span>
        <RadioGroup v-model="lineNum" @on-change="chagneFlex">
          <Radio label="0">3个</Radio>
          <Radio label="1">4个</Radio>
          <Radio label="2">5个</Radio>
        </RadioGroup>
      </li>

      <li class="navigation_items">
        <div class="navigation_item" v-for="(item,index) of data" :key="index">
          <div class="img_box d_start">
            <span>图片</span>
            <div>
              <img :src="item.url" alt />
              <p>建议尺寸750X360</p>
            </div>
          </div>
          <div class="img_link d_start">
            <span>文字内容</span>
            <Input type="text" :value="item.name" />
          </div>
          <div class="img_link d_start">
            <span>文字颜色</span>
            <Input type="text" :value="item.title" />
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
  </div>
</template>


<script>
import { Photoshop } from "vue-color";
export default {
  name: "navigation",
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
      imgList: [
        {
          url: "https://demo.yiovo.com/assets/store/img/diy/banner/01.png",
          link: ""
        },
        {
          url: "https://demo.yiovo.com/assets/store/img/diy/banner/01.png",
          link: ""
        }
      ],
      styleObject: {
        backgroundColor: "#fff",
        width: "25%",
        color1: "#000",
        color2: "#000",
        color3: "#000",
        color4: "#000"
      },
      lineNum: "1",
      showColor: false,
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
  created() {
    this.data.forEach((item, index) => {
      var i = index + 1;
      item.name = item.title + i;
    });
  },
  watch: {
    data(newVal) {
      newVal.forEach((item, index) => {
        var i = index + 1;
        item.name = item.title + i;
      });
      this.data=newVal
    }
  },
  methods: {
    // 改变每行显示个数
    chagneFlex(data) {
      if (data == 0) {
        this.styleObject.width = "33.3%";
        this.$store.commit("incrementNavigationStyleObj", this.styleObject);
      } else if (data == 1) {
        this.styleObject.width = "25%";
        this.$store.commit("incrementNavigationStyleObj", this.styleObject);
      }
      if (data == 2) {
        this.styleObject.width = "20%";
        this.$store.commit("incrementNavigationStyleObj", this.styleObject);
      }
    },
    //减少图片
    downImg(i) {
      if (this.data.length == 1) {
        this.$Message.info("至少保留一个");
      } else {
        this.data.splice(i, 1);
      }
    },
    //添加图片
    addImg() {
      var val = {
        url: require("../../../assets/images/defaultImg.png"),
        title: "按钮文字",
        link: ""
      };
      this.data.push(val);
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
      this.styleObject.backgroundColor = this.choseColor;
      this.$store.commit("incrementNavigationStyleObj", this.styleObject);
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
      this.$store.commit("incrementNavigationStyleObj", this.styleObject);
    }
  }
};
</script>
<style>
.navigation_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}
.navigation_box li span {
  padding-right: 10px;
}
.navigation_box .distance {
  margin: 20px auto;
}
.navigation_box .distance .dis_slider {
  width: 100px;
  margin: 10px 15px;
}
.navigation_box .distance .dis_slider .ivu-slider-wrap {
  margin: 0;
}

.navigation_box .distance .ivu-slider-bar {
  background: #61bd12;
}
.navigation_box .distance .ivu-slider-button {
  border: 2px solid #ddd;
}
.navigation_box .color_pick {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
}
.navigation_box li .point_color {
  border: 1px solid #efefef;
  width: 130px;
  height: 30px;
  align-items: center;
}
.navigation_box li .point_color .color_input {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;
  background: #fff;
}
.navigation_box li .point_color .color_btn {
  display: inline-block;
  width: 50px;
  border-left: 1px solid #efefef;
  padding-left: 8px;
}
.navigation_box .color {
  margin: 20px auto;
}

.navigation_box .navigation_item {
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
.navigation_box .navigation_item img {
  height: 50px;
  width: 60px;
}
.navigation_box .navigation_item .img_box {
  margin-bottom: 20px;
}
.navigation_box .navigation_item .img_link {
  margin-bottom: 15px;
}
.navigation_box .navigation_item p {
  color: #838fa1;
  font-size: 12px;
}
.navigation_box .navigation_item span {
  padding-top: 10px;
  width: 70px;
  margin-right: 10px;
  text-align: right;
}
.navigation_box .navigation_item .ivu-input-wrapper {
  width: auto;
}
.navigation_box .navigation_item .ivu-input {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
  background-color: transparent;
}
</style>


