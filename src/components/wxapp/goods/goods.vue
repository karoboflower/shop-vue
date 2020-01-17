<template>
  <div class="goods_box">
    <ul>
      <li class="goods_items">
        <span>商品来源</span>
        <RadioGroup v-model="origin" @on-change="changeData">
          <Radio label="auto">自动获取</Radio>
          <Radio label="choice">手动选择</Radio>
        </RadioGroup>
      </li>
      <!-- 自动获取 -->
      <div v-if="origin==='auto'">
        <li class="goods_items">
          <span>商品分类</span>
          <Select v-model="goodsType" style="width:200px" @on-change="changeParams">
            <Option v-for="item in typeList" :value="item.id" :key="item.id">{{ item.name }}</Option>
          </Select>
        </li>
        <li class="goods_items">
          <span>商品排序</span>
          <RadioGroup v-model="sort" @on-change="changeParams">
            <Radio label="all">综合</Radio>
            <Radio label="sale">销量</Radio>
            <Radio label="price">价格</Radio>
          </RadioGroup>
        </li>
        <li class="goods_items">
          <span>显示数量</span>
          <InputNumber :min="1" :value="number" @on-blur="changeParams" />
        </li>
      </div>
      <!-- 手动选择 -->
      <div v-else class="img_box">
        <div class="img_item" v-for="(item,index) in choiceList" :key="index">
          <img :src="item.img" alt />
          <i class="iconfont icon-web-icon- wrong"></i>
        </div>
        <Button style="width:100%" type="primary" @click="selectGoods">选择商品</Button>
      </div>

      <div style="border-top: 1px dashed #ccc;margin:20px auto;"></div>
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

      <li class="goods_items">
        <span>显示类型</span>
        <RadioGroup v-model="type" @on-change="changeStyle">
          <Radio label="list">列表平铺</Radio>
          <Radio label="slide">横向滑动</Radio>
        </RadioGroup>
      </li>
      <li class="goods_items">
        <span>分列数量</span>
        <RadioGroup v-model="column" @on-change="changeStyle">
          <Radio label="1">单列</Radio>
          <Radio label="2">两列</Radio>
          <Radio label="3">三列</Radio>
        </RadioGroup>
      </li>
      <li class="goods_items">
        <span>显示内容</span>
        <CheckboxGroup v-model="checkAllGroup" @on-change="changeStyle">
          <Checkbox label="1">商品名称</Checkbox>
          <Checkbox label="2">商品价格</Checkbox>
          <Checkbox label="3">划线价格</Checkbox>
        </CheckboxGroup>
      </li>
    </ul>

    <goods-list :goodsListShow="goodsListShow" @ok="ok"></goods-list>
  </div>
</template>
<script>
import { Photoshop } from "vue-color";
import freightService from "../../../service/goods/goodsService";
import goodsList from './goodsList.vue'
export default {
  name: "goods",
  components: {
    "photoshop-picker": Photoshop,
    "goodsList": goodsList
  },
  props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      number: 6,
      showColor: false,
      goodsListShow: false,
      width: '840',//弹出框的宽度
      colors: {
        hex: "#F5F5F5",
        hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
        hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
        rgba: { r: 25, g: 77, b: 51, a: 1 },
        a: 1
      },
      origin: "auto",
      sort: "all",
      type: "list",
      column: "1",
      typeList: [],//分类列表
      model: "0",
      goodsType: "0",
      checkAllGroup: [],
      choiceList: [],
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
  },
  methods: {
    selectGoods () {
      this.goodsListShow = true;
    },
    cancel () {
      this.goodsListShow = false;
    },
    ok (status, list) {
      this.goodsListShow = status;
      for (let i = 0; i < list.length; i++) {
        this.choiceList.push({
          img: list[i].goodsUploadFiles[0].fileUrl,
          name: list[i].goodsName,
          price: list[i].goodsPrice,
          linePrice: list[i].linePrice
        })
      }
      this.$store.commit("incrementCompListItem", {        type: 'data',
        value: this.choiceList
      });


    },
    //商品
    changeParams () {
      let _value = { source: this.origin };
      if (this.origin === "auto") {
        _value.auto = {
          category: this.goodsType,
          goodsSort: this.sort,
          showNum: this.number
        }
      }
      this.$store.commit("incrementCompListItem", {        type: 'params',
        value: _value
      });
    },
    changeStyle () {
      this.$store.commit("incrementCompListItem", {        type: 'style',
        value: {
          background: this.choseColor,
          display: this.type,
          column: this.column,
          show: {
            goodsName: this.getStatus('1'),	//是否显示商品名称
            goodsPrice: this.getStatus('2'),	//是否显示商品价格
            linePrice: this.getStatus('3')		//是否显示划线价格
          }
        }
      });
    },
    changeData () {
      if (this.origin === "choice") {
        this.$store.commit("incrementCompListItem", {          type: 'data',
          value: this.choiceList
        });
      }
      this.$store.commit("incrementCompListItem", {        type: 'params',
        value: { source: this.origin }
      });

    },
    getStatus (data) {
      let status = this.checkAllGroup;
      if ((status[0] && status[0] === data) || (status[1] && status[1] === data) || (status[2] && status[2] === data)) {
        return true
      } else {
        return false
      }
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
      this.$store.commit("incrementCompListItem", {        type: 'style',
        value: {
          background: this.choseColor,
          display: this.type,
          column: this.column,
          show: {
            goodsName: this.getStatus('0'),	//是否显示商品名称
            goodsPrice: this.getStatus('1'),	//是否显示商品价格
            linePrice: this.getStatus('2')		//是否显示划线价格
          }
        }
      });
    },
    // 重置颜色
    resetColor () {
      this.choseColor = "#fff";
      this.$store.commit("incrementCompListItem", {        type: 'style',
        value: {
          background: this.choseColor,
          display: this.type,
          column: this.column,
          show: {
            goodsName: this.getStatus('0'),	//是否显示商品名称
            goodsPrice: this.getStatus('1'),	//是否显示商品价格
            linePrice: this.getStatus('2')		//是否显示划线价格
          }
        }
      });
    },
    //关闭颜色板
    close () {
      this.showColor = false;
    },
    renderAgain (result) {
      let rowDatas = [];
      for (var i = 0; i < result.length; i++) {
        rowDatas.push({
          id: result[i].id,
          name: result[i].name,
          imageId: result[i].imageId,
          parentId: result[i].parentId,
          sort: result[i].sort,
          createTime: result[i].createTime,
          type: 1
        });
        if (result[i].children && result[i].children.length) {
          var childrens = result[i].children;
          for (var j = 0; j < childrens.length; j++) {
            rowDatas.push({
              id: childrens[j].id,
              name: '---' + childrens[j].name,
              imageId: childrens[j].imageId,
              parentId: childrens[j].parentId,
              sort: childrens[j].sort,
              createTime: childrens[j].createTime,
              type: 2
            });
          }
        }
      }
      return rowDatas;
    },
  },
  created () {
    let _this = this;
    freightService.getTypes().then(res => {
      if (res.code === 0) {
        let result = res.data;
        _this.typeList = _this.renderAgain(res.data);
      }
    });
    this.choiceList = this.defaultData.data;
    this.sort = this.defaultData.style.display;
    if (this.defaultData.params.auto) {
      this.sort = this.defaultData.params.auto.goodsSort;
      this.goodsType = this.defaultData.params.auto.category;
      this.number = this.defaultData.params.auto.showNum
    }
    let _style = this.defaultData.style;
    this.column = _style.column;
    this.type = _style.display;
    this.choseColor = _style.background;
    if (_style.show.goodsName) {
      this.checkAllGroup.push('1')
    }
    if (_style.show.goodsPrice) {
      this.checkAllGroup.push('2')
    }
    if (_style.show.linePrice) {
      this.checkAllGroup.push('3')
    }

  },
};
</script>
<style>
.goods_box {
  color: #656565;
  font-weight: inherit;
  font-size: 14px;
  margin: 20px;
}
.goods_box .img_box {
}
.goods_box .img_box .img_item {
  display: inline-block;
  background-color: #f7fafc;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
}
.goods_box .img_box .img_item i {
  position: absolute;
  top: -5px;
  right: 0px;
}
.goods_box .img_box .img_item img {
  width: 60px;
  height: 60px;
}

.goods_box .goods_items {
  margin: 15px 0;
  font-size: 14px;
}

.goods_box li span {
  padding-right: 10px;
}
.goods_box li .point_color {
  border: 1px solid #efefef;
  width: 130px;
  height: 30px;
  align-items: center;
}
.goods_box li .point_color .color_input {
  display: inline-block;
  border: 1px solid #000;
  width: 60px;
  height: 20px;
  background-color: #f5f5f5;
}
.goods_box li .point_color .color_btn {
  display: inline-block;
  width: 50px;
  border-left: 1px solid #efefef;
  padding-left: 8px;
}
.goods_box .color {
  margin: 20px auto;
}
.goods_box .color_pick {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
}
.goods_box .goods_item p {
  color: #838fa1;
  font-size: 12px;
}
.goods_box .goods_item span {
  padding-top: 10px;
  width: 70px;
  margin-right: 10px;
  text-align: right;
}

.goods_box .ivu-select-single .ivu-select-selection {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
}

.goods_box .ivu-input-number {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
  width: 200px;
}
.goods_box .ivu-checkbox-group {
  display: inline-block;
}
</style>


