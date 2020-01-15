<template>
  <div>
    <ul class="photo_compon" >
      <li v-for="(item,index) of data" :key="index" :style="styleObject" class="default">
        <img :src="item.url" alt />
      </li>
        <slot name="del"></slot>
    </ul>
  </div>
</template>


<script>
export default {
  name: "photoComponent",
  data() {
    return {
      styleObject: {
        backgroundColor: "#fff",
        paddingTop: "0",
        paddingBottom: "0",
        paddingLeft: "0",
        paddingRight: "0"
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
    photoStyleObj() {
      return this.$store.state.photoStyleObj;
    }
  },

  watch: {
    photoStyleObj(newVal) {
      this.styleObject = newVal;
    }
  },

};
</script>
<style scoped>
.photo_compon {
  line-height: 0;
  position: relative;
}

.photo_compon .default {
  box-sizing: border-box;
}
.photo_compon .default img{
  width: 100%;
  height: 200px;
}
</style>


