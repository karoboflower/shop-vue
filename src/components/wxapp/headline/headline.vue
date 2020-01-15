<template>
  <div class="headline_box">
    <div class="headline_item">
      <span class="des">文章分类</span>
      <Select v-model="model" style="width:200px">
        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="headline_item d_start">
      <span class="des">显示数量</span>
      <div>
        <InputNumber :min="1" v-model="num" />
        <p class="des_p">
          文章数据请到
          <span>内容管理 - 文章列表</span>中管理
        </p>
      </div>
    </div>
    <div class="line"></div>
    <div class="headline_item d_start ">
      <span class="des necessary">图片</span>
      <div>
        <img :src="defalutUrl" alt />
      </div>
    </div>

    <div class="headline_item">
      <span class="des  necessary">显示类型</span>
      <RadioGroup v-model="point" @on-change="changeNum">
        <Radio label="单行"></Radio>
        <Radio label="两行"></Radio>
      </RadioGroup>
    </div>
  </div>
</template>
<script>
export default {
  name: "headline",
  data() {
    return {
      point: "单行",
      defalutUrl: require("../../../assets/images/special.png"),
      num: 6,
      typeList: [
        {
          value: "全部分类",
          label: "-- 全部分类 --"
        }
      ],
      model: "全部分类"
    };
  },
  methods:{
    //改变行数
    changeNum(data){
      if(data=="单行"){
        this.$emit('chanageLine',1);
      }else if(data=="两行"){
        this.$emit('chanageLine',2);
      }
    }
  }
};
</script>

<style>
.headline_box {
  margin: 20px;
}
.headline_box .headline_item {
  margin-bottom: 20px;
}
.headline_box .headline_item .des {
    font-size: 14px;
    color: #656565;
    margin-right: 15px;
    text-align: right;
    width: 80px;
    display: inline-block;
}
.headline_box .necessary{
  position: relative;
  padding-right: 10px;
}
.headline_box .necessary:before{
   content: "*";
  display: inline-block;
  margin-right: 4px;
  line-height: 1;
  font-family: SimSun;
  font-size: 12px;
  color: #ed4014;
  position: absolute;
  top: 5px;
  left: 75px;
}
.headline_box .line{
  border-top:1px dashed #ccc;
  height:1px;
  margin-bottom: 20px;
}
 .headline_box .headline_item  .des_p{
  color: #838fa1;
  font-size: 12px;
  line-height:2em;
}
 .headline_box .headline_item  .des_p span{
   color: #0e90d2;
 }
.headline_box .headline_item .ivu-select-selection {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
}

.headline_box .headline_item .ivu-input-number {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
  width: 200px;
}
</style>


