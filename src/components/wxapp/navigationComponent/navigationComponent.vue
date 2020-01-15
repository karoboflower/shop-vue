<template>
  <div>
    <ul class="navigation_compon d_start">
      <li v-for="(item,index) of data" :key="index" class="default" :style="styleObject">
        <img :src="item.url" class="tabImg" />
        <p class="txt">{{item.title}}{{index+1}}</p>
      </li>
      <slot name="del"></slot>
    </ul>
  </div>
</template>


<script>
export default {
  name: "navigationComponent",
  data() {
    return {
      styleObject: {
        backgroundColor: "#fff",
        width: "25%",
        color1: "#000",
        color2: "#000",
        color3: "#000",
        color4: "#000"
      }
    };
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },

  computed: {
    navigationStyleObj() {
      return this.$store.state.navigationStyleObj;
    }
  },

  watch: {
    navigationStyleObj(newVal) {
      this.styleObject = newVal;
    }
  },
  methods: {}
};
</script>
<style scoped>
.navigation_compon {
  line-height: 0;
  position: relative;
  flex-wrap: wrap;
}

.navigation_compon .default {
  box-sizing: border-box;
  text-align: center;
  padding: 10px 0;
}
.navigation_compon .default .tabImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.navigation_compon .default .txt {
  font-size: 13px;
  line-height: 1.1em;
  color: rgb(102, 102, 102);
}
</style>


