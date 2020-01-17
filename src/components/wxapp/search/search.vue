<template>
  <div class="search_box">
    <div class="search_item d_start">
      <span class="des">提示文字</span>
      <Input v-model="placeholder1" @on-blur="changeParams" />
    </div>
    <div class="search_item">
      <span class="des">搜索框样式</span>
      <RadioGroup v-model="searchStyle" @on-change="changeStyle">
        <Radio label="square">方形</Radio>
        <Radio label="radius">圆角</Radio>
        <Radio label="round">圆弧</Radio>
      </RadioGroup>
    </div>
    <div class="search_item">
      <span class="des">文字对齐</span>
      <RadioGroup v-model="textAlign" @on-change="changeStyle">
        <Radio label="left">居左</Radio>
        <Radio label="center">居中</Radio>
        <Radio label="right">居右</Radio>
      </RadioGroup>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data () {
    return {
    };
  },
    props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
  computed: {
    placeholder1: {
      get: function () {
        return this.defaultData.params.placeholder;
      },
      set: function (val) {
        this.defaultData.params.placeholder = val;
      }
    },
    textAlign: {
      get: function () {
        return this.defaultData.style.textAlign;
      },
      set: function (val) {
        this.defaultData.style.textAlign = val;
      }
    },
    searchStyle: {
      get: function () {
        return this.defaultData.style.searchStyle;
      },
      set: function (val) {
        this.defaultData.style.searchStyle = val;
      }
    },
  },
  methods: {
    changeStyle () {
      this.$store.commit("incrementCompListItem", {
        type: 'style',
        value: {
          textAlign: this.textAlign, searchStyle: this.searchStyle        }
      });
    },
    changeParams () {
      this.$store.commit("incrementCompListItem", {
        type: 'params',
        value: {
          placeholder: this.placeholder1       }
      });
    },
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


