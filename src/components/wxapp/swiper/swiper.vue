<template>
  <div class="swiper_box">
    <ul>
      <li class="swiper_point">
        <span>指示点形状</span>
        <RadioGroup v-model="point" @on-change="changeShape">
          <Radio label="round">圆形</Radio>
          <Radio label="square">正方形</Radio>
          <Radio label="rectangle">长方形</Radio>
        </RadioGroup>
      </li>
      <li class="color d_start">
        <span>指示点颜色</span>
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

      <li class="swiper_time d_start">
        <span>切换时间&nbsp;&nbsp;</span>
        <Input type="number" :value="interval" @on-blur="changeInter($event)" style="width:200px;" />
     
      </li>
      <li class="swiper_items">
        <div class="swiper_item" v-for="(imgItem,index) of imgList" :key="index">
          <div class="img_box d_start">
            <span>图片</span>
            <div>
              <img :src="imgItem.img?imgItem.img:defaultImgUrl" alt @click="changeImg(index)" />
              <p>建议尺寸750X360</p>
            </div>
          </div>
          <div class="img_link d_start">
            <span>链接地址</span>
            <Input type="text" :value="imgItem.linkUrl"  @on-blur="changeLinkUrl($event,index)"/>
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
  name: "swiper",
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
      photoShow: false,
      showColor: false,
      colors: {
        hex: "#fff",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      },
      isShowModel: false,
    };
  },
  computed: {
    choseColor: {
      get: function () {
        return this.defaultData.style.btnColor;
      },
      set: function (val) {
        this.defaultData.style.btnColor = val;
      }
    },
    currentStyle: function () {
      return {
        backgroundColor: this.choseColor
      }
    },
    imgList:{
         get: function () {
        return this.defaultData.data;
      },
      set: function (val) {
        this.defaultData.data = val;
      },
    },
    interval:{
     get: function () {
        return Number(this.defaultData.params.interval);
      },
      set: function (val) {
       this.defaultData.params.interval = val;
      },
    },
    point:{
        get: function () {
        return this.defaultData.style.btnShape;
      },
      set: function (val) {
       this.defaultData.style.btnShape = val;
      },
    }
  },
  methods: {
    //改变切换时间
    changeInter (e) {
       this.$store.commit("incrementCompListItem", {
          type:'params',
          value:{
               interval: e.target.value
          }
         });
    },
    //上传图片
    changeImg (index) {
      let _this = this
      _this.isShowModel = true
      window.windowphotoGallery.show({
        isShowModel: _this.isShowModel,
        onConfirm: function (data) {
          _this.imgList[index].img=data[0].fileUrl;
          _this.$store.commit("incrementCompListItem", {
          type:'data',
          value:_this.imgList
         });
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
      this.$store.commit("incrementCompListItem", {
          type:'data',
          value:this.imgList
         });
    },
    //添加图片
    addImg () {
      var data = {
        linkUrl: "", 
        img: ""
      };
      this.imgList.push(data);
        this.$store.commit("incrementCompListItem", {
          type:'data',
          value:this.imgList
         });
    },
    //显示圆点形状
    changeShape (data) {
      this.$store.commit("incrementCompListItem", {
          type:'style',
          value:{
          btnColor: this.choseColor,btnShape: data
          }
         });
      this.point = data;
    },
    changeLinkUrl(e,index){
        let _value=e.target.value;
        this.imgList[index].linkUrl=_value;
         this.$store.commit("incrementCompListItem", {
          type:'data',
          value:this.imgList
         });
    },
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
      this.$store.commit("incrementCompListItem", {  type:'style',
          value:{
          btnColor: this.choseColor,btnShape:this.point
          }});
    },
    // 重置颜色
    resetColor () {
      this.choseColor = "#fff";
      this.$store.commit("incrementCompListItem", { type:'style',
          value:{
          btnColor: this.choseColor,btnShape: this.point
          } });
    },
    //关闭颜色板
    close () {
      this.showColor = false;
    }
  }
};
</script>
<style>
.swiper_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}
.swiper_box li span {
  padding-right: 10px;
}
.swiper_box li .point_color {
  border: 1px solid #efefef;
  width: 130px;
  height: 30px;
  align-items: center;
}
.swiper_box li .point_color .color_input {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;
  background-color: #fff;
}
.swiper_box li .point_color .color_btn {
  display: inline-block;
  width: 50px;
  border-left: 1px solid #efefef;
  padding-left: 8px;
}
.swiper_box .color {
  margin: 20px auto;
}
.swiper_box .color_pick {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
}
.swiper_box .swiper_time {
  margin-bottom: 20px;
}


.swiper_box .swiper_time p {
  color: #838fa1;
  font-size: 12px;
  margin-left: 80px;
  line-height: 2em;
}

.swiper_box .swiper_item {
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
.swiper_box .swiper_item img {
  height: 50px;
  width: 60px;
}
.swiper_box .swiper_item .img_box {
  margin-bottom: 20px;
}
.swiper_box .swiper_item p {
  color: #838fa1;
  font-size: 12px;
}
.swiper_box .swiper_item span {
  padding-top: 10px;
  width: 70px;
  margin-right: 10px;
  text-align: right;
}
.swiper_box .swiper_item .ivu-input-wrapper {
  width: auto;
}
.swiper_box .swiper_item .ivu-input {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
  background-color: transparent;
}
</style>


