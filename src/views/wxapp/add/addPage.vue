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
          <Button type="primary" @click="getData">保存页面</Button>
        </div>
      </li>
      <!-- 显示 -->
      <li class="page">
        <div
          class="page_head"
          @click="editItem({'name':'title','component':'title'},-1)"
          :class="{selected:selectedIndex===-1}"
          :style="titleCurrentStyle"
        >
          <span class="page_title">{{header.params.title?header.params.title:'页面标题'}}</span>
        </div>

        <ul class="page_cnt" v-show="compList.length">
          <vuedraggable
            :list="compList"
            class="dragArea"
            @update="onDragItemEnd"
            :options="{animation: 120, filter: '.drag__nomove' }"
          >
            <li
              :is="item.component"
              :defaultData="item.default"
              v-for="(item,index) in compList"
              :key="index"
              @click.native="editItem(item,index)"
              :class="{selected:selectedIndex===index}"
            >
              <div
                slot="del"
                class="del_com"
                v-show="index==selectedIndex"
                @click="deleteItem(index)"
              >删除</div>
            </li>
          </vuedraggable>
        </ul>
      </li>
      <!-- 设置 -->
      <li class="set">
        <!-- 标题-->
        <div class="title">
          <span></span>
          {{compList[selectedIndex]?compList[selectedIndex].default.name:'页面设置'}}
        </div>
        <!-- 设置内容 -->
        <div class="com_set_box">
          <swiper v-if="flag==='swiperComponent'" :defaultData="compList[selectedIndex].default"></swiper>
          <page-title v-if="flag=='title'" :defaultData="header"></page-title>
          <photo v-if="flag==='photoComponent'" :defaultData="compList[selectedIndex].default"></photo>
          <windowP v-if="flag=='windowComponent'" :defaultData="compList[selectedIndex].default"></windowP>
          <videoP v-if="flag=='videoComponent'" :defaultData="compList[selectedIndex].default"></videoP>
          <announce v-if="flag=='announceComponent'" :defaultData="compList[selectedIndex].default"></announce>
          <goods v-if="flag=='goodsComponent'" :defaultData="compList[selectedIndex].default"></goods>
          <auxiliarline
            v-if="flag=='auxiliarlineComponent'"
            :defaultData="compList[selectedIndex].default"
          ></auxiliarline>
          <blank v-if="flag=='blankComponent'" :defaultData="compList[selectedIndex].default"></blank>
          <richText v-if="flag=='richTextComponent'" :defaultData="compList[selectedIndex].default"></richText>
          <navigation
            v-if="flag=='navigationComponent'"
            :defaultData="compList[selectedIndex].default"
          ></navigation>
          <search v-if="flag=='searchComponent'" :defaultData="compList[selectedIndex].default"></search>
        </div>
      </li>
    </ul>
    <!-- 底部 -->

    <div class="add_page_foot">
      <p>1. 设计完成后点击"保存页面"，在小程序端页面下拉刷新即可看到效果。</p>
      <p>
        2. 如需填写链接地址请参考
        <a>页面链接</a>
      </p>
    </div>
  </div>
</template>
<script>
import freightService from "../../../service/wxapp/wxappService"
import vuedraggable from 'vuedraggable';
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
                  linkUrl: '',
                  img: '',
                },
                {
                  linkUrl: '',
                  img: '',
                }
              ]
            },

          }, {
            name: '单图组',
            class: 'icon-photo',
            type: 'photoComponent',
            default: {
              name: "单图组",
              type: "imageSingle",
              style: {
                paddingTop: "0",
                paddingLeft: "0",
                background: "#ffffff"
              },
              data: [
                {
                  linkUrl: '',
                  img: '',
                },
                {
                  linkUrl: '',
                  img: '',
                }
              ]
            },
          }, {
            name: '图片橱窗',
            class: 'icon-chuanghu',
            type: "windowComponent",
            default: {
              name: "图片橱窗",
              type: "window",
              style: {
                paddingTop: "0",
                paddingLeft: "0",
                background: "#ffffff",
                layout: "2"
              },
              data: [
                {
                  linkUrl: '',
                  img: '',
                },
                {
                  linkUrl: '',
                  img: '',
                }
              ],
              dataNum: 2
            },
          }, {
            name: '视频组',
            class: 'icon-ziyuan',
            type: 'videoComponent',
            default: {
              name: "视频组",
              type: "video",
              params: {
                videoUrl: "",		//视频地址
                img: "",								//视频封面图片id
                autoplay: "0"							//是否自动播放，0否1是
              },
              style: {
                paddingTop: "0",						//上下内边距
                height: "190"							//视频组件高度
              }
            }

          },
            //    {
            //     name: '文章组',
            //     class: 'icon-order',
            //     type: 'swiperComponent'
            //   }, {
            //     name: '头条快报',
            //     class: 'icon-icon-article',
            //     type: 'swiperComponent'
            //   }
          ]
        },
        {
          type: 'shop',
          name: '商城组件',
          children: [
            {
              name: '搜索框',
              class: 'icon-search',
              type: 'searchComponent',
              default: {
                "name": "搜索框",
                "type": "search",
                "params": {
                  "placeholder": ""		//搜索框提示文字
                },
                "style": {
                  "textAlign": "center",		//搜索框文字位置
                  "searchStyle": "radius"	//框形状square方形、radius圆角、round圆弧
                }

              }
            },
            {
              name: '公告组',
              class: 'icon-icon-test',
              type: 'announceComponent',
              default: {
                "name": "公告组",
                "type": "notice",
                "params": {
                  "text": "",
                  "img": ""
                },
                "style": {
                  "paddingTop": "4",
                  "background": "#ffffff",
                  "textColor": "#000000",
                  "textSize": 13
                }
              }

            }, {
              name: '导航组',
              class: 'icon-daohang',
              type: 'navigationComponent',
              default: {
                "name": "导航组",
                "type": "navBar",
                "style": {
                  "background": "#ffffff",		//背景色
                  "rowsNum": "4"					//导航个数
                },
                "data": [
                  {
                    "img": "",					//图片id
                    "linkUrl": "",				//跳转链接，用户输入
                    "text": "",			//文字描述
                    "color": "#666"			//文字颜色
                  },
                  {
                    "img": "",
                    "linkUrl": "",
                    "text": "",
                    "color": "#666"
                  },
                  {
                    "img": "",
                    "linkUrl": "",
                    "text": "",
                    "color": "#666"
                  },
                  {
                    "img": "",
                    "linkUrl": "",
                    "text": "",
                    "color": "#666"
                  }
                ]
              }

            },
            // {
            //   name: '视频组',
            //   class: 'icon-ziyuan',
            //   type: 'swiperComponent'
            // }, 
            {
              name: '商品组',
              class: 'icon-shangpin',
              type: 'goodsComponent',
              default:// 手动选择
              {
                "name": "商品组",
                "type": "goods",
                "params": {
                  "source": "auto", 	//商品来源：choice用户选择、auto自动获取 (auto自动获取)
                },
                "style": {
                  "background": "#F6F6F6",	//背景色
                  "display": "list",  //滑动方式 (slide横向滑动并且column > 1)
                  "column": "2",	//列数
                  "show": {
                    "goodsName": true,	//是否显示商品名称
                    "goodsPrice": true,	//是否显示商品价格
                    "linePrice": true		//是否显示划线价格
                  }
                },
                "data": [					//手动选择需要携带data
                  {
                    spuId: "10008",	//商品spuid
                    img: '',
                    name: "此处显示商品名称",
                    price: "99",
                    linePrice: "139"
                  },
                  {
                    spuId: "10010",
                    img: '',
                    name: "此处显示商品名称",
                    price: "99",
                    linePrice: "139"
                  }
                ]
              }

            },
            //    {
            //     name: '优惠券组',
            //     class: 'icon-coupon',
            //     type: 'swiperComponent'
            //   }, {
            //     name: '拼团商品',
            //     class: 'icon-gengduopintuan',
            //     type: 'swiperComponent'
            //   }, {
            //     name: '砍价商品',
            //     class: 'icon-kanjia',
            //     type: 'swiperComponent'
            //   }, {
            //     name: '线下门店',
            //     class: 'icon-store1',
            //     type: 'swiperComponent'
            //   }
          ]
        },
        {
          type: 'tool',
          name: '工具组件',
          children: [
            //       {
            //     name: '在线客服',
            //     class: 'icon-kefu',
            //     type: 'swiperComponent'
            //   }, 
            {
              name: '富文本',
              class: 'icon-fuwenbenkuang',
              type: 'richTextComponent',
              default: {
                "name": "富文本",
                "type": "richText",
                "params": {
                  "content": ""		//文本内容
                },
                "style": {
                  "paddingTop": "0",				//上下边距
                  "paddingLeft": "0",				//左右边距
                  "background": "#ffffff"			//背景色
                }
              }

            }, {
              name: '辅助空白',
              class: 'icon-xuxiankuang',
              type: 'blankComponent',
              default: {
                "name": "辅助空白",
                "type": "blank",
                "style": {
                  "height": "20",				//空白高度
                  "background": "#ffffff"		//空白颜色
                }
              }

            }, {
              name: '辅助线',
              class: 'icon-xian',
              type: 'auxiliarlineComponent',
              default: {
                "name": "辅助线",
                "type": "guide",
                "style": {
                  "background": "#ffffff",	//背景色
                  "lineStyle": "solid",		//线条样式：solid线条、dashed虚线、dotted点状
                  "lineHeight": "1",			//线条粗细
                  "lineColor": "#000000",		//线条颜色
                  "paddingTop": "13"			//上下边距
                }
              }

            }]
        }
      ],
      selectedIndex: -2,
      selectedTitle: '页面设置',
      compList: [],
      header: {
        params: {
          name: "",
          title: "",
          share_title: ""
        },
        style: {
          titleTextColor: "#000",
          titleBackgroundColor: "#ffffff"
        }
      },
      flag: '',
      compListMap: {
        'guide': 'auxiliarlineComponent',
        'blank': 'blankComponent',
        'richText': 'richTextComponent',
        'goods': 'goodsComponent',
        'navBar': 'navigationComponent',
        'notice': 'navigationComponent',
        'search': 'searchComponent',
        'video': 'videoComponent',
        'window': 'windowComponent',
        'imageSingle': 'photoComponent',
        'banner': 'swiperComponent'

      }
    };
  },
  methods: {
    editItem: function (item, index) {
      this.selectedIndex = index;
      this.flag = item.component;
      this.$store.commit("incrementSelectedIndex", this.selectedIndex);
    },
    addComItem: function (item) {
      this.compList.push({
        component: item.type,
        default: JSON.parse(JSON.stringify(item.default))

      });
      this.flag = item.type;
      this.selectedIndex = this.compList.length - 1;
      this.$store.commit("incrementCompList", this.compList);
      this.$store.commit("incrementSelectedIndex", this.selectedIndex);

    },
    deleteItem: function (index) {
      let _this = this;
      this.$Modal.confirm({
        title: "友情提示",
        content: "<p>确定要删除吗？</p>",
        onOk: () => {
          _this.compList.splice(index, 1);
          if (_this.compList[index]) {
            _this.flag = _this.compList[index].component;
            _this.selectedIndex = index;
          } else if (_this.compList[index - 1]) {
            _this.flag = _this.compList[index - 1].component;
            _this.selectedIndex = index - 1;
          } else {
            _this.flag = '';
            _this.selectedIndex = -2;
          }
          _this.$store.commit("incrementCompList", _this.compList);
          _this.$store.commit("incrementSelectedIndex", this.selectedIndex);
        }
      });

    },
    getData: function () {
      let _this = this
      let _data = this.$store.state.compList;
      let params = {};
      let postParams = {};
      params.items = [];
      params.page = this.header;
      for (let i = 0; i < _data.length; i++) {
        params.items.push(_data[i].default);
      };
      postParams.pageName = this.header.params.name;
      postParams.pageType = "10";
      postParams.pageData = JSON.stringify(params);
      let id = _this.$route.query ? _this.$route.query.id : '';
      if (id) {
        postParams.pageId = id;
        freightService.editPage(postParams).then(res => {
          if (res.code === 0) {
            setTimeout(function () {
              _this.$Message.info("修改成功");
              _this.$router.push('wxappPageDesign');
            }, 1000)
          } else {
            _this.$Message.info("修改失败");
            return false;
          }
        })
      } else {
        freightService.addPage(postParams).then(res => {
          if (res.code === 0) {
            setTimeout(function () {
              _this.$Message.info("添加成功");
              _this.$router.push('wxappPageDesign');
            }, 1000)
          } else {
            _this.$Message.info("添加失败");
            return false;
          }
        })
      }


    },
    getDataItem: function (id) {
      let _this = this
      freightService.itemPage(id).then((res) => {
        let _data = JSON.parse(res.data.pageData);
        _this.header = _data.page;
        let compListMap = _this.compListMap;
        for (let i = 0; i < _data.items.length; i++) {
          for (var key in compListMap) {
            if (_data.items[i].type === key) {
              _this.compList.push({
                component: compListMap[key],
                default: _data.items[i]
              })
            }
          }
        }
        _this.selectedIndex = -1;
        this.flag = 'title';
        _this.$store.commit("incrementCompList", _this.compList);
        _this.$store.commit("incrementSelectedIndex", _this.selectedIndex);
      })
    },
    onDragItemEnd:function (evt){
        this.selectedIndex=evt.newIndex
        this.flag=this.compList[this.selectedIndex].component;
          this.$store.commit("incrementCompList", this.compList);
      this.$store.commit("incrementSelectedIndex", this.selectedIndex);
    }
  },
  computed: {
    titleCurrentStyle: function () {
      return {
        backgroundColor: this.header.style.titleBackgroundColor,
        color: this.header.style.titleTextColor
      }
    }



  },

  created () {
    let id = this.$route.query ? this.$route.query.id : '';
    if (id) {
      this.getDataItem(id);
    }

  },
    components: {vuedraggable},
};
</script>

<style>
.add_page {
  min-width: 700px;
}
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
  min-width: 150px;
  background: #fdfdfd;
  border: 1px solid #ddd;
  padding: 15px 10px;
  transition: all 0.3s;
  user-select: none;
  overflow-y: auto;
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
  min-width: 377px;
  border-radius: 3px;
  box-shadow: 0 3px 10px #dcdcdc;
  border: 1px solid #ddd;
  height: 650px;
  overflow: hidden;
  margin: 0 10%;
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
  min-width: 300px;
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


