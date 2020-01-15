<template>
  <div>
    <ul class="menu">
      <li
        v-for="(item,index) of menuList"
        :key="item.id"
        :class="index==activeIndex ?  'menu_active':''"
        @click="changeTab(index,item.router)"
      >
        <i :class="item.icon"></i>
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "menuLeft",
  data() {
    return {
      activeIndex: 0,
      menuList: [
        {
          id: 1,
          name: "首页",
          url: "/home",
          icon: "iconfont icon-home1",
          router: "/index"
        },
        {
          id: 2,
          name: "商品管理",
          url: "/home",
          icon: "iconfont icon-gift1",
          router: "/goods"
        },
        {
          id: 3,
          name: "订单管理",
          url: "/home",
          icon: "iconfont icon-orderform",
          router: "/order"
        },
        {
          id: 4,
          name: "用户管理",
          url: "/home",
          icon: "iconfont icon-user",
          router: "/user"
        },
        {
          id: 5,
          name: "门店管理",
          url: "/home",
          icon: "iconfont icon-store",
          router: "/store"
        },
        {
          id: 6,
          name: "小程序",
          url: "/home",
          icon: "iconfont icon-xiaochengxu",
          router: "/wxapp"
        },
        {
          id: 7,
          name: "设置",
          url: "/home",
          icon: "iconfont icon-set",
          router: "/setting"
        }
      ]
    };
  },
  created() {
    this.refuibishHandle();
  },

  methods: {
    //改变选中
    changeTab(index, router) {
      this.activeIndex = index;
      this.$emit("goto", router);
    },
    // 刷新后判断
    refuibishHandle() {
      if (this.$route.meta.sort == 1) {
        if (this.$route.name == "index") {
          this.activeIndex = 0;
        } else if (this.$route.name == "goods") {
          this.activeIndex = 1;
        } else if (this.$route.name == "order") {
          this.activeIndex = 2;
        } else if (this.$route.name == "user") {
          this.activeIndex = 3;
        } else if (this.$route.name == "store") {
          this.activeIndex = 4;
        }else if (this.$route.name == "wxapp") {
          this.activeIndex = 5;
        }else if (this.$route.name == "setting") {
          this.activeIndex = 6;
        }
      }else if(this.$route.meta.sort == 2){
        if (this.$route.parentsName == "index") {
          this.activeIndex = 0;
        } else if (this.$route.meta.parentsName == "goods") {
          this.activeIndex = 1;
        } else if (this.$route.meta.parentsName == "order") {
          this.activeIndex = 2;
        } else if (this.$route.meta.parentsName == "user") {
          this.activeIndex = 3;
        } else if (this.$route.meta.parentsName == "store") {
          this.activeIndex = 4;
        }else if (this.$route.meta.parentsName == "wxapp") {
          this.activeIndex = 5;
        }else if (this.$route.meta.parentsName == "setting") {
          this.activeIndex = 6;
        }
      }
    }
  }
};
</script>

<style scoped>
.menu {
  width: 160px;
  text-align: center;
}
.menu li:first-child {
  margin-top: 40px;
}
.menu li {
  padding: 10px 15px;
  margin: 10px auto;
  text-align: left;
  font-size: 15px;
  border-left: 3px solid transparent;
}
.menu li i {
  font-size: 20px;
  margin-right: 10px;
}
.menu li:nth-child(5) i {
  font-size: 15px;
  color: #36b313;
}
.menu li:nth-child(6) i {
  font-size: 22px;
  color: #36b313;
}
.menu li:hover {
  border-left: 3px solid #009688;
}
.menu_active {
  cursor: pointer;
  color: #fff;
  background: #009688;
}
.menu_active i {
  color: #fff !important;
}
</style>



