<template>
  <div class="article_box">
    <div class="article_item">
      <span class="des">文章分类</span>
      <Select v-model="model" style="width:200px">
        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="article_item">
      <span class="des">显示数量</span>
       <InputNumber :min="1" v-model="num" />
    </div>
  </div>
</template>
<script>
export default {
  name: "essay",
  data() {
    return {
      num: 6,
      typeList: [
        {
          value: "全部分类",
          label: "-- 全部分类 --"
        },
      ],
      model: "全部分类"
    };
  }
};
</script>

<style>
.article_box {
  margin: 20px;
}
.article_box .article_item {
  margin-bottom: 20px;
}
.article_box .article_item .des {
  font-size: 14px;
  color: #656565;
  margin-right: 15px;
}
.article_box .article_item .ivu-select-selection {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
}

.article_box .article_item .ivu-input-number {
  border: none;
  border-bottom: 1px solid #dcdee2;
  border-radius: 0;
  width: 200px;
}
</style>


