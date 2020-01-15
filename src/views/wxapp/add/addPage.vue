<template>
  <div class="add_page">
    <ul class="d_btw">
      <!-- 组件库 -->
      <li class="commpents">
        <div class="title">
          <span></span> 组件库
        </div>
        <div class="meida">
          <div class="name">媒体组件</div>
          <ul class="comp_cnt d_start">
            <li @click="add('swiper','swiperData','swiper','图片轮播')">
              <i class="iconfont icon-LC_icon_photo_line_1"></i>
              <p>图片轮播</p>
            </li>
            <li @click="add('photo-component','photoData','photo','单组图')">
              <i class="iconfont icon-photo"></i>
              <p>单图组</p>
            </li>
            <li>
              <i class="iconfont icon-chuanghu"></i>
              <p>图片橱窗</p>
            </li>
            <li>
              <i class="iconfont icon-ziyuan"></i>
              <p>视频组</p>
            </li>
            <li>
              <i class="iconfont icon-order"></i>
              <p>文章组</p>
            </li>
            <li>
              <i class="iconfont icon-icon-article"></i>
              <p>头条快报</p>
            </li>
          </ul>
        </div>
        <div class="shop">
          <div class="name">商城组件</div>
          <ul class="comp_cnt d_start">
            <li>
              <i class="iconfont icon-search"></i>
              <p>搜索框</p>
            </li>
            <li>
              <i class="iconfont icon-icon-test"></i>
              <p>公告组</p>
            </li>
            <li>
              <i class="iconfont icon-daohang"></i>
              <p>导航组</p>
            </li>
            <li>
              <i class="iconfont icon-shangpin"></i>
              <p>商品组</p>
            </li>
            <li>
              <i class="iconfont icon-coupon"></i>
              <p>优惠券组</p>
            </li>
            <li>
              <i class="iconfont icon-gengduopintuan"></i>
              <p>拼团商品</p>
            </li>
            <li>
              <i class="iconfont icon-kanjia"></i>
              <p>砍价商品</p>
            </li>
            <li>
              <i class="iconfont icon-store1"></i>
              <p>线下门店</p>
            </li>
          </ul>
        </div>
        <div class="tool">
          <div class="name">工具组件</div>
          <ul class="comp_cnt d_start">
            <li>
              <i class="iconfont icon-kefu"></i>
              <p>在线客服</p>
            </li>

            <li>
              <i class="iconfont icon-fuwenbenkuang"></i>
              <p>富文本</p>
            </li>
            <li>
              <i class="iconfont icon-xuxiankuang"></i>
              <p>辅助空白</p>
            </li>
            <li>
              <i class="iconfont icon-xian"></i>
              <p>辅助线</p>
            </li>
          </ul>
        </div>
        <div class="btn">
          <Button type="primary">保存页面</Button>
        </div>
      </li>
      <!-- 显示 -->
      <li class="page">
        <div class="page_head" @click="eidtTitle">
          <span class="page_title">{{pageTitle}}</span>
        </div>
        <ul class="page_cnt" ref="page">
          <li
            :is="item.component"
            :data="item.val"
            v-for="(item,index) in compList"
            :key="index"
            @click.native="edit(item,index)"
          ></li>
        </ul>
      </li>
      <!-- 设置 -->
      <li class="set">
        <!-- 标题-->
        <div class="title">
          <span></span>
          {{defaultTitle}}
        </div>
        <!-- 设置内容 -->
        <div class="com_set_box">
          <swiper v-if="componentType=='swiper'" @changeSwiperPhoto="SwiperImg"></swiper>
          <photo v-if="componentType=='photo'" @changePhoto="photoImg"></photo>
        </div>
      </li>
    </ul>
    <!-- 底部 -->
    <div class="add_page_foot">
      <p>1. 设计完成后点击"保存页面"，在小程序端页面下拉刷新即可看到效果。</p>
      <p>
        2. 如需填写链接地址请参考
        <a @click="goto">页面链接</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "addPage",
  data() {
    return {
      swiperData: [
        {
          url: "https://demo.yiovo.com/assets/store/img/diy/banner/01.png"
        },
        {
          url: "https://demo.yiovo.com/assets/store/img/diy/banner/01.png"
        }
      ],
      photoData: [
        {
          url: "https://demo.yiovo.com/assets/store/img/diy/banner/01.png"
        },
        {
          url: "https://demo.yiovo.com/assets/store/img/diy/banner/01.png"
        }
      ],
      componentType: "",
      defaultTitle: "默认标题",
      pageTitle: "页面标题",
      compList: [],
      setI:-1,
    };
  },
  watch:{
    photoData(newVal){
      console.log('newVal',newVal)
    }
  },
  methods: {
    SwiperImg(newVal){
     this.photoData=newVal;
     this.compList[this.setI].val=newVal
    },
    photoImg(newVal){
     this.photoData=newVal;
     this.compList[this.setI].val=newVal
    },
    //添加组件
    add(component, val, type, title) {
      this.compList.push({
        component: component,
        val: this[val],
        type: type,
        title: title
      });
    },
    //编辑组件
    edit(item, index) {
      this.setI=index;
      for (var i = 0; i < this.$refs.page.children.length; i++) {
        this.$refs.page.children[i].style.border = "none";
      }
      this.$refs.page.children[index].style.border = "2px dashed #00a0e9";
      this.componentType = item.type;
      this.defaultTitle = item.title;
    },
    goto() {
      this.$router.push("/wxappPageLink");
    },
    //动态显示组件标题
    eidtTitle() {
      this.title = this.pageTitle;
    }
  }
};
</script>

<style>
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
  height: auto;
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
</style>


