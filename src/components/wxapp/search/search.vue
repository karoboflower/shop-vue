<template>
  <div class="search_box">
    <div class="search_item d_start">
      <span class="des">提示文字</span>
      <Input v-model="notice"  @on-blur="changeNotice" />
    </div>
    <div class="search_item">
      <span class="des">搜索框样式</span>
      <RadioGroup v-model="point1" @on-change="changeRadio">
        <Radio label="0">方形</Radio>
        <Radio label="1">圆角</Radio>
        <Radio label="2">圆弧</Radio>
      </RadioGroup>
    </div>
    <div class="search_item">
      <span class="des">文字对齐</span>
      <RadioGroup v-model="point2" @on-change="changeAlign">
        <Radio label="0">居左</Radio>
        <Radio label="1">居中</Radio>
        <Radio label="2">居右</Radio>
      </RadioGroup>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      point1: "0",
      point2: "0",
      notice: "请输入关键字进行搜索",
      styleObject: {
        borderRadius: "0",
        textAlign: "left"
      }
    };
  },
  methods: {
    //改变圆角
    changeRadio(data) {
      if (data == 0) {
        this.styleObject.borderRadius = 0+"px";
        this.$store.commit("incrementSearchStyleObj", this.styleObject);
    
      } else if (data == 1) {
        this.styleObject.borderRadius = 5+ "px";
        this.$store.commit("incrementSearchStyleObj", this.styleObject);
      } else if (data == 2) {
        this.styleObject.borderRadius =15+"px";
        this.$store.commit("incrementSearchStyleObj", this.styleObject);
      }
    },
    //改变文字排列
    changeAlign(data) {
      if (data == 0) {
        this.styleObject.textAlign = "left";
        this.$store.commit("incrementSearchStyleObj", this.styleObject);
      } else if (data == 1) {
        this.styleObject.textAlign = "center";
        this.$store.commit("incrementSearchStyleObj", this.styleObject);
      } else if (data == 2) {
        this.styleObject.textAlign = "right";
        this.$store.commit("incrementSearchStyleObj", this.styleObject);
      }
    },
    //改变提示语
    changeNotice(){
      this.$emit('chagneTxt',this.notice)
      console.log('test',this.notice)
    }
  }
};
</script>

<style>
.search_box {
  margin: 20px;
}
.search_box .search_item {
  margin-bottom: 20px;
}
.search_box .search_item .des {
  font-size: 14px;
  color: #656565;
  margin-right: 15px;
  text-align: right;
  width: 80px;
  display: inline-block;
}
.search_box .search_item .ivu-input {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
  width: 200px;
}
</style>


