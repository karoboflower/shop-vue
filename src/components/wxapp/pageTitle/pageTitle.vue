<template>
  <div class="title_box">
    <ul>
      <li class="item d_start">
        <span>页面名称</span>
        <div style="flex:1">
          <Input v-model="pageName" placeholder="请填写页面名称" @on-blur="changParams" />
          <p>页面名称仅用于后台查找</p>
        </div>
      </li>
      <li class="item d_start">
        <span>页面标题</span>
        <div style="flex:1">
          <Input v-model="pageTitle" placeholder="请填写页面标题" @on-blur="changParams" />
          <p>小程序端顶部显示的标题</p>
        </div>
      </li>
      <li class="item d_start">
        <span>分享标题</span>
        <div style="flex:1">
          <Input v-model="shareName" placeholder="请填写分享标题" @on-blur="changParams" />
          <p>小程序端转发时显示的标题</p>
        </div>
      </li>

      <li class="title_point">
        <span>标题颜色</span>
        <RadioGroup v-model="titleTextColor" @on-change="changStyle">
          <Radio label="#000">黑色</Radio>
          <Radio label="#fff">白色</Radio>
        </RadioGroup>
      </li>
      <li class="color d_start">
        <span>标题栏背景</span>
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
    </ul>
  </div>
</template>

<script>
import { Photoshop } from "vue-color";
export default {
  name: "pageTitle",
  props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
  components: {
    "photoshop-picker": Photoshop
  },
  data () {
    return {
      showColor: false,
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
      pageName: {
      get: function () {
        return this.defaultData.params.name;
      },
      set: function (val) {
        this.defaultData.params.name = val;
      }
    },
    pageTitle: {
      get: function () {
        return this.defaultData.params.title;
      },
      set: function (val) {
        this.defaultData.params.title = val;
      }
    },
  
    shareName: {
      get: function () {
        return this.defaultData.params.share_title;
      },
      set: function (val) {
        this.defaultData.params.share_title = val;
      }
    },
    titleTextColor: {
      get: function () {
        return this.defaultData.style.titleTextColor;
      },
      set: function (val) {
        this.defaultData.style.titleTextColor = val;
      }
    },
    choseColor: {
      get: function () {
        return this.defaultData.style.titleBackgroundColor;
      },
      set: function (val) {
        this.defaultData.style.titleBackgroundColor = val;
      }
    }
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
    // 确定选中颜色
    sure () {
      this.showColor = false;
      this.changStyle();
    },
    // 重置颜色
    resetColor () {
      this.choseColor = "#fff";
      this.changStyle();
    },
    //关闭颜色板
    close () {
      this.showColor = false;
    },
    changStyle (data) {
      this.$store.commit("incrementPage", {
        type: 'style',
        value: { titleTextColor: this.titleTextColor, titleBackgroundColor: this.choseColor }
      });
    },
    changParams (params) {
      this.$store.commit("incrementPage", {
        type: 'params',
        value: { name: this.pageName, title: this.pageTitle, share_title: this.shareName }
      });
    },
  }
};
</script>
<style>
.title_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}
.title_box .item {
  margin: 5px auto;
}
.title_box .item .ivu-input-wrapper {
  width: 80%;
}
.title_box .item .ivu-input {
  border: none;
  border-bottom: 1px solid #dcdee2;
  height: 100%;
  outline: none;
}

.title_box .item p {
  font-size: 12px;
  color: #838fa1;
  padding: 5px;
}
.title_box li span {
  padding-right: 10px;
}
.title_box .title_point {
  margin: 5px auto;
}
.title_box li .point_color {
  border: 1px solid #efefef;
  width: 130px;
  height: 30px;
  align-items: center;
}
.title_box li .point_color .color_input {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;
  background-color: #fff;
}
.title_box li .point_color .color_btn {
  display: inline-block;
  width: 50px;
  border-left: 1px solid #efefef;
  padding-left: 8px;
}
.title_box .color {
  margin: 20px auto;
}
.title_box .color_pick {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
}
</style>


