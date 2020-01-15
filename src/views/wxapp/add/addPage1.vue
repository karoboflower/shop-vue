<template>
  <div class="add_page">
    <ul class="d_btw">
      <!-- 组件库 -->
      <li class="commpents">
        <div class="title">
          <span></span> 组件库
        </div>
        <div v-for="item in leftComTitle" :key="item.type" :class="item.type">
          <div class="name">{{item.name}}</div>
          <ul class="comp_cnt d_start">
            <li @click="addComItem(child)" v-for="child in item.children" :key="child.type">
              <i :class="['iconfont',child.class]"></i>
              <p>{{child.name}}</p>
            </li>
          </ul>
        </div>
        <div class="btn">
          <Button type="primary">保存页面</Button>
        </div>
      </li>
      <!-- 显示 -->
      <li class="page">
        <div
          class="page_head"
          @click="editItem({'name':'title','type':'title'},-1)"
          :class="{selected:selectedIndex===-1}"
        >
          <span class="page_title">页面标题</span>
        </div>
        <ul class="page_cnt" >
          <li
            :is="item.component"
            :defaultData="item.default"
            v-for="(item,index) in compList"
            :key="index" 
            @click.native="editItem(item,index)"
            :class="{selected:selectedIndex===index}"
          > <div slot="del" class="del_com" v-show="index==selectedIndex" @click="deleteItem(index)">删除</div></li>
        </ul>
      </li>
      <!-- 设置 -->
      <li class="set">
        <!-- 标题-->
        <div class="title">
          <span></span>
          {{selectedTitle}}
        </div>
        <!-- 设置内容 -->
        <div class="com_set_box">
       <swiper v-if="flag==='swiperComponent'" :defaultData="compList[selectedIndex].default"  @changeData="changeSwiper"></swiper>
        <page-title v-if="flag=='title'" :title="pageTitle"  @changePageTitle="changeTitle"></page-title>
          <!-- <photo v-if="flag=='photo'" :data="photoData" @changePhoto="photoImg"></photo>
          <window v-if="flag=='window'" :windowData="windowData" @changeWindow="windowImg"></window>
          <goods v-if="flag=='goods'" :goodsData="goodsData"></goods>
          <blank v-if="flag=='blank'"></blank>
          <auxiliarline v-if="flag=='auxiliarline'"></auxiliarline> -->
        </div>
      </li>
    </ul>
    <!-- 底部 -->

    <div class="add_page_foot">
      <p>1. 设计完成后点击"保存页面"，在小程序端页面下拉刷新即可看到效果。</p>
      <p>
        2. 如需填写链接地址请参考
        <a >页面链接</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "addPage",
  data () {
    return {
      leftComTitle: [
        {
          type: 'media',
          name: '媒体组件',
          children: [{
            name: '图片轮播',
            class: 'icon-LC_icon_photo_line_1',
            type: 'swiperComponent',
          }, {
            name: '单图组',
            class: 'icon-photo',
            type: ''
          }, {
            name: '图片橱窗',
            class: 'icon-chuanghu',
            type: 'swiper'
          }, {
            name: '视频组',
            class: 'icon-ziyuan',
            type: 'swiper'
          }, {
            name: '文章组',
            class: 'icon-order',
            type: 'swiper'
          }, {
            name: '头条快报',
            class: 'icon-icon-article',
            type: 'swiper'
          }]
        },
        {
          type: 'shop',
          name: '商城组件',
          children: [{
            name: '搜索框',
            class: 'icon-search',
            type: 'swiper'
          }, {
            name: '公告组',
            class: 'icon-icon-test',
            type: 'swiper'
          }, {
            name: '导航组',
            class: 'icon-daohang',
            type: 'swiper'
          }, {
            name: '视频组',
            class: 'icon-ziyuan',
            type: 'swiper'
          }, {
            name: '商品组',
            class: 'icon-shangpin',
            type: 'swiper'
          }, {
            name: '优惠券组',
            class: 'icon-coupon',
            type: 'swiper'
          }, {
            name: '拼团商品',
            class: 'icon-gengduopintuan',
            type: 'swiper'
          }, {
            name: '砍价商品',
            class: 'icon-kanjia',
            type: 'swiper'
          }, {
            name: '线下门店',
            class: 'icon-store1',
            type: 'swiper'
          }]
        },
        {
          type: 'tool',
          name: '工具组件',
          children: [{
            name: '在线客服',
            class: 'icon-kefu',
            type: 'swiper'
          }, {
            name: '富文本',
            class: 'icon-fuwenbenkuang',
            type: 'swiper'
          }, {
            name: '辅助空白',
            class: 'icon-xuxiankuang',
            type: 'swiper'
          }, {
            name: '辅助线',
            class: 'icon-xian',
            type: 'swiper'
          }]
        }
      ],
      selectedIndex: -2,
      selectedTitle: '页面设置',
      compList: [],
      flag: '',
    };
  },
    methods: {
    addCompList: function (type) {
    },
    editItem: function (item, index) {
    this.selectedIndex = index;
    this.flag = item.component;
    this.$store.commit("incrementSelectedIndex",  this.selectedIndex);
    },
    addComItem: function (item) {
      this.compList.push({
        component: item.type,
        default: {
              name: "图片轮播",
              type: "banner",
              style: {
                btnColor: "#ffffff",
                btnShape: "round"
              },
              params: {
                interval: "2800"
              },
              data: [
                {
                  linkUrl: require("../../../assets/images/defaultImg.png")
                },
                {
                  linkUrl: require("../../../assets/images/defaultImg.png")
                },
                {
                  linkUrl: require("../../../assets/images/defaultImg.png")
                }
              ]
            },
      });
      this.flag=item.type;
      this.selectedIndex=this.compList.length-1;
      this.$store.commit("incrementCompList",  this.compList);
      this.$store.commit("incrementSelectedIndex",  this.selectedIndex);
     
    },
    changeSwiper:function(){

    },
    deleteItem:function(){

    }
  }
};
</script>

<style>

.add_page .page .page_cnt .del_com {
  font-size: 10px;
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 10px;
  z-index: 8;
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
}
.add_page .title {
  font-size: 14px;
  padding-left: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
}

.add_page .title span {
  background: #259fdc;
  height: 16px;
  width: 5px;
  margin-right: 5px;
  display: inline-block;
}
.add_page .commpents {
  width: 300px;
  height: 650px;
  background: #fdfdfd;
  border: 1px solid #ddd;
  padding: 15px 10px;
  transition: all 0.3s;
  user-select: none;
}
.add_page .commpents .name {
  color: #999;
  margin: 10px;
  font-size: 12px;
}
.add_page .commpents .comp_cnt {
  width: 100%;
  flex-wrap: wrap;
  padding: 0 10px;
}
.add_page .commpents .btn {
  border-top: 1px solid #ddd;
  margin-top: 15px;
  padding-top: 15px;
  text-align: right;
}
.add_page .commpents .comp_cnt li {
  color: #424242;
  width: 70px;
  background: #f4f4f4;
  padding: 3px 0;
  margin: 5px;
  border: 1px solid #dddddd;
  text-align: center;
  font-size: 12px;
}
.add_page .page {
  width: 377px;
  border-radius: 3px;
  box-shadow: 0 3px 10px #dcdcdc;
  border: 1px solid #ddd;
  height: 650px;
  overflow: hidden;
  margin: 0 15%;
}
.add_page .page .page_head {
  position: relative;
  background: url(../../../assets/images/phone-head.png) center center / contain
    no-repeat rgb(255, 255, 255);
  height: 75px;
}

.add_page .page .page_cnt {
  height: 575px;
  overflow: auto;
}
.add_page .swiper {
  position: relative;
}
.add_page .swiper ul {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.add_page .swiper ul li {
  display: inline-block;
  float: left;
  background-color: #fff;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.add_page .chuang {
  width: 100%;
  flex-wrap: wrap;
}
.add_page .chuang li {
  width: 50%;
  text-align: center;
  height: 180px;
  color: #fff;
  font-size: 28px;
  line-height: 180px;
}
.add_page .chuang li:nth-of-type(1) {
  background-color: #159b76;
}
.add_page .chuang li:nth-of-type(2) {
  background-color: #facc2e;
}
.add_page .chuang li:nth-of-type(3) {
  background-color: #cef6f5;
}
.add_page .chuang li:nth-of-type(4) {
  background-color: #f5a9f2;
}

.add_page .page img {
  width: 100%;
}
.add_page .page .page_head .page_title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  font-size: 14px;
}
.add_page .set {
  width: 400px;
  height: auto;
  min-height: 100px;
  padding: 15px 10px;
  border: 1px solid #ddd;
}

.add_page .add_page_foot {
  margin-top: 50px;
  background-color: #fbfdff;
  border: 1px solid #dfeffd;
  line-height: 1.6;
  color: #259fdc;
  font-size: 12px;
  padding: 20px;
}
.selected {
  border: 2px dashed #00a0e9;
}
</style>


