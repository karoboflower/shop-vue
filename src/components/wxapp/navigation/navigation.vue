<template>
  <div class="navigation_box">
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
      <!-- 每行行数 -->
      <li class="color d_start">
        <span>每行数量</span>
        <RadioGroup v-model="rowsNum" @on-change="changeStyle">
          <Radio label="3">3个</Radio>
          <Radio label="4">4个</Radio>
          <Radio label="5">5个</Radio>
        </RadioGroup>
      </li>

      <li class="navigation_items">
        <div class="navigation_item" v-for="(item,index) of imgList" :key="index">
          <div class="img_box d_start">
            <span>图片</span>
            <div>
              <img :src="item.img?item.img:defaultImgUrl"  @click="changeImg(index)" alt />
              <p>建议尺寸750X360</p>
            </div>
          </div>
          <div class="img_link d_start">
            <span>文字内容</span>
            <Input type="text" v-model="item.text"  @on-blur="changeData" />
          </div>
          <div class="img_link d_start">
            <span>文字颜色</span>
            <div class="point_color d_around" >
              <span
                @click="changeColor(item,index)"
                class="color_input"
                :style="{'backgroundColor':item.color}"
              ></span>
              <span class="color_btn" @click="resetColor(item)">重置</span>
            </div>
          </div>
          <div class="img_link d_start">
            <span>链接地址</span>
            <Input type="text" v-model="item.linkUrl" @on-blur="changeData" />
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
    defaultData: {
      type: Object,
      default: {}
    }
  },
 
  data () {
    return {
      defaultImgUrl: require("../../../assets/images/defaultImg.png"),
      showColor: false,
      showColorItem: false,
      choseColorItem: "#fff",
      colors: {
        hex: "#fff",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      },
      currentIndex: -1,
      isShowModel:false
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
    imgList: {
      get: function () {
        return this.defaultData.data;
      },
      set: function (val) {
        this.defaultData.data = val;
      }
    },
    rowsNum: {
      get: function () {
        return this.defaultData.style.rowsNum;
      },
      set: function (val) {
        this.defaultData.style.rowsNum = val ;
      }
    },
  },
  methods: {
    // changeData (e,index,type) {
       
    //   let _data=e.target.value;
    //   this.imgList[index][type]=_data;
    //   this.$store.commit("incrementCompListItem", {
    //     type: 'data',
    //     value:  JSON.parse(JSON.stringify(this.imgList))
    //   });
    // },
    //减少图片
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
      var val = {
        "img": '',					//图片id
        "linkUrl": "",				//跳转链接，用户输入
        "text": "按钮文字",			//文字描述
        "color": "#666666"			//文字颜色
      };
      this.imgList.push(val);
      this.changeData();
    },
    // 显示颜色版弹框
    changeColor (item, index) {
      if (index) {
        this.showColorItem = true
        this.currentIndex = index;
      }
      this.showColor = true;
    },
    // 颜色版选中颜色
    updateValue (data) {
      if (this.showColorItem) {
        this.choseColorItem = data.hex;
      } else {
        this.choseColor = data.hex;
      }
    },
    // 确定提交选中颜色
    sure () {
      this.showColor = false;
      if (this.showColorItem) {
        this.changeData();
      } else {
       this.changeStyle();
      }


    },
    //关闭颜色版
    close () {
      this.showColor = false;
    },
    // 重置组件颜色
    resetColor (item) {
      if (item) {
        item.color = "#666";
        this.$store.commit("incrementCompListItem", {
          type: 'data',
          value: this.imgList
        });
      } else {
        this.choseColor = "#666";
        this.$store.commit("incrementCompListItem", {
          type: 'style',
          value: { background: this.choseColor, rowsNum: this.rowsNum }
        });
      }


    },
    changeStyle(){
 this.$store.commit("incrementCompListItem", {
        type: 'style',
        value: { background: this.choseColor, rowsNum: this.rowsNum }
      });
    },
    changeData(){
   this.$store.commit("incrementCompListItem", {
        type: 'data',
        value: this.imgList
      });
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


