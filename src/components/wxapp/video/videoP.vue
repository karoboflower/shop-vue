<template>
  <div class="photo_box">
    <ul>
      <!-- 上下边距 -->
      <li class="distance d_start">
        <span>上下边距</span>
        <div class="dis_slider">
          <Slider v-model="paddingTop" @on-input="changeStyle" :tip-format="format1"></Slider>
        </div>
        <div>{{paddingTop/2}}px(像素)</div>
      </li>
      <!-- 视频高度 -->
      <li class="distance d_start">
        <span>视频高度</span>
        <div class="dis_slider">
          <Slider v-model="height" @on-input="changeStyle" :tip-format="format2"></Slider>
        </div>
        <div>{{height*5}}px(像素)</div>
      </li>
      <!-- 视频封面 -->
      <li class="photo_items">
        <div class="photo_item">
          <div class="img_box d_start">
            <span>视频封面</span>
            <div>
              <img :src="img?img:defaultImgUrl" alt @click="changeImg()" />
            </div>
          </div>
          <div class="img_link d_start">
            <span>链接地址</span>
            <Input
              type="text"
              :value="videoUrl"
              @on-blur="changeLinkUrl($event)"
            />
          </div>
        </div>
      </li>
      <!-- 自动播放 -->
      <li class="d_start">
        <span>自动播放</span>
        <RadioGroup v-model="autoplay" @on-change="changeParam">
          <Radio label="0">
            <span>否</span>
          </Radio>
          <Radio label="1">
            <span>是</span>
          </Radio>
        </RadioGroup>
      </li>
    </ul>
  </div>
</template>


<script>

export default {
  name: "videoP",
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
    paddingTop: {
      get: function () {
        return this.defaultData.style.paddingTop * 2;
      },
      set: function (val) {
        this.defaultData.style.paddingTop = val / 2;
      }
    },
    height: {
      get: function () {
        return this.defaultData.style.height/5 ;
      },
      set: function (val) {
        this.defaultData.style.height = val * 5;
      }
    },
    img: {
      get: function () {
        return this.defaultData.params.img;
      },
      set: function (val) {
        this.defaultData.params.img = val;
      }
    },
    videoUrl: {
      get: function () {
        return this.defaultData.params.videoUrl;
      },
      set: function (val) {
        this.defaultData.params.videoUrl = val;
      }
    },
    autoplay: {
      get: function () {
        return this.defaultData.params.autoplay;
      },
      set: function (val) {
        this.defaultData.params.autoplay = val;
      }
    },


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
    changeLinkUrl (e) {
      this.videoUrl = e.target.value;
      this.changeParam();
    },
    changeStyle(){
         this.$store.commit("incrementCompListItem", {
        type: 'style',
        value: { paddingTop: this.paddingTop * 2, height: this.height * 5 }
      });
    },
    changeParam () {
      this.$store.commit("incrementCompListItem", {
        type: 'params',
        value: {
          videoUrl: this.videoUrl,//视频地址
          img: this.img,//视频封面图片id
          autoplay: this.autoplay//是否自动播放，0否1是
        }
      });
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


