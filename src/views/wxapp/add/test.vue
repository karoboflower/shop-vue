<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>萤火小程序商城</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="renderer" content="webkit"/>
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <link rel="icon" type="image/png" href="assets/common/i/favicon.ico"/>
    <meta name="apple-mobile-web-app-title" content="萤火小程序商城"/>
    <link rel="stylesheet" href="assets/common/css/amazeui.min.css"/>
    <link rel="stylesheet" href="assets/store/css/app.css?v=1.1.36"/>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_783249_ntmyr6v6yoo.css">
    <script src="assets/common/js/jquery.min.js"></script>
    <script src="//at.alicdn.com/t/font_783249_e5yrsf08rap.js"></script>
    <script>
        BASE_URL = 'https://demo.yiovo.com/';
        STORE_URL = 'index.php?s=/store';
    </script>
</head>

<body data-type="">
<div class="am-g tpl-g">
    <!-- 头部 -->
    <header class="tpl-header">
        <!-- 右侧内容 -->
        <div class="tpl-header-fluid">
            <!-- 侧边切换 -->
            <div class="am-fl tpl-header-button switch-button">
                <i class="iconfont icon-menufold"></i>
            </div>
            <!-- 刷新页面 -->
            <div class="am-fl tpl-header-button refresh-button">
                <i class="iconfont icon-refresh"></i>
            </div>
            <!-- 其它功能-->
            <div class="am-fr tpl-header-navbar">
                <ul>
                    <!-- 商业版介绍 -->
                    <li class="am-text-sm tpl-header-navbar-welcome">
                        <a href="index.php?s=/pro" style="font-size: 1.3rem; color: #166bef">商业版介绍
                        </a>
                    </li>
                    <!-- 欢迎语 -->
                    <li class="am-text-sm tpl-header-navbar-welcome">
                        <a href="index.php?s=/store/store.user/renew">欢迎你，<span>admin</span>
                        </a>
                    </li>
                    <!-- 退出 -->
                    <li class="am-text-sm">
                        <a href="javascript:void(0);">
                            <i class="iconfont icon-tuichu"></i> 退出
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <!-- 侧边导航栏 -->
    <div class="left-sidebar dis-flex">
                <!-- 一级菜单 -->
        <ul class="sidebar-nav">
            <li class="sidebar-nav-heading">萤火小程序商城</li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/index/index"
                       class="">
                                                    <i class="iconfont sidebar-nav-link-logo icon-home"
                               style=""></i>
                                                首页                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/store.user/index"
                       class="">
                                                    <i class="iconfont sidebar-nav-link-logo icon-guanliyuan"
                               style=""></i>
                                                管理员                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/goods/index"
                       class="">
                                                    <i class="iconfont sidebar-nav-link-logo icon-goods"
                               style=""></i>
                                                商品管理                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/order/all_list"
                       class="">
                                                    <i class="iconfont sidebar-nav-link-logo icon-order"
                               style=""></i>
                                                订单管理                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/user/index"
                       class="">
                                                    <i class="iconfont sidebar-nav-link-logo icon-user"
                               style=""></i>
                                                用户管理                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/shop/index"
                       class="">
                                                    <i class="iconfont sidebar-nav-link-logo icon-shop"
                               style=""></i>
                                                门店管理                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/content.article/index"
                       class="">
                                                    <i class="iconfont sidebar-nav-link-logo icon-wenzhang"
                               style=""></i>
                                                内容管理                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/market.coupon/index"
                       class="">
                                                    <i class="iconfont sidebar-nav-link-logo icon-marketing"
                               style=""></i>
                                                营销管理                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/statistics.data/index"
                       class="">
                                                    <i class="iconfont sidebar-nav-link-logo icon-qushitu"
                               style=""></i>
                                                数据统计                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/wxapp/setting"
                       class="active">
                                                    <i class="iconfont sidebar-nav-link-logo icon-wxapp"
                               style="color:#36b313;"></i>
                                                小程序                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/apps.dealer.apply/index"
                       class="">
                                                    <svg class="icon sidebar-nav-link-logo" aria-hidden="true">
                                <use xlink:href="#icon-application"></use>
                            </svg>
                                                应用中心                    </a>
                </li>
                            <li class="sidebar-nav-link">
                    <a href="index.php?s=/store/setting/store"
                       class="">
                                                    <i class="iconfont sidebar-nav-link-logo icon-setting"
                               style=""></i>
                                                设置                    </a>
                </li>
                    </ul>
        <!-- 子级菜单-->
                    <ul class="left-sidebar-second">
                <li class="sidebar-second-title">小程序</li>
                <li class="sidebar-second-item">
                                                <!-- 二级菜单-->
                            <a href="index.php?s=/store/wxapp/setting"
                               class="">
                                小程序设置                            </a>
                                                    <!-- 三级菜单-->
                            <div class="sidebar-third-item">
                                <a href="javascript:void(0);"
                                   class="sidebar-nav-sub-title active">
                                    <i class="iconfont icon-caret"></i>
                                    页面管理                                </a>
                                <ul class="sidebar-third-nav-sub">
                                                                            <li>
                                            <a class="active"
                                               href="index.php?s=/store/wxapp.page/index">
                                                页面设计</a>
                                        </li>
                                                                            <li>
                                            <a class=""
                                               href="index.php?s=/store/wxapp.page/category">
                                                分类模板</a>
                                        </li>
                                                                            <li>
                                            <a class=""
                                               href="index.php?s=/store/wxapp.page/links">
                                                页面链接</a>
                                        </li>
                                                                    </ul>
                            </div>
                                                    <!-- 二级菜单-->
                            <a href="index.php?s=/store/wxapp.help/index"
                               class="">
                                帮助中心                            </a>
                                        </li>
            </ul>
            </div>

    <!-- 内容区域 start -->
    <div class="tpl-content-wrapper ">
        <link rel="stylesheet" href="assets/common/plugins/umeditor/themes/default/css/umeditor.css">
<link rel="stylesheet" href="assets/store/css/diy.css?v=1.1.36">
<div class="row-content am-cf">
    <div class="widget am-cf">
        <div class="widget-body">
            <!-- diy 工作区 -->
            <div id="app" class="work-diy dis-flex flex-x-between">
                <!-- 工具栏 -->
                <div id="diy-menu" class="diy-menu">
                    <div class="menu-title"><span>组件库</span></div>
                    <div class="navs">
                        <div class="navs-group">
                            <div class="title">媒体组件</div>
                            <div class="navs-components am-cf">
                                <nav class="special" @click="onAddItem('banner')">
                                    <p class="item-icon"><i class="iconfont icon-tupianlunbo"></i></p>
                                    <p>图片轮播</p>
                                </nav>
                                <nav class="special" @click="onAddItem('imageSingle')">
                                    <p class="item-icon"><i class="iconfont icon-tupian1"></i></p>
                                    <p>单图组</p>
                                </nav>
                                <nav class="special" @click="onAddItem('window')">
                                    <p class="item-icon"><i class="iconfont icon-newbilayout"></i></p>
                                    <p>图片橱窗</p>
                                </nav>
                                <nav class="special" @click="onAddItem('video')">
                                    <p class="item-icon"><i class="iconfont icon-shipin7"></i></p>
                                    <p>视频组</p>
                                </nav>
                                <nav class="special" @click="onAddItem('article')">
                                    <p class="item-icon"><i class="iconfont icon-zixun"></i></p>
                                    <p>文章组</p>
                                </nav>
                                <nav class="special" @click="onAddItem('special')">
                                    <p class="item-icon"><i class="iconfont icon-toutiao"></i></p>
                                    <p>头条快报</p>
                                </nav>
                            </div>
                            <div class="title">商城组件</div>
                            <div class="navs-components am-cf">
                                <nav class="special" @click="onAddItem('search')">
                                    <p class="item-icon"><i class="iconfont icon-wxbsousuotuiguang"></i></p>
                                    <p>搜索框</p>
                                </nav>
                                <nav class="special" @click="onAddItem('notice')">
                                    <p class="item-icon"><i class="iconfont icon-gonggao"></i></p>
                                    <p>公告组</p>
                                </nav>
                                <nav class="special" @click="onAddItem('navBar')">
                                    <p class="item-icon"><i class="iconfont icon-daohang"></i></p>
                                    <p>导航组</p>
                                </nav>
                                <nav class="special" @click="onAddItem('goods')">
                                    <p class="item-icon"><i class="iconfont icon-shangpin5"></i></p>
                                    <p>商品组</p>
                                </nav>
                                <nav class="special" @click="onAddItem('coupon')">
                                    <p class="item-icon"><i class="iconfont icon-youhuiquan2"></i></p>
                                    <p>优惠券组</p>
                                </nav>
                                <nav class="special" @click="onAddItem('sharingGoods')">
                                    <p class="item-icon"><i class="iconfont icon-shangpin5"></i></p>
                                    <p>拼团商品</p>
                                </nav>
                                <nav class="special" @click="onAddItem('bargainGoods')">
                                    <p class="item-icon"><i class="iconfont icon-kanjia"></i></p>
                                    <p>砍价商品</p>
                                </nav>
                                <nav class="special" @click="onAddItem('sharpGoods')">
                                    <p class="item-icon"><i class="iconfont icon-miaosha"></i></p>
                                    <p>秒杀商品</p>
                                </nav>
                                <nav class="special" @click="onAddItem('shop')">
                                    <p class="item-icon"><i class="iconfont icon-mendian"></i></p>
                                    <p>线下门店</p>
                                </nav>
                            </div>
                            <div class="title">工具组件</div>
                            <div class="navs-components am-cf">
                                <nav class="special" @click="onAddItem('service')">
                                    <p class="item-icon"><i class="iconfont icon-kefu"></i></p>
                                    <p>在线客服</p>
                                </nav>
                                <nav class="special" @click="onAddItem('richText')">
                                    <p class="item-icon"><i class="iconfont icon-wenbenbianji"></i></p>
                                    <p>富文本</p>
                                </nav>
                                <nav class="special" @click="onAddItem('blank')">
                                    <p class="item-icon"><i class="iconfont icon-kongbai"></i></p>
                                    <p>辅助空白</p>
                                </nav>
                                <nav class="special" @click="onAddItem('guide')">
                                    <p class="item-icon"><i class="iconfont icon-fengexian1"></i></p>
                                    <p>辅助线</p>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="action">
                        <button @click.stop="onSubmit" type="button" class="am-btn am-btn-xs am-btn-secondary">
                            保存页面
                        </button>
                    </div>
                </div>

                <!--手机diy容器-->
                <div class="diy-phone" v-cloak>
                    <!-- 手机顶部标题 -->
                    <div id="diy-page" class="phone-top optional" @click.stop="onEditer('page')"
                         :class="{selected: 'page' === selectedIndex}"
                         :style="{background: diyData.page.style.titleBackgroundColor + ' url(assets/store/img/diy/phone-top-' + diyData.page.style.titleTextColor + '.png) no-repeat center / contain'}">
                        <h4 :style="{color: diyData.page.style.titleTextColor}">{{ diyData.page.params.title }}</h4>
                    </div>
                    <!-- 小程序内容区域 -->
                    <div id="phone-main" class="phone-main" v-cloak>
                        <draggable :list="diyData.items" class="dragArea" @update="onDragItemEnd"
                                   :options="{animation: 120, filter: '.drag__nomove' }">
                            <template v-for="(item, index) in diyData.items">

                                <!-- diy元素: 图片轮播 -->
                                <template v-if="item.type == 'banner'">
                                    <div class="drag optional" @click.stop="onEditer(index)"
                                         :class="{selected: index === selectedIndex}">
                                        <div class="diy-banner">
                                            <img v-for="(banner, index) in item.data" v-if="index <= 1"
                                                 :src="banner.imgUrl">
                                            <div class="dots center" :class="item.style.btnShape">
                                                    <span v-for="banner in item.data"
                                                          :style="{background:item.style.btnColor}"></span>
                                            </div>
                                        </div>
                                        <div class="btn-edit-del">
                                            <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 单图组 -->
                                <template v-else-if="item.type == 'imageSingle'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-imageSingle"
                                                 :style="{ paddingBottom: item.style.paddingTop + 'px', background: item.style.background}">
                                                <div class="item-image" v-for="imageSingle in item.data"
                                                     :style="{padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px 0'}">
                                                    <img :src="imageSingle.imgUrl">
                                                </div>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 图片橱窗 -->
                                <template v-else-if="item.type == 'window'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-window"
                                                 :style="{ background: item.style.background, padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
                                                <ul class="data-list" v-if="item.style.layout > -1"
                                                    :class="'am-avg-sm-' + item.style.layout">
                                                    <li v-for="window in item.data"
                                                        :style="{ padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
                                                        <div class="item-image">
                                                            <img :src="window.imgUrl">
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div class="display" v-else>
                                                    <div class="display-left"
                                                         :style="{ padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
                                                        <img :src="item.data[0].imgUrl">
                                                    </div>
                                                    <div class="display-right">
                                                        <div v-if="item.data.length >= 2" class="display-right1"
                                                             :style="{ padding:item.style.paddingTop+'px '+item.style.paddingLeft +'px' }">
                                                            <img :src="item.data[1].imgUrl">
                                                        </div>
                                                        <div class="display-right2">
                                                            <div v-if="item.data.length >= 3" class="left"
                                                                 :style="{ padding:item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
                                                                <img :src="item.data[2].imgUrl">
                                                            </div>
                                                            <div v-if="item.data.length >= 4" class="right"
                                                                 :style="{ padding:item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
                                                                <img :src="item.data[3].imgUrl">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 视频组 -->
                                <template v-else-if="item.type == 'video'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-video" :style="{padding:item.style.paddingTop + 'px 0'}">
                                                <video :style="{height:item.style.height + 'px'}"
                                                       :src="item.params.videoUrl"
                                                       :poster="item.params.poster"
                                                       :autoplay="item.params.autoplay == 1"
                                                       controls>
                                                    您的浏览器不支持 video 标签
                                                </video>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 文章组 -->
                                <template v-else-if="item.type == 'article'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-article">
                                                <div class="article-item"
                                                     v-for="item in (item.params.source == 'choice' ? item.data : item.defaultData)"
                                                     :class="'show-type__' + item.show_type">
                                                    <!-- 小图模式 -->
                                                    <template v-if="item.show_type == 10">
                                                        <div class="article-item__left flex-box">
                                                            <div class="article-item__title twolist-hidden">
                                                                <span class="f-30 col-3">{{ item.article_title }}</span>
                                                            </div>
                                                            <div class="article-item__footer">
                                                                <span class="article-views">
                                                                    {{ item.views_num }}次浏览
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="article-item__image">
                                                            <img :src="item.image" alt="">
                                                        </div>
                                                    </template>
                                                    <!-- 大图模式 -->
                                                    <template v-if="item.show_type == 20">
                                                        <div class="article-item__title">
                                                            <span class="f-30 col-3">{{ item.article_title }}</span>
                                                        </div>
                                                        <div class="article-item__image">
                                                            <img :src="item.image">
                                                        </div>
                                                        <div class="article-item__footer">
                                                            <span class="article-views">
                                                                {{ item.views_num }}次浏览
                                                            </span>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 头条快报 -->
                                <template v-else-if="item.type == 'special'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-special dis-flex flex-y-center">
                                                <div class="special-left">
                                                    <img :src="item.style.image" alt="">
                                                </div>
                                                <div class="special-content flex-box"
                                                     :class="'display_' + item.style.display">
                                                    <ul class="special-content-list">
                                                        <li class="content-item am-text-truncate"
                                                            v-for="item in (item.params.source == 'choice' ? item.data : item.defaultData)">
                                                            <span>{{ item.article_title }}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="special-more">
                                                    <i class="iconfont icon-xiangyoujiantou"></i>
                                                </div>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 搜索栏 -->
                                <template v-else-if="item.type == 'search'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-search">
                                                <div class="inner"
                                                     :class="item.style.searchStyle">
                                                    <div class="search-input"
                                                         :style="{textAlign: item.style.textAlign}">
                                                        <i class="search-icon iconfont icon-ss-search"></i>
                                                        <span>{{item.params.placeholder}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 公告组 -->
                                <template v-else-if="item.type == 'notice'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-notice dis-flex"
                                                 :style="{padding: item.style.paddingTop + 'px' + ' 10px', background: item.style.background}">
                                                <div class="notice__icon">
                                                    <img :src="item.params.icon">
                                                </div>
                                                <div class="notice__text flex-box am-text-truncate">
                                                    <span :style="{color: item.style.textColor}">{{item.params.text}}</span>
                                                </div>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 导航组 -->
                                <template v-else-if="item.type == 'navBar'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-navBar" :style="{background:item.style.background}">
                                                <ul class=""
                                                    :class="item.style.rowsNum === '4'?'am-avg-sm-4':(item.style.rowsNum ==='3'?'am-avg-sm-3':'am-avg-sm-5')">
                                                    <li class="" v-for="(navBar,index) in item.data">
                                                        <div class="item-image">
                                                            <img :src="navBar.imgUrl">
                                                        </div>
                                                        <p class="item-text am-text-truncate"
                                                           :style="{color:navBar.color}">
                                                            {{navBar.text}}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 商品组 -->
                                <template v-else-if="item.type == 'goods'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected: index === selectedIndex}">
                                            <div class="diy-goods" :style="{background:item.style.background}">
                                                <ul class="goods-list am-cf"
                                                    :class="['display__' + item.style.display, 'column__' + item.style.column]">


                                                    <li class="goods-item"
                                                        v-for="goods in (item.params.source == 'choice' ? item.data : item.defaultData)">

                                                        <!-- 单列商品 -->
                                                        <template v-if="item.style.column == 1">
                                                            <div class="dis-flex">
                                                                <!-- 商品图片 -->
                                                                <div class="goods-item_left">
                                                                    <img :src="goods.image">
                                                                </div>
                                                                <div class="goods-item_right">
                                                                    <!-- 商品名称 -->
                                                                    <div v-if="item.style.show.goodsName"
                                                                         class="goods-item_title twolist-hidden">
                                                                        <span>{{ goods.goods_name }}</span>
                                                                    </div>
                                                                    <div class="goods-item_desc">
                                                                        <!-- 商品卖点 -->
                                                                        <div v-if="item.style.show.sellingPoint"
                                                                             class="desc-selling_point am-text-truncate">
                                                                            <span>{{ goods.selling_point }}</span>
                                                                        </div>
                                                                        <!-- 商品销量 -->
                                                                        <div v-if="item.style.show.goodsSales"
                                                                             class="desc-goods_sales am-text-truncate">
                                                                            <span>已售{{ goods.goods_sales }}件</span>
                                                                        </div>
                                                                        <!-- 商品价格 -->
                                                                        <div class="desc_footer">
                                                                            <span v-if="item.style.show.goodsPrice"
                                                                                  class="price_x">¥{{ goods.goods_price }}</span>
                                                                            <span class="price_y x-color-999"
                                                                                  v-if="item.style.show.linePrice && goods.line_price > 0">¥{{ goods.line_price }}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </template>

                                                        <!-- 两列三列 -->
                                                        <template v-else>
                                                            <div class="goods-image">
                                                                <img :src="goods.image">
                                                            </div>
                                                            <div class="detail">
                                                                <p v-if="item.style.show.goodsName"
                                                                   class="goods-name twolist-hidden">
                                                                    {{goods.goods_name}}
                                                                </p>
                                                                <p class="detail-price">
                                                                  <span v-if="item.style.show.goodsPrice"
                                                                        class="goods-price x-color-red">{{ goods.goods_price }}</span>
                                                                    <span v-if="item.style.show.linePrice && goods.line_price > 0"
                                                                          class="line-price">{{ goods.line_price }}</span>
                                                                </p>
                                                            </div>
                                                        </template>

                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 优惠券组 -->
                                <template v-else-if="item.type == 'coupon'">
                                    <div @click.stop="onEditer(index)"
                                         class="drag optional" :class="{selected: index === selectedIndex}">
                                        <div class="diy-coupon dis-flex flex-x-around"
                                             :style="{background:item.style.background,padding: item.style.paddingTop+'px '+' 0'}">
                                            <div v-for="coupon in item.data" class="coupon-wrapper">
                                                <div class="coupon-item" :style="{background:coupon.color}">
                                                    <i class="before" :style="{background:item.style.background}"></i>
                                                    <div :style="{background:coupon.color}"
                                                         class="left-content dis-flex flex-dir-column flex-x-center flex-y-center">
                                                        <div class="content-top">
                                                            <span class="unit">￥</span>
                                                            <span class="price">{{ coupon.reduce_price }}</span>
                                                        </div>
                                                        <div class="content-bottom">
                                                            <span>满{{ coupon.min_price }}元可用</span>
                                                        </div>
                                                    </div>
                                                    <div class="right-receive dis-flex flex-dir-column flex-x-center flex-y-center">
                                                        <span>立即</span>
                                                        <span>领取</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="btn-edit-del">
                                            <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 拼团商品组 -->
                                <template v-else-if="item.type == 'sharingGoods'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-sharingGoods" :style="{background: item.style.background }">
                                                <div class="goods-item dis-flex" v-for="(goods, index) in item.data">
                                                    <!-- 商品图片 -->
                                                    <div class="goods-item_left">
                                                        <img :src="goods.image">
                                                    </div>
                                                    <div class="goods-item_right">
                                                        <!-- 商品名称 -->
                                                        <div v-if="item.style.show.goodsName"
                                                             class="goods-item_title twolist-hidden">
                                                            <span>{{ goods.goods_name }}</span>
                                                        </div>
                                                        <div class="goods-item_desc">
                                                            <!-- 商品卖点 -->
                                                            <div v-if="item.style.show.sellingPoint"
                                                                 class="desc-selling_point am-text-truncate">
                                                                <span>{{ goods.selling_point }}</span>
                                                            </div>
                                                            <!-- 拼团信息 -->
                                                            <div class="desc-situation">
                                                                <span class="iconfont icon-pintuan_huaban"></span>
                                                                <span class="people">2人团</span>
                                                                <span class="x-color-999">已有43人进行拼团</span>
                                                            </div>
                                                            <!-- 商品价格 -->
                                                            <div class="desc_footer">
                                                                <span class="price_x"
                                                                      v-if="item.style.show.sharingPrice">¥{{ goods.sharing_price }}</span>
                                                                <span class="price_y x-color-999"
                                                                      v-if="item.style.show.linePrice && goods.line_price > 0">¥{{ goods.line_price }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="btn-settlement">去拼团</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 砍价商品组 -->
                                <template v-else-if="item.type == 'bargainGoods'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-bargainGoods" :style="{background: item.style.background }">
                                                <div class="goods-item dis-flex" v-for="(goods, index) in item.data">
                                                    <!-- 商品图片 -->
                                                    <div class="goods-image">
                                                        <img :src="goods.goods_image">
                                                    </div>
                                                    <div class="goods-info">
                                                        <!-- 商品名称 -->
                                                        <div v-if="item.style.show.goodsName" class="goods-name">
                                                            <span class="twolist-hidden">{{ goods.goods_name }}</span>
                                                        </div>
                                                        <!-- 参与的用户头像 -->
                                                        <div v-if="item.style.show.peoples"
                                                             class="peoples dis-flex">
                                                            <div class="user-list dis-flex">
                                                                <div v-for="help in item.demo.helps"
                                                                     class="user-item-avatar">
                                                                    <img :src="help.avatarUrl">
                                                                </div>
                                                            </div>
                                                            <div class="people__text">
                                                                <span>{{ item.demo.helps_count }}人正在砍价</span>
                                                            </div>
                                                        </div>
                                                        <!-- 商品原价 -->
                                                        <div v-if="item.style.show.originalPrice" class="goods-price">
                                                            <span>￥{{ goods.original_price }}</span>
                                                        </div>
                                                        <!-- 砍价低价 -->
                                                        <div v-if="item.style.show.floorPrice" class="floor-price">
                                                            <span class="small">最低￥</span><span class="big">{{ goods.floor_price }}</span>
                                                        </div>
                                                        <!-- 操作按钮 -->
                                                        <div class="opt-touch">
                                                            <div class="touch-btn">
                                                                <span>立即参加</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 秒杀商品组 -->
                                <template v-else-if="item.type == 'sharpGoods'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected: index === selectedIndex}">
                                            <div class="diy-sharpGoods" :style="{background:item.style.background}">
                                                <div class="sharp-top dis-flex flex-y-center">
                                                    <div class="sharp-top--left flex-box dis-flex flex-y-center">
                                                        <div class="sharp-modular dis-flex flex-y-center">
                                                            <i class="iconfont icon-miaosha-b"></i>
                                                            <span class="modular-name">限时秒杀</span>
                                                        </div>
                                                        <div class="sharp-active-status">
                                                            <span>正在疯抢</span>
                                                        </div>
                                                        <div class="active-count-down">
                                                            <div class="clock dis-flex">
                                                                <div class="clock-time">
                                                                    <span>00</span>
                                                                </div>
                                                                <div class="clock-symbol">
                                                                    <span>:</span>
                                                                </div>
                                                                <div class="clock-time">
                                                                    <span>58</span>
                                                                </div>
                                                                <div class="clock-symbol">
                                                                    <span>:</span>
                                                                </div>
                                                                <div class="clock-time">
                                                                    <span>04</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="sharp-top--right">
                                                        <div class="sharp-more dis-flex flex-y-center">
                                                            <span class="sharp-more-text">更多</span>
                                                            <span class="sharp-more-arrow">
                                                                <i class="iconfont icon-xiangyoujiantou"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="goods-list">
                                                    <ul class="goods-list display__list am-cf"
                                                        :class="['column__' + item.style.column]">
                                                        <li class="goods-item"
                                                            v-for="goods in item.data">
                                                            <!-- 单列商品 -->
                                                            <template v-if="item.style.column == 1">
                                                            </template>
                                                            <!-- 两列三列 -->
                                                            <template v-else>
                                                                <div class="goods-image">
                                                                    <img :src="goods.goods_image">
                                                                </div>
                                                                <div class="detail">
                                                                    <p v-if="item.style.show.goodsName"
                                                                       class="goods-name twolist-hidden">
                                                                        {{goods.goods_name}}
                                                                    </p>
                                                                    <p class="detail-price">
                                                                  <span v-if="item.style.show.seckillPrice"
                                                                        class="goods-price x-color-red">{{ goods.seckill_price }}</span>
                                                                        <span v-if="item.style.show.originalPrice && goods.original_price > 0"
                                                                              class="line-price">{{ goods.original_price }}</span>
                                                                    </p>
                                                                </div>
                                                            </template>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 线下门店 -->
                                <template v-else-if="item.type == 'shop'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-shop">
                                                <div class="shop-item dis-flex flex-y-center"
                                                     v-for="(shop, index) in (item.params.source == 'choice' ? item.data : item.defaultData)">
                                                    <div class="shop-item__logo">
                                                        <img :src="shop.logo_image" alt="门店logo">
                                                    </div>
                                                    <div class="shop-item__content flex-box">
                                                        <div class="shop-item__title">
                                                            <span>{{ shop.shop_name }}</span>
                                                        </div>
                                                        <div class="shop-item__address am-text-truncate">
                                                            <span>门店地址：{{ shop.region.province }}{{ shop.region.city }}{{ shop.region.region }}{{ shop.address }}</span>
                                                        </div>
                                                        <div class="shop-item__phone">
                                                            <span>联系电话：{{ shop.phone }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 辅助空白 -->
                                <template v-else-if="item.type == 'blank'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected:index === selectedIndex}">
                                            <div class="diy-blank"
                                                 :style="{height: item.style.height +'px', background:item.style.background }">
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 辅助线 -->
                                <template v-else-if="item.type == 'guide'">
                                    <div @click.stop="onEditer(index)"
                                         class="drag optional" :class="{selected: index === selectedIndex}">
                                        <div class="diy-guide"
                                             :style="{padding: item.style.paddingTop +'px '+'0', background:item.style.background }">
                                            <p class="line"
                                               :style="{borderTopWidth: item.style.lineHeight +'px',borderTopColor:item.style.lineColor,borderTopStyle: item.style.lineStyle }">
                                            </p>
                                        </div>
                                        <div class="btn-edit-del">
                                            <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 在线客服 -->
                                <template v-else-if="item.type == 'service'">
                                    <div class="diy-service drag optional drag__nomove" @click.stop="onEditer(index)"
                                         :class="{selected: index === selectedIndex}"
                                         :style="{ right: item.style.right + '%', bottom: item.style.bottom + '%', opacity: item.style.opacity / 100 }">
                                        <div class="service-icon">
                                            <img :src="item.params.image" alt="">
                                        </div>
                                        <div class="btn-edit-del">
                                            <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                        </div>
                                    </div>
                                </template>

                                <!-- diy元素: 富文本 -->
                                <template v-else-if="item.type == 'richText'">
                                    <div @click.stop="onEditer(index)">
                                        <div class="drag optional" :class="{selected: index === selectedIndex}">
                                            <div class="diy-richText"
                                                 :style="{background: item.style.background, padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px'}"
                                                 v-html="item.params.content">
                                            </div>
                                            <div class="btn-edit-del">
                                                <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                            </template>
                        </draggable>
                    </div>
                </div>

                <!-- 编辑器容器 -->
                <div id="diy-editor" ref="diy-editor" class="diy-editor form-horizontal"
                     :style="{ visibility: selectedIndex != -1 ? 'visible' : 'hidden' } " v-cloak>

                    <!-- 编辑器: 标题栏 -->
                    <div id="tpl_editor_page" v-if="selectedIndex === 'page'">
                        <div class="editor-title"><span>{{ diyData.page.name }}</span></div>
                        <form class="am-form tpl-form-line-form">
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label am-text-xs">页面名称 </label>
                                <div class="am-u-sm-8 am-u-end">
                                    <input class="tpl-form-input" type="text"
                                           v-model="diyData.page.params.name">
                                    <div class="help-block am-margin-top-xs">
                                        <small>页面名称仅用于后台查找</small>
                                    </div>
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label am-text-xs">页面标题 </label>
                                <div class="am-u-sm-8 am-u-end">
                                    <input class="tpl-form-input" type="text"
                                           v-model="diyData.page.params.title">
                                    <div class="help-block am-margin-top-xs">
                                        <small>小程序端顶部显示的标题</small>
                                    </div>
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label am-text-xs">分享标题 </label>
                                <div class="am-u-sm-8 am-u-end">
                                    <input class="tpl-form-input" type="text"
                                           v-model="diyData.page.params.share_title">
                                    <div class="help-block am-margin-top-xs">
                                        <small>小程序端转发时显示的标题</small>
                                    </div>
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label am-text-xs">标题栏文字 </label>
                                <div class="am-u-sm-8 am-u-end">
                                    <label class="am-radio-inline">
                                        <input type="radio" value="black"
                                               v-model="diyData.page.style.titleTextColor">
                                        黑色
                                    </label>
                                    <label class="am-radio-inline">
                                        <input type="radio" value="white"
                                               v-model="diyData.page.style.titleTextColor">
                                        白色
                                    </label>
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label class="am-u-sm-3 am-form-label am-text-xs">标题栏背景 </label>
                                <div class="am-u-sm-8 am-u-end">
                                    <input class="" type="color"
                                           v-model="diyData.page.style.titleBackgroundColor">
                                    <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                            @click.stop="onEditorResetColor(diyData.page.style, 'titleBackgroundColor', '#ffffff')">
                                        重置
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <template v-if="diyData.items.length && curItem">

                        <!--编辑器: 在线客服-->
                        <div id="tpl_editor_service" v-if="curItem.type == 'service'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs"> 底边距 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.bottom" min="0" max="100">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.bottom }}</span>%
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs"> 右边距 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.right" min="0" max="100">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.right }}</span>%
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs"> 不透明度 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.opacity" min="0" max="100">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.opacity }}</span>%
                                        </div>
                                    </div>
                                </div>
                                <hr data-am-widget="divider" class="am-divider am-divider-dashed">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs"> 客服类型 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="chat"
                                                   v-model="curItem.params.type"> 在线聊天
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="phone"
                                                   v-model="curItem.params.type"> 拨打电话
                                        </label>
                                    </div>
                                </div>
                                <div class="am-form-group" v-show="curItem.params.type == 'phone'">
                                    <label class="am-u-sm-3 am-form-label am-text-xs"> 电话号码 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input type="text" class="tpl-form-input" placeholder="请输入电话号码"
                                               v-model="curItem.params.phone_num">
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs"> 客服图标 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <div class="data-image">
                                            <img :src="curItem.params.image"
                                                 style="height: 45px;" title="点击更换图片" alt=""
                                                 @click="onEditorSelectImage(curItem.params, 'image')">
                                        </div>
                                        <div class="help-block">
                                            <small>建议尺寸：90×90</small>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- 编辑器: 图片轮播 -->
                        <div id="tpl_editor_banner" v-if="curItem.type == 'banner'">
                            <div class="editor-title"><span>{{curItem.name}}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">指示点形状 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="round"
                                                   v-model="curItem.style.btnShape"> 圆形
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="square"
                                                   v-model="curItem.style.btnShape"> 正方形
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="rectangle"
                                                   v-model="curItem.style.btnShape"> 长方形
                                        </label>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">指示点颜色 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.btnColor">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'btnColor', '#ffffff')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs"> 切换时间 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="number"
                                               v-model="curItem.params.interval">
                                        <div class="help-block">
                                            <small>轮播图自动切换的间隔时间，单位：毫秒</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-items">
                                    <draggable :list="curItem.data"
                                               :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
                                        <div class="form-item"
                                             v-for="(banner, index) in curItem.data">
                                            <i class="iconfont icon-shanchu item-delete"
                                               @click="onEditorDeleleData(index, selectedIndex)"></i>
                                            <div class="item-inner">
                                                <div class="am-form-group">
                                                    <label class="am-u-sm-3 am-form-label am-text-xs">图片 </label>
                                                    <div class="am-u-sm-8 am-u-end">
                                                        <div class="data-image">
                                                            <img :src="banner.imgUrl" alt=""
                                                                 @click="onEditorSelectImage(banner, 'imgUrl')">
                                                        </div>
                                                        <div class="help-block">
                                                            <small>建议尺寸750x360</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="am-form-group">
                                                    <label class="am-u-sm-3 am-form-label am-text-xs">链接地址 </label>
                                                    <div class="am-u-sm-8 am-u-end">
                                                        <input type="text" value=""
                                                               v-model='banner.linkUrl'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                                <div class="j-data-add form-item-add" @click="onEditorAddData">
                                    <i class="fa fa-plus"></i> 添加一个
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 单图组-->
                        <div id="tpl_editor_imageSingle" v-if="curItem.type == 'imageSingle'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">上下边距 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.paddingTop" min="0" max="50">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.paddingTop }}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">左右边距 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.paddingLeft" min="0"
                                               max="50">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.paddingLeft }}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#ffffff')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="form-items">
                                    <draggable :list="curItem.data"
                                               :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
                                        <div class="form-item drag" v-for="(imageSingle, index) in curItem.data">
                                            <i class="iconfont icon-shanchu item-delete"
                                               @click="onEditorDeleleData(index,selectedIndex)"></i>
                                            <div class="item-inner">
                                                <div class="am-form-group">
                                                    <label class="am-u-sm-3 am-form-label am-text-xs">图片 </label>
                                                    <div class="am-u-sm-8 am-u-end">
                                                        <div class="data-image">
                                                            <img :src="imageSingle.imgUrl" alt=""
                                                                 @click="onEditorSelectImage(imageSingle, 'imgUrl')">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="am-form-group">
                                                    <label class="am-u-sm-3 am-form-label am-text-xs">链接地址 </label>
                                                    <div class="am-u-sm-8 am-u-end">
                                                        <input type="text" value="" v-model='imageSingle.linkUrl'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                                <div class="j-data-add form-item-add" @click="onEditorAddData">
                                    <i class="fa fa-plus"></i> 添加一个
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 图片橱窗-->
                        <div id="tpl_editor_window" v-if="curItem.type == 'window'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">上下边距 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.paddingTop" min="0" max="50">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.paddingTop }}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">左右边距 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.paddingLeft" min="0"
                                               max="50">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.paddingLeft }}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#ffffff')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">布局方式 </label>
                                    <div class="j-switch-help am-u-sm-8 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="2"
                                                   v-model="curItem.style.layout"> 堆积两列
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="3"
                                                   v-model="curItem.style.layout"> 堆积三列
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="4"
                                                   v-model="curItem.style.layout"> 堆积四列
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="-1"
                                                   v-model="curItem.style.layout"> 橱窗样式
                                            <small class="help am-hide">
                                                最多显示四张图片，超出隐藏
                                            </small>
                                        </label>
                                        <div class="help-block am-margin-top-xs" data-default="请确保所有图片的尺寸/比例相同。">
                                            <small>请确保所有图片的尺寸/比例相同。</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-items">
                                    <draggable :list="curItem.data"
                                               :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
                                        <div class="form-item drag" v-for="(item, index) in curItem.data">
                                            <i class="iconfont icon-shanchu item-delete"
                                               @click="onEditorDeleleData(index,selectedIndex)">
                                            </i>
                                            <div class="item-inner">
                                                <div class="am-form-group">
                                                    <label class="am-u-sm-3 am-form-label am-text-xs">图片 </label>
                                                    <div class="am-u-sm-8 am-u-end">
                                                        <div class="data-image">
                                                            <img :src="item.imgUrl" alt=""
                                                                 @click="onEditorSelectImage(item, 'imgUrl')">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="am-form-group">
                                                    <label class="am-u-sm-3 am-form-label am-text-xs">链接地址 </label>
                                                    <div class="am-u-sm-8 am-u-end">
                                                        <input type="text" v-model="item.linkUrl">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                                <div class="j-data-add form-item-add" @click="onEditorAddData">
                                    <i class="fa fa-plus"></i> 添加一个
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 视频组-->
                        <div id="tpl_editor_video" v-if="curItem.type == 'video'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">上下边距 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.paddingTop" min="0" max="50">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.paddingTop }}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">视频高度 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.height" min="50" max="500">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.height }}</span>px
                                            (像素)
                                        </div>
                                        <div class="help-block am-margin-top-xs">
                                            <small>滑块可用左右方向键精确调整</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group am-padding-top">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">视频封面 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <div class="data-image">
                                            <img :src="curItem.params.poster" alt=""
                                                 @click="onEditorSelectImage(curItem.params, 'poster')">
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">视频地址 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="tpl-form-input" type="url"
                                               v-model="curItem.params.videoUrl">
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">自动播放 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="0"
                                                   v-model="curItem.params.autoplay"> 否
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="1"
                                                   v-model="curItem.params.autoplay"> 是
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 文章组-->
                        <div id="tpl_editor_article" v-if="curItem.type == 'article'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">文章分类 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <select v-model="curItem.params.auto.category"
                                                data-am-selected="{btnSize: 'sm',  placeholder:'全部分类', maxHeight: 400}">
                                            <option value="0"> -- 全部分类 --</option>
                                            <template v-for="item in opts.articleCatgory">
                                                <option :value="item.category_id"> {{ item.name }}</option>
                                            </template>
                                        </select>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">显示数量 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="number" min="1"
                                               v-model="curItem.params.auto.showNum">
                                        <div class="help-block am-padding-top-xs">
                                            <small>文章数据请到 <a href="index.php?s=/store/content.article/index" target="_blank">内容管理
                                                    - 文章列表</a>
                                                中管理
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- 编辑器: 头条快报 -->
                        <div id="tpl_editor_special" v-if="curItem.type == 'special'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">文章分类 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <select v-model="curItem.params.auto.category"
                                                data-am-selected="{btnSize: 'sm',  placeholder:'全部分类', maxHeight: 400}">
                                            <option value="0"> -- 全部分类 --</option>
                                            <template v-for="item in opts.articleCatgory">
                                                <option :value="item.category_id"> {{ item.name }}</option>
                                            </template>
                                        </select>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">显示数量 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="number" min="1"
                                               v-model="curItem.params.auto.showNum">
                                        <div class="help-block am-padding-top-xs">
                                            <small>文章数据请到 <a href="index.php?s=/store/content.article/index" target="_blank">内容管理
                                                    - 文章列表</a>
                                                中管理
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <hr data-am-widget="divider" class="am-divider am-divider-dashed">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs form-require">图片 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <div class="data-image">
                                            <img :src="curItem.style.image" style="height: 38px;" alt=""
                                                 @click="onEditorSelectImage(curItem.style, 'image')">
                                        </div>
                                        <div class="help-block am-padding-top-xs">
                                            <small>建议尺寸140×38</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs form-require"> 显示类型 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="1" v-model="curItem.style.display">
                                            单行
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="2" v-model="curItem.style.display">
                                            两行 </label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 搜索栏-->
                        <div id="tpl_editor_search" v-if="curItem.type == 'search'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">提示文字 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="tpl-form-input" type="text"
                                               v-model="curItem.params.placeholder">
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">搜索框样式 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="square"
                                                   v-model="curItem.style.searchStyle"> 方形
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="radius"
                                                   v-model="curItem.style.searchStyle"> 圆角
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="round"
                                                   v-model="curItem.style.searchStyle"> 圆弧
                                        </label>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">文字对齐 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="left"
                                                   v-model="curItem.style.textAlign">
                                            居左
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="center"
                                                   v-model="curItem.style.textAlign">
                                            居中
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="right"
                                                   v-model="curItem.style.textAlign">
                                            居右
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 公告组-->
                        <div id="tpl_editor_notice" v-if="curItem.type == 'notice'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">上下边距 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.paddingTop" min="0" max="50">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.paddingTop }}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#ffffff')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">文字颜色 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.textColor">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'textColor', '#000000')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">公告图标 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <div class="data-image">
                                            <img :src="curItem.params.icon"
                                                 @click="onEditorSelectImage(curItem.params, 'icon')"
                                                 style="height: 30px;" alt="">
                                        </div>
                                        <div class="help-block">
                                            <small>建议尺寸：32×32</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">公告内容</label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="tpl-form-input" type="text"
                                               v-model="curItem.params.text">
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 导航组-->
                        <div id="tpl_editor_navBar" v-if="curItem.type == 'navBar'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-4 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#ffffff')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-4 am-form-label am-text-xs">每行数量 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="3"
                                                   v-model="curItem.style.rowsNum"> 3个
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="4"
                                                   v-model="curItem.style.rowsNum"> 4个
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="5"
                                                   v-model="curItem.style.rowsNum"> 5个
                                        </label>
                                    </div>
                                </div>
                                <div class="form-items">
                                    <draggable :list="curItem.data"
                                               :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
                                        <div class="form-item drag" v-for="(navBar, index) in curItem.data">
                                            <i class="iconfont icon-shanchu item-delete"
                                               @click="onEditorDeleleData(index, selectedIndex)"></i>
                                            <div class="item-inner">
                                                <div class="am-form-group">
                                                    <label class="am-u-sm-3 am-form-label am-text-xs">图片 </label>
                                                    <div class="am-u-sm-8 am-u-end">
                                                        <div class="data-image">
                                                            <img :src="navBar.imgUrl" alt=""
                                                                 @click="onEditorSelectImage(navBar, 'imgUrl')">
                                                        </div>
                                                        <div class="help-block">
                                                            <small>建议尺寸100x100</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="am-form-group">
                                                    <label class="am-u-sm-3 am-form-label am-text-xs">文字内容 </label>
                                                    <div class="am-u-sm-8 am-u-end">
                                                        <input type="text" v-model="navBar.text">
                                                    </div>
                                                </div>
                                                <div class="am-form-group">
                                                    <label class="am-u-sm-3 am-form-label am-text-xs">文字颜色 </label>
                                                    <div class="am-u-sm-8 am-u-end">
                                                        <input type="color" v-model="navBar.color">
                                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                                @click.stop="onEditorResetColor(navBar, 'color', '#666666')">
                                                            重置
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="am-form-group">
                                                    <label class="am-u-sm-3 am-form-label am-text-xs">链接地址 </label>
                                                    <div class="am-u-sm-8 am-u-end">
                                                        <input type="text" v-model="navBar.linkUrl">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                                <div class="j-data-add form-item-add" @click="onEditorAddData">
                                    <i class="fa fa-plus"></i> 添加一个
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 商品组-->
                        <div id="tpl_editor_goods" v-if="curItem.type == 'goods'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <!--商品数据-->
                                <div class="j-switch-box" data-item-class="switch-source">
                                    <div class="am-form-group">
                                        <label class="am-u-sm-3 am-form-label am-text-xs">商品来源 </label>
                                        <div class="am-u-sm-8 am-u-end">
                                            <label class="am-radio-inline">
                                                <input type="radio" value="auto"
                                                       v-model="curItem.params.source"> 自动获取
                                            </label>
                                            <label class="am-radio-inline">
                                                <input type="radio" value="choice"
                                                       v-model="curItem.params.source"> 手动选择
                                            </label>
                                        </div>
                                    </div>
                                    <!--手动选择-->
                                    <div class="switch-source __choice "
                                         v-show="curItem.params.source == 'choice'">
                                        <div class="form-items __goods am-cf">
                                            <draggable :list="curItem.data"
                                                       :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
                                                <div v-for="(goods,index) in curItem.data"
                                                     class="form-item drag">
                                                    <i class="iconfont icon-shanchu item-delete" data-no-confirm="true"
                                                       @click="onEditorDeleleData(index, selectedIndex)"></i>
                                                    <div class="item-inner">
                                                        <div class="data-image">
                                                            <img :src="goods.image" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </draggable>
                                        </div>
                                        <div class="j-selectGoods form-item-add" @click.stop="onSelectGoods(curItem)">
                                            <i class="fa fa-plus"></i> 选择商品
                                        </div>
                                    </div>
                                    <!-- 自动获取 -->
                                    <div class="switch-source"
                                         v-show="curItem.params.source == 'auto'">
                                        <div class="am-form-group">
                                            <label class="am-u-sm-3 am-form-label am-text-xs">商品分类 </label>
                                            <div class="am-u-sm-8 am-u-end">
                                                <select v-model="curItem.params.auto.category"
                                                        data-am-selected="{btnSize: 'sm',  placeholder:'全部分类', maxHeight: 400}">
                                                    <option value="0"> -- 全部分类 --</option>
                                                    <template v-for="first in opts.catgory">
                                                        <option :value="first.category_id"> {{ first.name }}</option>
                                                        <template v-if="first.child">
                                                            <option v-for="two in first.child" :value="two.category_id">
                                                                　{{ two.name }}
                                                            </option>
                                                        </template>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="am-form-group">
                                            <label class="am-u-sm-3 am-form-label am-text-xs"> 商品排序 </label>
                                            <div class="am-u-sm-8 am-u-end">
                                                <label class="am-radio-inline">
                                                    <input type="radio" value="all"
                                                           v-model="curItem.params.auto.goodsSort">
                                                    综合
                                                </label>
                                                <label class="am-radio-inline">
                                                    <input type="radio" value="sales"
                                                           v-model="curItem.params.auto.goodsSort">
                                                    销量 </label>
                                                <label class="am-radio-inline">
                                                    <input type="radio" value="price"
                                                           v-model="curItem.params.auto.goodsSort">
                                                    价格 </label>
                                            </div>
                                        </div>
                                        <div class="am-form-group">
                                            <label class="am-u-sm-3 am-form-label am-text-xs"> 显示数量 </label>
                                            <div class="am-u-sm-8 am-u-end">
                                                <input class="tpl-form-input" type="number" min="1"
                                                       v-model="curItem.params.auto.showNum">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--分割线-->
                                <hr data-am-widget="divider" style="" class="am-divider am-divider-dashed"/>
                                <!--组件样式-->
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#f3f3f3')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">显示类型 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="list"
                                                   v-model="curItem.style.display"> 列表平铺
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="slide"
                                                   v-model="curItem.style.display"
                                                   :disabled="curItem.style.column == 1"> 横向滑动
                                        </label>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">分列数量 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="1"
                                                   v-model="curItem.style.column"
                                                   :disabled="curItem.style.display == 'slide'"> 单列
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="2"
                                                   v-model="curItem.style.column"> 两列
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="3"
                                                   v-model="curItem.style.column"> 三列
                                        </label>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">显示内容 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox"
                                                   v-model="curItem.style.show.goodsName"> 商品名称
                                        </label>
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox"
                                                   v-model="curItem.style.show.goodsPrice"> 商品价格
                                        </label>
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox"
                                                   v-model="curItem.style.show.linePrice"> 划线价格
                                        </label>
                                        <label class="am-checkbox-inline" v-show="curItem.style.column == 1">
                                            <input type="checkbox"
                                                   v-model="curItem.style.show.sellingPoint"> 商品卖点
                                        </label>
                                        <label class="am-checkbox-inline" v-show="curItem.style.column == 1">
                                            <input type="checkbox"
                                                   v-model="curItem.style.show.goodsSales"> 商品销量
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- 编辑器: 优惠券组 -->
                        <div id="tpl_editor_coupon" v-if="curItem.type == 'coupon'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">上下边距 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.paddingTop" min="0" max="50">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.paddingTop }}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input type="color" v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#ffffff')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">显示数量 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.params.limit" min="1" max="5">
                                        <div class="display-value">
                                            最多<span class="value">{{ curItem.params.limit }}</span>个
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- 编辑器: 拼团商品组 -->
                        <div id="tpl_editor_sharingGoods" v-if="curItem.type == 'sharingGoods'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <!--商品数据-->
                                <div class="j-switch-box" data-item-class="switch-source">
                                    <div class="am-form-group">
                                        <label class="am-u-sm-3 am-form-label am-text-xs">商品来源 </label>
                                        <div class="am-u-sm-8 am-u-end">
                                            <label class="am-radio-inline">
                                                <input type="radio" value="auto"
                                                       v-model="curItem.params.source"> 自动获取
                                            </label>
                                            <label class="am-radio-inline">
                                                <input type="radio" value="choice"
                                                       v-model="curItem.params.source"> 手动选择
                                            </label>
                                        </div>
                                    </div>
                                    <!--手动选择-->
                                    <div class="switch-source __choice" v-show="curItem.params.source == 'choice'">
                                        <div class="form-items __goods am-cf">
                                            <draggable :list="curItem.data"
                                                       :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
                                                <div v-for="(goods, index) in curItem.data"
                                                     class="form-item drag">
                                                    <i class="iconfont icon-shanchu item-delete" data-no-confirm="true"
                                                       @click="onEditorDeleleData(index,selectedIndex)"></i>
                                                    <div class="item-inner">
                                                        <div class="data-image">
                                                            <img :src="goods.image" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </draggable>
                                        </div>
                                        <div class="j-selectGoods form-item-add" @click.stop="onSelectGoods(curItem)">
                                            <i class="fa fa-plus"></i> 选择商品
                                        </div>
                                    </div>
                                    <!--自动获取-->
                                    <div class="switch-source __auto" v-show="curItem.params.source !== 'choice'">
                                        <div class="am-form-group">
                                            <label class="am-u-sm-3 am-form-label am-text-xs">商品分类 </label>
                                            <div class="am-u-sm-8 am-u-end">
                                                <select v-model="curItem.params.auto.category"
                                                        data-am-selected="{btnSize: 'sm',  placeholder:'全部分类', maxHeight: 400}">
                                                    <option value="0"> -- 全部分类 --</option>
                                                    <template v-for="first in opts.sharingCatgory">
                                                        <option :value="first.category_id"> {{ first.name }}</option>
                                                        <template v-if="first.child">
                                                            <option v-for="two in first.child" :value="two.category_id">
                                                                　{{ two.name }}
                                                            </option>
                                                        </template>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="am-form-group">
                                            <label class="am-u-sm-3 am-form-label am-text-xs">商品排序 </label>
                                            <div class="am-u-sm-8 am-u-end">
                                                <label class="am-radio-inline">
                                                    <input type="radio" value="all"
                                                           v-model="curItem.params.auto.goodsSort">
                                                    综合
                                                </label>
                                                <label class="am-radio-inline">
                                                    <input type="radio" value="sales"
                                                           v-model="curItem.params.auto.goodsSort">
                                                    销量
                                                </label>
                                                <label class="am-radio-inline">
                                                    <input type="radio" value="price"
                                                           v-model="curItem.params.auto.goodsSort">
                                                    价格
                                                </label>
                                            </div>
                                        </div>
                                        <div class="am-form-group">
                                            <label class="am-u-sm-3 am-form-label am-text-xs">显示数量 </label>
                                            <div class="am-u-sm-8 am-u-end">
                                                <input class="tpl-form-input" type="number" min="1"
                                                       v-model="curItem.params.auto.showNum">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--分割线-->
                                <hr data-am-widget="divider" style="" class="am-divider am-divider-dashed"/>
                                <!--组件样式-->
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#f3f3f3')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">显示内容 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox" value="1"
                                                   v-model="curItem.style.show.sellingPoint"> 商品卖点
                                        </label>
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox" value="1"
                                                   v-model="curItem.style.show.sharingPrice"> 拼团价格
                                        </label>
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox"
                                                   v-model="curItem.style.show.linePrice"> 划线价格
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- 编辑器: 砍价商品组 -->
                        <div id="tpl_editor_bargainGoods" v-if="curItem.type == 'bargainGoods'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <!--商品数据-->
                                <div class="j-switch-box" data-item-class="switch-source">
                                    <div class="am-form-group">
                                        <label class="am-u-sm-3 am-form-label am-text-xs">商品来源 </label>
                                        <div class="am-u-sm-8 am-u-end">
                                            <label class="am-radio-inline">
                                                <input type="radio" value="auto"
                                                       v-model="curItem.params.source"> 自动获取
                                            </label>
                                            <label class="am-radio-inline">
                                                <input type="radio" value="choice"
                                                       v-model="curItem.params.source"> 手动选择
                                            </label>
                                        </div>
                                    </div>
                                    <!--手动选择-->
                                    <div class="switch-source __choice" v-show="curItem.params.source == 'choice'">
                                        <div class="form-items __goods am-cf">
                                            <draggable :list="curItem.data"
                                                       :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
                                                <div v-for="(goods, index) in curItem.data"
                                                     class="form-item drag">
                                                    <i class="iconfont icon-shanchu item-delete" data-no-confirm="true"
                                                       @click="onEditorDeleleData(index,selectedIndex)"></i>
                                                    <div class="item-inner">
                                                        <div class="data-image">
                                                            <img :src="goods.goods_image" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </draggable>
                                        </div>
                                        <div class="j-selectGoods form-item-add" @click.stop="onSelectGoods(curItem)">
                                            <i class="fa fa-plus"></i> 选择商品
                                        </div>
                                    </div>
                                    <!--自动获取-->
                                    <div class="switch-source __auto" v-show="curItem.params.source !== 'choice'">
                                        <div class="am-form-group">
                                            <label class="am-u-sm-3 am-form-label am-text-xs">商品排序 </label>
                                            <div class="am-u-sm-8 am-u-end">
                                                <label class="am-radio-inline">
                                                    <input type="radio" value="all"
                                                           v-model="curItem.params.auto.goodsSort">
                                                    综合
                                                </label>
                                                <label class="am-radio-inline">
                                                    <input type="radio" value="sales"
                                                           v-model="curItem.params.auto.goodsSort">
                                                    销量
                                                </label>
                                                <label class="am-radio-inline">
                                                    <input type="radio" value="price"
                                                           v-model="curItem.params.auto.goodsSort">
                                                    价格
                                                </label>
                                            </div>
                                        </div>
                                        <div class="am-form-group">
                                            <label class="am-u-sm-3 am-form-label am-text-xs">显示数量 </label>
                                            <div class="am-u-sm-8 am-u-end">
                                                <input class="tpl-form-input" type="number" min="1"
                                                       v-model="curItem.params.auto.showNum">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 分割线 -->
                                <hr data-am-widget="divider" style="" class="am-divider am-divider-dashed"/>
                                <!-- 组件样式 -->
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#f3f3f3')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">显示内容 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox" value="1"
                                                   v-model="curItem.style.show.goodsName"> 商品名称
                                        </label>
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox" value="1"
                                                   v-model="curItem.style.show.peoples"> 正在砍价
                                        </label>
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox" value="1"
                                                   v-model="curItem.style.show.floorPrice"> 砍价底价
                                        </label>
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox"
                                                   v-model="curItem.style.show.originalPrice"> 商品原价
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- 编辑器: 秒杀商品组 -->
                        <div id="tpl_editor_sharpGoods" v-if="curItem.type == 'sharpGoods'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <!-- 商品数据 -->
                                <div class="j-switch-box" data-item-class="switch-source">
                                    <!--自动获取-->
                                    <div class="switch-source __auto" v-show="curItem.params.source !== 'choice'">
                                        <div class="am-form-group">
                                            <label class="am-u-sm-3 am-form-label am-text-xs">商品数量 </label>
                                            <div class="am-u-sm-8 am-u-end">
                                                <input class="tpl-form-input" type="number" min="1"
                                                       v-model="curItem.params.showNum">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 分割线 -->
                                <hr data-am-widget="divider" style="" class="am-divider am-divider-dashed"/>
                                <!-- 组件样式 -->
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#ffffff')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">分列数量 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <!--    <label class="am-radio-inline"> -->
                                        <!--        <input type="radio" value="1" -->
                                        <!--               v-model="curItem.style.column" -->
                                        <!--               :disabled="curItem.style.display == 'slide'"> 单列 -->
                                        <!--    </label> -->
                                        <label class="am-radio-inline">
                                            <input type="radio" value="2"
                                                   v-model="curItem.style.column"> 两列
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="3"
                                                   v-model="curItem.style.column"> 三列
                                        </label>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">显示内容 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox" value="1"
                                                   v-model="curItem.style.show.goodsName"> 商品名称
                                        </label>
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox"
                                                   v-model="curItem.style.show.seckillPrice"> 秒杀价格
                                        </label>
                                        <label class="am-checkbox-inline">
                                            <input type="checkbox"
                                                   v-model="curItem.style.show.originalPrice"> 商品原价
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 辅助空白-->
                        <div id="tpl_editor_blank" v-if="curItem.type == 'blank'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-4 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#ffffff')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-4 am-form-label am-text-xs">组件高度 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.height" min="1" max="200">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.height }}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 辅助线-->
                        <div id="tpl_editor_guide" v-if="curItem.type == 'guide'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-4 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#ffffff')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-4 am-form-label am-text-xs">线条样式 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <label class="am-radio-inline">
                                            <input type="radio" value="solid"
                                                   v-model='curItem.style.lineStyle'>
                                            实线
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="dashed"
                                                   v-model='curItem.style.lineStyle'> 虚线
                                        </label>
                                        <label class="am-radio-inline">
                                            <input type="radio" value="dotted"
                                                   v-model='curItem.style.lineStyle'> 点状
                                        </label>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-4 am-form-label am-text-xs">线条颜色 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.lineColor">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'lineColor', '#000000')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-4 am-form-label am-text-xs">线条高度 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.lineHeight" min="1" max="20">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.lineHeight }}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-4 am-form-label am-text-xs">上下边距 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.paddingTop" min="0" max="50">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.paddingTop }}</span>px(像素)
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 富文本-->
                        <div id="tpl_editor_richText" v-if="curItem.type == 'richText'">
                            <div class="editor-title"><span>{{curItem.name}}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">上下边距 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range"
                                               v-model="curItem.style.paddingTop" min="0" max="50">
                                        <div class="display-value">
                                            <span class="value">{{ curItem.style.paddingTop }}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">左右边距 </label>
                                    <div class="am-u-sm-8 am-u-end">
                                        <input class="tpl-form-input" type="range" min="0" max="50"
                                               v-model="curItem.style.paddingLeft">
                                        <div class="display-value">
                                            <span class="value">{{curItem.style.paddingLeft}}</span>px
                                            (像素)
                                        </div>
                                    </div>
                                </div>
                                <div class="am-form-group">
                                    <label class="am-u-sm-3 am-form-label am-text-xs">背景颜色 </label>
                                    <div class="am-u-sm-9 am-u-end">
                                        <input class="" type="color"
                                               v-model="curItem.style.background">
                                        <button type="button" class="btn-resetColor am-btn am-btn-xs"
                                                @click.stop="onEditorResetColor(curItem.style, 'background', '#ffffff')">
                                            重置
                                        </button>
                                    </div>
                                </div>
                                <div class="am-form-group am-padding-top-sm">
                                    <textarea id="ume-editor" name="editorValue"></textarea>
                                </div>
                            </form>
                        </div>

                        <!--编辑器: 线下门店-->
                        <div id="tpl_editor_shop" v-if="curItem.type == 'shop'">
                            <div class="editor-title"><span>{{ curItem.name }}</span></div>
                            <form class="am-form tpl-form-line-form">
                                <!--商品数据-->
                                <div class="j-switch-box" data-item-class="switch-source">
                                    <div class="am-form-group">
                                        <label class="am-u-sm-3 am-form-label am-text-xs">商品来源 </label>
                                        <div class="am-u-sm-8 am-u-end">
                                            <label class="am-radio-inline">
                                                <input type="radio" value="auto"
                                                       v-model="curItem.params.source"> 自动获取
                                            </label>
                                            <label class="am-radio-inline">
                                                <input type="radio" value="choice"
                                                       v-model="curItem.params.source"> 手动选择
                                            </label>
                                        </div>
                                    </div>
                                    <!--手动选择-->
                                    <div class="switch-source __choice"
                                         v-show="curItem.params.source == 'choice'">
                                        <div class="form-items __goods am-cf">
                                            <draggable :list="curItem.data"
                                                       :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
                                                <div v-for="(shop, index) in curItem.data"
                                                     class="form-item drag">
                                                    <i class="iconfont icon-shanchu item-delete" data-no-confirm="true"
                                                       @click="onEditorDeleleData(index, selectedIndex)"></i>
                                                    <div class="item-inner">
                                                        <div class="data-image"><img :src="shop.logo_image" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </draggable>
                                        </div>
                                        <div class="j-selectShop form-item-add" @click.stop="onSelectShop(curItem)">
                                            <span>选择门店</span>
                                        </div>
                                    </div>
                                    <!-- 自动获取 -->
                                    <div class="switch-source"
                                         v-show="curItem.params.source == 'auto'">
                                        <div class="am-form-group">
                                            <label class="am-u-sm-3 am-form-label am-text-xs"> 展示数量 </label>
                                            <div class="am-u-sm-8 am-u-end">
                                                <input class="tpl-form-input" type="number" min="1"
                                                       v-model="curItem.params.auto.showNum">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </template>
                </div>
            </div>
            <!-- 提示 -->
            <div class="tips am-margin-top-lg am-margin-bottom-sm">
                <div class="pre">
                    <p>1. 设计完成后点击"保存页面"，在小程序端页面下拉刷新即可看到效果。</p>
                    <p>2. 如需填写链接地址请参考<a href="index.php?s=/store/wxapp.page/links" target="_blank">页面链接</a></p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 文件库弹窗 -->
<!-- 文件库模板 -->
<script id="tpl-file-library" type="text/template">
    <div class="row">
        <div class="file-group">
            <ul class="nav-new">
                <li class="ng-scope {{ is_default ? 'active' : '' }}" data-group-id="-1">
                    <a class="group-name am-text-truncate" href="javascript:void(0);" title="全部">全部</a>
                </li>
                <li class="ng-scope" data-group-id="0">
                    <a class="group-name am-text-truncate" href="javascript:void(0);" title="未分组">未分组</a>
                </li>
                {{ each group_list }}
                <li class="ng-scope"
                    data-group-id="{{ $value.group_id }}" title="{{ $value.group_name }}">
                    <a class="group-edit" href="javascript:void(0);" title="编辑分组">
                        <i class="iconfont icon-bianji"></i>
                    </a>
                    <a class="group-name am-text-truncate" href="javascript:void(0);">
                        {{ $value.group_name }}
                    </a>
                    <a class="group-delete" href="javascript:void(0);" title="删除分组">
                        <i class="iconfont icon-shanchu1"></i>
                    </a>
                </li>
                {{ /each }}
            </ul>
            <a class="group-add" href="javascript:void(0);">新增分组</a>
        </div>
        <div class="file-list">
            <div class="v-box-header am-cf">
                <div class="h-left am-fl am-cf">
                    <div class="am-fl">
                        <div class="group-select am-dropdown">
                            <button type="button" class="am-btn am-btn-sm am-btn-secondary am-dropdown-toggle">
                                移动至 <span class="am-icon-caret-down"></span>
                            </button>
                            <ul class="group-list am-dropdown-content">
                                <li class="am-dropdown-header">请选择分组</li>
                                {{ each group_list }}
                                <li>
                                    <a class="move-file-group" data-group-id="{{ $value.group_id }}"
                                       href="javascript:void(0);">{{ $value.group_name }}</a>
                                </li>
                                {{ /each }}
                            </ul>
                        </div>
                    </div>
                    <div class="am-fl tpl-table-black-operation">
                        <a href="javascript:void(0);" class="file-delete tpl-table-black-operation-del"
                           data-group-id="2">
                            <i class="am-icon-trash"></i> 删除
                        </a>
                    </div>
                </div>
                <div class="h-rigth am-fr">
                    <div class="j-upload upload-image">
                        <i class="iconfont icon-add1"></i>
                        上传图片
                    </div>
                </div>
            </div>
            <div id="file-list-body" class="v-box-body">
                {{ include 'tpl-file-list' file_list }}
            </div>
            <div class="v-box-footer am-cf"></div>
        </div>
    </div>

</script>

<!-- 文件列表模板 -->
<script id="tpl-file-list" type="text/template">
    <ul class="file-list-item">
        {{ include 'tpl-file-list-item' data }}
    </ul>
    {{ if last_page > 1 }}
    <div class="file-page-box am-fr">
        <ul class="pagination">
            {{ if current_page > 1 }}
            <li>
                <a class="switch-page" href="javascript:void(0);" title="上一页" data-page="{{ current_page - 1 }}">«</a>
            </li>
            {{ /if }}
            {{ if current_page < last_page }}
            <li>
                <a class="switch-page" href="javascript:void(0);" title="下一页" data-page="{{ current_page + 1 }}">»</a>
            </li>
            {{ /if }}
        </ul>
    </div>
    {{ /if }}
</script>

<!-- 文件列表模板 -->
<script id="tpl-file-list-item" type="text/template">
    {{ each $data }}
    <li class="ng-scope" title="{{ $value.file_name }}" data-file-id="{{ $value.file_id }}"
        data-file-path="{{ $value.file_path }}">
        <div class="img-cover"
             style="background-image: url('{{ $value.file_path }}')">
        </div>
        <p class="file-name am-text-center am-text-truncate">{{ $value.file_name }}</p>
        <div class="select-mask">
            <img src="assets/store/img/chose.png">
        </div>
    </li>
    {{ /each }}
</script>

<!-- 分组元素-->
<script id="tpl-group-item" type="text/template">
    <li class="ng-scope" data-group-id="{{ group_id }}" title="{{ group_name }}">
        <a class="group-edit" href="javascript:void(0);" title="编辑分组">
            <i class="iconfont icon-bianji"></i>
        </a>
        <a class="group-name am-text-truncate" href="javascript:void(0);">
            {{ group_name }}
        </a>
        <a class="group-delete" href="javascript:void(0);" title="删除分组">
            <i class="iconfont icon-shanchu1"></i>
        </a>
    </li>
</script>


<script src="assets/common/js/vue.min.js?v=1.1.36"></script>
<script src="assets/common/js/Sortable.min.js?v=1.1.36"></script>
<script src="assets/common/js/vuedraggable.min.js?v=1.1.36"></script>
<script src="assets/store/js/select.data.js?v=1.1.36"></script>
<script src="assets/common/plugins/umeditor/umeditor.config.js?v=1.1.36"></script>
<script src="assets/common/plugins/umeditor/umeditor.min.js?v=1.1.36"></script>
<script src="assets/store/js/diy.js?v=1.1.36"></script>
<script>

    $(function () {

        // 渲染diy页面
        new diyPhone({"search":{"name":"\u641c\u7d22\u6846","type":"search","params":{"placeholder":"\u8bf7\u8f93\u5165\u5173\u952e\u5b57\u8fdb\u884c\u641c\u7d22"},"style":{"textAlign":"left","searchStyle":"square"}},"banner":{"name":"\u56fe\u7247\u8f6e\u64ad","type":"banner","style":{"btnColor":"#ffffff","btnShape":"round"},"params":{"interval":"2800"},"data":[{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/banner\/01.png","linkUrl":""},{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/banner\/01.png","linkUrl":""}]},"imageSingle":{"name":"\u5355\u56fe\u7ec4","type":"imageSingle","style":{"paddingTop":0,"paddingLeft":0,"background":"#ffffff"},"data":[{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/banner\/01.png","imgName":"image-1.jpg","linkUrl":""},{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/banner\/01.png","imgName":"banner-2.jpg","linkUrl":""}]},"navBar":{"name":"\u5bfc\u822a\u7ec4","type":"navBar","style":{"background":"#ffffff","rowsNum":"4"},"data":[{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/navbar\/01.png","imgName":"icon-1.png","linkUrl":"","text":"\u6309\u94ae\u6587\u5b571","color":"#666666"},{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/navbar\/01.png","imgName":"icon-2.jpg","linkUrl":"","text":"\u6309\u94ae\u6587\u5b572","color":"#666666"},{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/navbar\/01.png","imgName":"icon-3.jpg","linkUrl":"","text":"\u6309\u94ae\u6587\u5b573","color":"#666666"},{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/navbar\/01.png","imgName":"icon-4.jpg","linkUrl":"","text":"\u6309\u94ae\u6587\u5b574","color":"#666666"}]},"blank":{"name":"\u8f85\u52a9\u7a7a\u767d","type":"blank","style":{"height":"20","background":"#ffffff"}},"guide":{"name":"\u8f85\u52a9\u7ebf","type":"guide","style":{"background":"#ffffff","lineStyle":"solid","lineHeight":"1","lineColor":"#000000","paddingTop":10}},"video":{"name":"\u89c6\u9891\u7ec4","type":"video","params":{"videoUrl":"http:\/\/wxsnsdy.tc.qq.com\/105\/20210\/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400","poster":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/video_poster.png","autoplay":"0"},"style":{"paddingTop":"0","height":"190"}},"article":{"name":"\u6587\u7ae0\u7ec4","type":"article","params":{"source":"auto","auto":{"category":0,"showNum":6}},"style":[],"defaultData":[{"article_title":"\u6b64\u5904\u663e\u793a\u6587\u7ae0\u6807\u9898","show_type":10,"image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/article\/01.png","views_num":"309"},{"article_title":"\u6b64\u5904\u663e\u793a\u6587\u7ae0\u6807\u9898","show_type":10,"image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/article\/01.png","views_num":"309"}],"data":[]},"special":{"name":"\u5934\u6761\u5feb\u62a5","type":"special","params":{"source":"auto","auto":{"category":0,"showNum":6}},"style":{"display":"1","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/special.png"},"defaultData":[{"article_title":"\u5f20\u5c0f\u9f994\u5c0f\u65f6\u6f14\u8bb2\uff1a\u4f60\u548c\u9ad8\u624b\u4e4b\u95f4\uff0c\u9694\u7740\u201c\u7b80\u5355\u201d\u4e8c\u5b57"},{"article_title":"\u5f20\u5c0f\u9f994\u5c0f\u65f6\u6f14\u8bb2\uff1a\u4f60\u548c\u9ad8\u624b\u4e4b\u95f4\uff0c\u9694\u7740\u201c\u7b80\u5355\u201d\u4e8c\u5b57"}],"data":[]},"notice":{"name":"\u516c\u544a\u7ec4","type":"notice","params":{"text":"\u8fd9\u91cc\u662f\u7b2c\u4e00\u6761\u81ea\u5b9a\u4e49\u516c\u544a\u7684\u6807\u9898","icon":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/notice.png"},"style":{"paddingTop":"4","background":"#ffffff","textColor":"#000000"}},"richText":{"name":"\u5bcc\u6587\u672c","type":"richText","params":{"content":"<p>\u8fd9\u91cc\u662f\u6587\u672c\u7684\u5185\u5bb9<\/p>"},"style":{"paddingTop":"0","paddingLeft":"0","background":"#ffffff"}},"window":{"name":"\u56fe\u7247\u6a71\u7a97","type":"window","style":{"paddingTop":"0","paddingLeft":"0","background":"#ffffff","layout":"2"},"data":[{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/window\/01.jpg","linkUrl":""},{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/window\/02.jpg","linkUrl":""},{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/window\/03.jpg","linkUrl":""},{"imgUrl":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/window\/04.jpg","linkUrl":""}],"dataNum":4},"goods":{"name":"\u5546\u54c1\u7ec4","type":"goods","params":{"source":"auto","auto":{"category":0,"goodsSort":"all","showNum":6}},"style":{"background":"#F6F6F6","display":"list","column":"2","show":{"goodsName":"1","goodsPrice":"1","linePrice":"1","sellingPoint":"0","goodsSales":"0"}},"defaultData":[{"goods_name":"\u6b64\u5904\u663e\u793a\u5546\u54c1\u540d\u79f0","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","goods_price":"99.00","line_price":"139.00","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u4e0d\u5bb9\u9519\u8fc7","goods_sales":"100"},{"goods_name":"\u6b64\u5904\u663e\u793a\u5546\u54c1\u540d\u79f0","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","goods_price":"99.00","line_price":"139.00","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u4e0d\u5bb9\u9519\u8fc7","goods_sales":"100"},{"goods_name":"\u6b64\u5904\u663e\u793a\u5546\u54c1\u540d\u79f0","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","goods_price":"99.00","line_price":"139.00","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u4e0d\u5bb9\u9519\u8fc7","goods_sales":"100"},{"goods_name":"\u6b64\u5904\u663e\u793a\u5546\u54c1\u540d\u79f0","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","goods_price":"99.00","line_price":"139.00","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u4e0d\u5bb9\u9519\u8fc7","goods_sales":"100"}],"data":[{"goods_name":"\u6b64\u5904\u663e\u793a\u5546\u54c1\u540d\u79f0","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","goods_price":"99.00","line_price":"139.00","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u4e0d\u5bb9\u9519\u8fc7","goods_sales":"100","is_default":true},{"goods_name":"\u6b64\u5904\u663e\u793a\u5546\u54c1\u540d\u79f0","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","goods_price":"99.00","line_price":"139.00","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u4e0d\u5bb9\u9519\u8fc7","goods_sales":"100","is_default":true}]},"coupon":{"name":"\u4f18\u60e0\u5238\u7ec4","type":"coupon","style":{"paddingTop":"10","background":"#ffffff"},"params":{"limit":"5"},"data":[{"color":"red","reduce_price":"10","min_price":"100.00"},{"color":"violet","reduce_price":"10","min_price":"100.00"}]},"sharingGoods":{"name":"\u62fc\u56e2\u5546\u54c1\u7ec4","type":"sharingGoods","params":{"source":"auto","auto":{"category":0,"goodsSort":"all","showNum":6}},"style":{"background":"#F6F6F6","show":{"goodsName":"1","sellingPoint":"1","sharingPrice":"1","linePrice":"1"}},"defaultData":[{"goods_name":"\u6b64\u5904\u662f\u62fc\u56e2\u5546\u54c1","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u6027\u4ef7\u6bd4\u8f83\u9ad8 \u4e0d\u5bb9\u9519\u8fc7","sharing_price":"99.00","line_price":"139.00"},{"goods_name":"\u6b64\u5904\u662f\u62fc\u56e2\u5546\u54c1","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u6027\u4ef7\u6bd4\u8f83\u9ad8 \u4e0d\u5bb9\u9519\u8fc7","goods_price":"99.00","line_price":"139.00"},{"goods_name":"\u6b64\u5904\u662f\u62fc\u56e2\u5546\u54c1","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u6027\u4ef7\u6bd4\u8f83\u9ad8 \u4e0d\u5bb9\u9519\u8fc7","sharing_price":"99.00","line_price":"139.00"},{"goods_name":"\u6b64\u5904\u662f\u62fc\u56e2\u5546\u54c1","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u6027\u4ef7\u6bd4\u8f83\u9ad8 \u4e0d\u5bb9\u9519\u8fc7","sharing_price":"99.00","line_price":"139.00"}],"data":[{"goods_name":"\u6b64\u5904\u662f\u62fc\u56e2\u5546\u54c1","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u6027\u4ef7\u6bd4\u8f83\u9ad8 \u4e0d\u5bb9\u9519\u8fc7","sharing_price":"99.00","line_price":"139.00","is_default":true},{"goods_name":"\u6b64\u5904\u662f\u62fc\u56e2\u5546\u54c1","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","selling_point":"\u6b64\u6b3e\u5546\u54c1\u7f8e\u89c2\u5927\u65b9 \u6027\u4ef7\u6bd4\u8f83\u9ad8 \u4e0d\u5bb9\u9519\u8fc7","sharing_price":"99.00","line_price":"139.00","is_default":true}]},"bargainGoods":{"name":"\u780d\u4ef7\u5546\u54c1\u7ec4","type":"bargainGoods","params":{"source":"auto","auto":{"category":0,"goodsSort":"all","showNum":6}},"style":{"background":"#F6F6F6","show":{"goodsName":"1","peoples":"1","floorPrice":"1","originalPrice":"1"}},"demo":{"helps_count":2,"helps":[{"avatarUrl":"http:\/\/tva1.sinaimg.cn\/large\/0060lm7Tly1g4c7zrytvvj30dw0dwwes.jpg"},{"avatarUrl":"http:\/\/tva1.sinaimg.cn\/large\/0060lm7Tly1g4c7zs2u5ej30b40b4dfx.jpg"}]},"defaultData":[{"goods_name":"\u6b64\u5904\u662f\u780d\u4ef7\u5546\u54c1","goods_image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","floor_price":"0.01","original_price":"139.00"},{"goods_name":"\u6b64\u5904\u662f\u780d\u4ef7\u5546\u54c1","goods_image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","floor_price":"0.01","original_price":"139.00"}],"data":[{"goods_name":"\u6b64\u5904\u662f\u780d\u4ef7\u5546\u54c1","goods_image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","floor_price":"0.01","original_price":"139.00"},{"goods_name":"\u6b64\u5904\u662f\u780d\u4ef7\u5546\u54c1","goods_image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","floor_price":"0.01","original_price":"139.00"}]},"sharpGoods":{"name":"\u79d2\u6740\u5546\u54c1\u7ec4","type":"sharpGoods","params":{"showNum":6},"style":{"background":"#ffffff","column":"3","show":{"goodsName":"1","seckillPrice":"1","originalPrice":"1"}},"data":[{"goods_name":"\u6b64\u5904\u662f\u79d2\u6740\u5546\u54c1","goods_image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","seckill_price":"69.00","original_price":"139.00"},{"goods_name":"\u6b64\u5904\u662f\u79d2\u6740\u5546\u54c1","goods_image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","seckill_price":"69.00","original_price":"139.00"},{"goods_name":"\u6b64\u5904\u662f\u79d2\u6740\u5546\u54c1","goods_image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/goods\/01.png","seckill_price":"69.00","original_price":"139.00"}]},"shop":{"name":"\u7ebf\u4e0b\u95e8\u5e97","type":"shop","params":{"source":"auto","auto":{"showNum":6}},"style":[],"defaultData":[{"shop_name":"\u6b64\u5904\u663e\u793a\u95e8\u5e97\u540d\u79f0","logo_image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/circular.png","phone":"010-6666666","region":{"province":"xx\u7701","city":"xx\u5e02","region":"xx\u533a"},"address":"xx\u8857\u9053"},{"shop_name":"\u6b64\u5904\u663e\u793a\u95e8\u5e97\u540d\u79f0","logo_image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/circular.png","phone":"010-6666666","region":{"province":"xx\u7701","city":"xx\u5e02","region":"xx\u533a"},"address":"xx\u8857\u9053"}],"data":[{"shop_name":"\u6b64\u5904\u663e\u793a\u95e8\u5e97\u540d\u79f0","logo_image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/circular.png","phone":"010-6666666","region":{"province":"xx\u7701","city":"xx\u5e02","region":"xx\u533a"},"address":"xx\u8857\u9053"}]},"service":{"name":"\u5728\u7ebf\u5ba2\u670d","type":"service","params":{"type":"chat","image":"https:\/\/demo.yiovo.com\/assets\/store\/img\/diy\/service.png","phone_num":""},"style":{"right":"1","bottom":"10","opacity":"100"}}}, {"page":{"type":"page","name":"\u9875\u9762\u8bbe\u7f6e","params":{"name":"\u9875\u9762\u540d\u79f0","title":"\u9875\u9762\u6807\u9898","share_title":"\u5206\u4eab\u6807\u9898"},"style":{"titleTextColor":"black","titleBackgroundColor":"#ffffff"}},"items":[]}, {"catgory":{"10001":{"category_id":10001,"name":"\u624b\u673a\u6570\u7801","parent_id":0,"image_id":0,"sort":50,"wxapp_id":10001,"create_time":"2018-07-17 10:10:07","update_time":"2018-07-27 20:14:26","image":null,"child":[{"category_id":10010,"name":"\u5c0f\u7c73","parent_id":10001,"image_id":10001,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:21:04","update_time":"2018-07-17 10:21:04","image":{"file_id":10001,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171021031720f9679.png","file_size":6412,"file_type":"image","extension":"png","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:21:03","file_path":"http:\/\/static.yoshop.xany6.com\/201807171021031720f9679.png"}},{"category_id":10011,"name":"\u534e\u4e3a","parent_id":10001,"image_id":10002,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:21:30","update_time":"2018-07-17 10:21:30","image":{"file_id":10002,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717102129b4e214214.jpg","file_size":1926,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:21:29","file_path":"http:\/\/static.yoshop.xany6.com\/20180717102129b4e214214.jpg"}},{"category_id":10012,"name":"Iphone","parent_id":10001,"image_id":10003,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:36:05","update_time":"2018-07-17 10:36:05","image":{"file_id":10003,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717103600edf9f5038.jpg","file_size":3967,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:36:00","file_path":"http:\/\/static.yoshop.xany6.com\/20180717103600edf9f5038.jpg"}},{"category_id":10013,"name":"vivo","parent_id":10001,"image_id":10004,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:36:44","update_time":"2018-07-17 10:36:44","image":{"file_id":10004,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717103633c69c94138.png","file_size":4927,"file_type":"image","extension":"png","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:36:33","file_path":"http:\/\/static.yoshop.xany6.com\/20180717103633c69c94138.png"}},{"category_id":10014,"name":"OPPO","parent_id":10001,"image_id":10005,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:37:23","update_time":"2018-07-17 10:37:23","image":{"file_id":10005,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"2018071710372269a633020.png","file_size":4675,"file_type":"image","extension":"png","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:37:22","file_path":"http:\/\/static.yoshop.xany6.com\/2018071710372269a633020.png"}},{"category_id":10015,"name":"\u9b45\u65cf","parent_id":10001,"image_id":10006,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:37:58","update_time":"2018-07-17 10:37:58","image":{"file_id":10006,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171037574f1163513.jpg","file_size":13114,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:37:57","file_path":"http:\/\/static.yoshop.xany6.com\/201807171037574f1163513.jpg"}},{"category_id":10016,"name":"\u4e09\u661f","parent_id":10001,"image_id":10007,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:38:18","update_time":"2018-07-17 10:38:18","image":{"file_id":10007,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717103817b50602761.png","file_size":5996,"file_type":"image","extension":"png","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:38:17","file_path":"http:\/\/static.yoshop.xany6.com\/20180717103817b50602761.png"}},{"category_id":10017,"name":"\u5973\u6027\u624b\u673a","parent_id":10001,"image_id":10008,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:38:59","update_time":"2018-07-17 10:38:59","image":{"file_id":10008,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717103858579b29364.jpg","file_size":4018,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:38:58","file_path":"http:\/\/static.yoshop.xany6.com\/20180717103858579b29364.jpg"}}]},"10002":{"category_id":10002,"name":"\u5bb6\u7528\u7535\u5668","parent_id":0,"image_id":0,"sort":55,"wxapp_id":10001,"create_time":"2018-07-17 10:10:13","update_time":"2018-07-27 20:16:08","image":null,"child":[{"category_id":10018,"name":"\u7535\u6c34\u58f6\/\u70ed\u6c34\u74f6","parent_id":10002,"image_id":10009,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:45:17","update_time":"2018-07-17 10:45:17","image":{"file_id":10009,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717104516f15c71914.jpg","file_size":5141,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:45:16","file_path":"http:\/\/static.yoshop.xany6.com\/20180717104516f15c71914.jpg"}},{"category_id":10019,"name":"\u7535\u538b\u529b\u9505","parent_id":10002,"image_id":10010,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:45:46","update_time":"2018-07-17 10:45:46","image":{"file_id":10010,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717104545203c11990.jpg","file_size":3704,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:45:45","file_path":"http:\/\/static.yoshop.xany6.com\/20180717104545203c11990.jpg"}},{"category_id":10020,"name":"\u7535\u996d\u7172","parent_id":10002,"image_id":10011,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:46:04","update_time":"2018-07-17 10:46:04","image":{"file_id":10011,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717104603be4eb3302.jpg","file_size":5549,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:46:03","file_path":"http:\/\/static.yoshop.xany6.com\/20180717104603be4eb3302.jpg"}},{"category_id":10021,"name":"\u7535\u78c1\u7089","parent_id":10002,"image_id":10012,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:46:34","update_time":"2018-07-17 10:46:34","image":{"file_id":10012,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"2018071710463313a4c6481.jpg","file_size":4231,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:46:33","file_path":"http:\/\/static.yoshop.xany6.com\/2018071710463313a4c6481.jpg"}},{"category_id":10022,"name":"\u5fae\u6ce2\u7089","parent_id":10002,"image_id":10013,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:47:01","update_time":"2018-07-17 10:47:01","image":{"file_id":10013,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171046566fa078397.jpg","file_size":2598,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:46:56","file_path":"http:\/\/static.yoshop.xany6.com\/201807171046566fa078397.jpg"}},{"category_id":10023,"name":"\u7535\u997c\u94db","parent_id":10002,"image_id":10014,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:47:23","update_time":"2018-07-17 10:47:23","image":{"file_id":10014,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"2018071710472279ea01034.jpg","file_size":4373,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:47:22","file_path":"http:\/\/static.yoshop.xany6.com\/2018071710472279ea01034.jpg"}},{"category_id":10024,"name":"\u8c46\u6d46\u673a","parent_id":10002,"image_id":10015,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:47:56","update_time":"2018-07-17 10:47:56","image":{"file_id":10015,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717104753612ab0376.jpg","file_size":2373,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:47:53","file_path":"http:\/\/static.yoshop.xany6.com\/20180717104753612ab0376.jpg"}},{"category_id":10025,"name":"\u591a\u7528\u9014\u9505","parent_id":10002,"image_id":10016,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:48:11","update_time":"2018-07-17 10:48:11","image":{"file_id":10016,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717104810f958a9886.jpg","file_size":3578,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:48:10","file_path":"http:\/\/static.yoshop.xany6.com\/20180717104810f958a9886.jpg"}}]},"10003":{"category_id":10003,"name":"\u7535\u8111\u529e\u516c","parent_id":0,"image_id":0,"sort":60,"wxapp_id":10001,"create_time":"2018-07-17 10:10:18","update_time":"2018-07-17 10:10:18","image":null,"child":[{"category_id":10026,"name":"\u8f7b\u8584\u672c","parent_id":10003,"image_id":10017,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:57:45","update_time":"2018-07-17 10:57:45","image":{"file_id":10017,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717105744dd1269197.png","file_size":14559,"file_type":"image","extension":"png","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:57:44","file_path":"http:\/\/static.yoshop.xany6.com\/20180717105744dd1269197.png"}},{"category_id":10027,"name":"\u6e38\u620f\u672c","parent_id":10003,"image_id":10018,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:58:09","update_time":"2018-07-17 10:58:09","image":{"file_id":10018,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717105805e81ec0398.png","file_size":17237,"file_type":"image","extension":"png","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:58:05","file_path":"http:\/\/static.yoshop.xany6.com\/20180717105805e81ec0398.png"}},{"category_id":10028,"name":"\u673a\u68b0\u952e\u76d8","parent_id":10003,"image_id":10019,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:58:28","update_time":"2018-07-17 10:58:28","image":{"file_id":10019,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"2018071710582753f808887.jpg","file_size":11549,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:58:27","file_path":"http:\/\/static.yoshop.xany6.com\/2018071710582753f808887.jpg"}},{"category_id":10029,"name":"\u7ec4\u88c5\u7535\u8111","parent_id":10003,"image_id":10020,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:58:58","update_time":"2018-07-17 10:58:58","image":{"file_id":10020,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"2018071710585094a2e1515.jpg","file_size":13744,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:58:50","file_path":"http:\/\/static.yoshop.xany6.com\/2018071710585094a2e1515.jpg"}},{"category_id":10030,"name":"\u79fb\u52a8\u786c\u76d8","parent_id":10003,"image_id":10021,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:59:23","update_time":"2018-07-17 10:59:23","image":{"file_id":10021,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171059225fe4a0683.jpg","file_size":8563,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:59:22","file_path":"http:\/\/static.yoshop.xany6.com\/201807171059225fe4a0683.jpg"}},{"category_id":10031,"name":"\u663e\u5361","parent_id":10003,"image_id":10022,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 10:59:45","update_time":"2018-07-17 10:59:45","image":{"file_id":10022,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171059459e20d6548.jpg","file_size":12124,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 10:59:45","file_path":"http:\/\/static.yoshop.xany6.com\/201807171059459e20d6548.jpg"}},{"category_id":10032,"name":"\u6e38\u620f\u53f0\u5f0f\u673a","parent_id":10003,"image_id":10023,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:00:17","update_time":"2018-07-17 11:00:17","image":{"file_id":10023,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171100132e1e65488.jpg","file_size":9831,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:00:13","file_path":"http:\/\/static.yoshop.xany6.com\/201807171100132e1e65488.jpg"}},{"category_id":10033,"name":"\u5bb6\u7528\u6253\u5370\u673a","parent_id":10003,"image_id":10024,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:01:13","update_time":"2018-07-17 11:01:13","image":{"file_id":10024,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717110113a228e2926.jpg","file_size":5268,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:01:13","file_path":"http:\/\/static.yoshop.xany6.com\/20180717110113a228e2926.jpg"}},{"category_id":10034,"name":"\u5403\u9e21\u88c5\u5907","parent_id":10003,"image_id":10025,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:01:56","update_time":"2018-07-17 11:01:56","image":{"file_id":10025,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717110155a2c675940.jpg","file_size":12093,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:01:55","file_path":"http:\/\/static.yoshop.xany6.com\/20180717110155a2c675940.jpg"}}]},"10004":{"category_id":10004,"name":"\u6c7d\u8f66\u7528\u54c1","parent_id":0,"image_id":0,"sort":65,"wxapp_id":10001,"create_time":"2018-07-17 10:10:23","update_time":"2018-07-17 10:10:23","image":null,"child":[{"category_id":10036,"name":"\u673a\u6cb9","parent_id":10004,"image_id":10026,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:10:06","update_time":"2018-07-17 11:10:06","image":{"file_id":10026,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111006b08a71831.jpg","file_size":4997,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:10:06","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111006b08a71831.jpg"}},{"category_id":10037,"name":"\u6c7d\u8f66\u5750\u57ab","parent_id":10004,"image_id":10027,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:10:23","update_time":"2018-07-17 11:10:23","image":{"file_id":10027,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111022b868d7975.jpg","file_size":6135,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:10:22","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111022b868d7975.jpg"}},{"category_id":10038,"name":"\u6d17\u8f66\u6c34\u67aa","parent_id":10004,"image_id":10028,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:10:53","update_time":"2018-07-17 11:10:53","image":{"file_id":10028,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111051000d82311.jpg","file_size":14490,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:10:51","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111051000d82311.jpg"}},{"category_id":10039,"name":"\u884c\u8f66\u8bb0\u5f55\u4eea","parent_id":10004,"image_id":10029,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:11:10","update_time":"2018-07-17 11:11:10","image":{"file_id":10029,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111109f7fa08380.jpg","file_size":14950,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:11:09","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111109f7fa08380.jpg"}},{"category_id":10040,"name":"\u8f6e\u80ce","parent_id":10004,"image_id":10030,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:11:28","update_time":"2018-07-17 11:11:28","image":{"file_id":10030,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111127823353846.jpg","file_size":9196,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:11:27","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111127823353846.jpg"}},{"category_id":10041,"name":"\u5e94\u6025\u6551\u63f4","parent_id":10004,"image_id":10031,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:11:47","update_time":"2018-07-17 11:11:47","image":{"file_id":10031,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111146d51048663.png","file_size":10152,"file_type":"image","extension":"png","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:11:46","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111146d51048663.png"}},{"category_id":10042,"name":"\u9999\u6c34","parent_id":10004,"image_id":10032,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:12:04","update_time":"2018-07-17 11:12:04","image":{"file_id":10032,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111203b9dfd9346.jpg","file_size":8718,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:12:03","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111203b9dfd9346.jpg"}},{"category_id":10043,"name":"\u529f\u80fd\u5c0f\u4ef6","parent_id":10004,"image_id":10033,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:12:30","update_time":"2018-07-17 11:12:30","image":{"file_id":10033,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111229ee1cc6809.jpg","file_size":7495,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:12:29","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111229ee1cc6809.jpg"}},{"category_id":10044,"name":"\u6302\u4ef6","parent_id":10004,"image_id":10034,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:12:44","update_time":"2018-07-17 11:12:44","image":{"file_id":10034,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171112441551b5825.jpg","file_size":7259,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:12:44","file_path":"http:\/\/static.yoshop.xany6.com\/201807171112441551b5825.jpg"}}]},"10005":{"category_id":10005,"name":"\u7537\u88c5","parent_id":0,"image_id":0,"sort":70,"wxapp_id":10001,"create_time":"2018-07-17 10:10:28","update_time":"2018-07-17 10:10:28","image":null,"child":[{"category_id":10045,"name":"\u5939\u514b","parent_id":10005,"image_id":10035,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:19:20","update_time":"2018-07-17 11:19:20","image":{"file_id":10035,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111920ceed03487.jpg","file_size":5192,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:19:20","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111920ceed03487.jpg"}},{"category_id":10046,"name":"T\u6064","parent_id":10005,"image_id":10036,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:19:35","update_time":"2018-07-17 11:19:35","image":{"file_id":10036,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111934843975679.jpg","file_size":7368,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:19:34","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111934843975679.jpg"}},{"category_id":10047,"name":" \u9488\u7ec7\u886b","parent_id":10005,"image_id":10037,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:19:51","update_time":"2018-07-17 11:19:51","image":{"file_id":10037,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717111947621281997.jpg","file_size":6422,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:19:47","file_path":"http:\/\/static.yoshop.xany6.com\/20180717111947621281997.jpg"}},{"category_id":10048,"name":"\u886c\u886b","parent_id":10005,"image_id":10038,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:20:04","update_time":"2018-07-17 11:20:04","image":{"file_id":10038,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717112003e256b0783.jpg","file_size":3410,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:20:03","file_path":"http:\/\/static.yoshop.xany6.com\/20180717112003e256b0783.jpg"}},{"category_id":10049,"name":"\u536b\u8863","parent_id":10005,"image_id":10039,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:20:18","update_time":"2018-07-17 11:20:18","image":{"file_id":10039,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717112017badbf2419.jpg","file_size":6368,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:20:17","file_path":"http:\/\/static.yoshop.xany6.com\/20180717112017badbf2419.jpg"}},{"category_id":10050,"name":"\u98ce\u8863","parent_id":10005,"image_id":10040,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:20:31","update_time":"2018-07-17 11:20:31","image":{"file_id":10040,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171120302592a7226.jpg","file_size":4184,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:20:30","file_path":"http:\/\/static.yoshop.xany6.com\/201807171120302592a7226.jpg"}},{"category_id":10051,"name":"\u725b\u4ed4\u88e4","parent_id":10005,"image_id":10041,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:20:42","update_time":"2018-07-17 11:20:42","image":{"file_id":10041,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717112041f0b904756.jpg","file_size":10103,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:20:41","file_path":"http:\/\/static.yoshop.xany6.com\/20180717112041f0b904756.jpg"}},{"category_id":10052,"name":"\u4f11\u95f2\u88e4","parent_id":10005,"image_id":10042,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:20:56","update_time":"2018-07-17 11:20:56","image":{"file_id":10042,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717112056240332466.jpg","file_size":4264,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:20:56","file_path":"http:\/\/static.yoshop.xany6.com\/20180717112056240332466.jpg"}},{"category_id":10053,"name":"\u81ea\u8425\u7537\u88c5","parent_id":10005,"image_id":10043,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 11:21:09","update_time":"2018-07-17 11:21:09","image":{"file_id":10043,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717112108ae6848513.jpg","file_size":15062,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 11:21:08","file_path":"http:\/\/static.yoshop.xany6.com\/20180717112108ae6848513.jpg"}}]},"10006":{"category_id":10006,"name":"\u5973\u88c5","parent_id":0,"image_id":0,"sort":75,"wxapp_id":10001,"create_time":"2018-07-17 10:10:34","update_time":"2018-07-17 10:10:34","image":null,"child":[{"category_id":10054,"name":"\u65e9\u6625\u65b0\u54c1","parent_id":10006,"image_id":10044,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:11:14","update_time":"2018-07-17 13:11:14","image":{"file_id":10044,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171311135ad417707.jpg","file_size":3792,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:11:13","file_path":"http:\/\/static.yoshop.xany6.com\/201807171311135ad417707.jpg"}},{"category_id":10055,"name":"\u8fde\u8863\u88d9","parent_id":10006,"image_id":10045,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:11:48","update_time":"2018-07-17 13:11:48","image":{"file_id":10045,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717131147254102370.jpg","file_size":4624,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:11:47","file_path":"http:\/\/static.yoshop.xany6.com\/20180717131147254102370.jpg"}},{"category_id":10056,"name":"\u886c\u886b","parent_id":10006,"image_id":10046,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:12:05","update_time":"2018-07-17 13:12:05","image":{"file_id":10046,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717131203b2d096600.jpg","file_size":6460,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:12:03","file_path":"http:\/\/static.yoshop.xany6.com\/20180717131203b2d096600.jpg"}},{"category_id":10057,"name":"T\u6064","parent_id":10006,"image_id":10047,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:12:22","update_time":"2018-07-17 13:12:22","image":{"file_id":10047,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717131221305a62112.jpg","file_size":6995,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:12:21","file_path":"http:\/\/static.yoshop.xany6.com\/20180717131221305a62112.jpg"}},{"category_id":10058,"name":"\u725b\u4ed4\u88e4","parent_id":10006,"image_id":10048,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:12:34","update_time":"2018-07-17 13:12:34","image":{"file_id":10048,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717131233a76585133.jpg","file_size":4764,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:12:33","file_path":"http:\/\/static.yoshop.xany6.com\/20180717131233a76585133.jpg"}},{"category_id":10059,"name":"\u536b\u8863","parent_id":10006,"image_id":10049,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:12:45","update_time":"2018-07-17 13:12:45","image":{"file_id":10049,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717131244f99b38300.jpg","file_size":6260,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:12:44","file_path":"http:\/\/static.yoshop.xany6.com\/20180717131244f99b38300.jpg"}},{"category_id":10060,"name":"\u9488\u7ec7\u886b","parent_id":10006,"image_id":10050,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:13:03","update_time":"2018-07-17 13:13:03","image":{"file_id":10050,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171313023ada84138.jpg","file_size":3672,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:13:02","file_path":"http:\/\/static.yoshop.xany6.com\/201807171313023ada84138.jpg"}},{"category_id":10061,"name":"\u725b\u4ed4\u5916\u5957","parent_id":10006,"image_id":10051,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:13:18","update_time":"2018-07-17 13:13:18","image":{"file_id":10051,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"2018071713131446f0c9984.jpg","file_size":6518,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:13:14","file_path":"http:\/\/static.yoshop.xany6.com\/2018071713131446f0c9984.jpg"}},{"category_id":10062,"name":"\u81ea\u8425\u5973\u88c5","parent_id":10006,"image_id":10052,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:13:30","update_time":"2018-07-17 13:13:30","image":{"file_id":10052,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717131329ec4c16995.jpg","file_size":6660,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:13:29","file_path":"http:\/\/static.yoshop.xany6.com\/20180717131329ec4c16995.jpg"}}]},"10007":{"category_id":10007,"name":"\u949f\u8868\u73e0\u5b9d","parent_id":0,"image_id":0,"sort":80,"wxapp_id":10001,"create_time":"2018-07-17 10:10:38","update_time":"2018-07-17 10:10:38","image":null,"child":[{"category_id":10069,"name":"\u745e\u8868 ","parent_id":10007,"image_id":10059,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:26:25","update_time":"2018-07-17 13:26:25","image":{"file_id":10059,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717132624d5fbe7006.jpg","file_size":6588,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:26:24","file_path":"http:\/\/static.yoshop.xany6.com\/20180717132624d5fbe7006.jpg"}},{"category_id":10070,"name":"\u56fd\u8868","parent_id":10007,"image_id":10060,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:26:35","update_time":"2018-07-17 13:26:35","image":{"file_id":10060,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717132634e4bf75583.jpg","file_size":9885,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:26:34","file_path":"http:\/\/static.yoshop.xany6.com\/20180717132634e4bf75583.jpg"}},{"category_id":10071,"name":"\u5fb7\u8868","parent_id":10007,"image_id":10061,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:26:45","update_time":"2018-07-17 13:26:45","image":{"file_id":10061,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717132644d48de9165.jpg","file_size":13620,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:26:45","file_path":"http:\/\/static.yoshop.xany6.com\/20180717132644d48de9165.jpg"}},{"category_id":10072,"name":"\u65e5\u97e9\u8868","parent_id":10007,"image_id":10062,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:26:57","update_time":"2018-07-17 13:26:57","image":{"file_id":10062,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"2018071713265693a4f9387.jpg","file_size":7428,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:26:56","file_path":"http:\/\/static.yoshop.xany6.com\/2018071713265693a4f9387.jpg"}},{"category_id":10073,"name":"\u513f\u7ae5\u624b\u8868","parent_id":10007,"image_id":10063,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:27:08","update_time":"2018-07-17 13:27:08","image":{"file_id":10063,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717132707c4a8f0033.jpg","file_size":4140,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:27:07","file_path":"http:\/\/static.yoshop.xany6.com\/20180717132707c4a8f0033.jpg"}},{"category_id":10074,"name":"\u6b27\u7f8e\u8868","parent_id":10007,"image_id":10064,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:27:23","update_time":"2018-07-17 13:27:23","image":{"file_id":10064,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171327225fbab4337.jpg","file_size":10433,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:27:22","file_path":"http:\/\/static.yoshop.xany6.com\/201807171327225fbab4337.jpg"}}]},"10008":{"category_id":10008,"name":"\u5185\u8863\u914d\u9970","parent_id":0,"image_id":0,"sort":85,"wxapp_id":10001,"create_time":"2018-07-17 10:14:54","update_time":"2018-07-17 10:14:54","image":null,"child":[{"category_id":10063,"name":"\u5185\u8863\u9986","parent_id":10008,"image_id":10053,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:20:38","update_time":"2018-07-17 13:20:38","image":{"file_id":10053,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171320372e8bc5809.jpg","file_size":13037,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:20:37","file_path":"http:\/\/static.yoshop.xany6.com\/201807171320372e8bc5809.jpg"}},{"category_id":10064,"name":"\u5927\u724c\u6587\u80f8","parent_id":10008,"image_id":10054,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:20:51","update_time":"2018-07-17 13:20:51","image":{"file_id":10054,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717132050e21532763.jpg","file_size":16067,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:20:50","file_path":"http:\/\/static.yoshop.xany6.com\/20180717132050e21532763.jpg"}},{"category_id":10065,"name":"\u81ea\u8425\u5185\u8863","parent_id":10008,"image_id":10055,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:21:05","update_time":"2018-07-17 13:21:05","image":{"file_id":10055,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717132104618394299.jpg","file_size":17475,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:21:04","file_path":"http:\/\/static.yoshop.xany6.com\/20180717132104618394299.jpg"}},{"category_id":10066,"name":"\u5185\u8863\u7206\u6b3e","parent_id":10008,"image_id":10056,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:21:22","update_time":"2018-07-17 13:21:22","image":{"file_id":10056,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717132121264643605.jpg","file_size":6351,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:21:21","file_path":"http:\/\/static.yoshop.xany6.com\/20180717132121264643605.jpg"}},{"category_id":10067,"name":"\u5973\u58eb\u56f4\u5dfe\/\u62ab\u80a9","parent_id":10008,"image_id":10057,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:21:42","update_time":"2018-07-17 13:21:42","image":{"file_id":10057,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717132140550de7975.jpg","file_size":3993,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:21:40","file_path":"http:\/\/static.yoshop.xany6.com\/20180717132140550de7975.jpg"}},{"category_id":10068,"name":"\u914d\u9970\u9986","parent_id":10008,"image_id":10058,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:21:56","update_time":"2018-07-17 13:21:56","image":{"file_id":10058,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717132155b43889897.jpg","file_size":5946,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:21:55","file_path":"http:\/\/static.yoshop.xany6.com\/20180717132155b43889897.jpg"}}]},"10009":{"category_id":10009,"name":"\u7bb1\u5305\u624b\u888b","parent_id":0,"image_id":0,"sort":90,"wxapp_id":10001,"create_time":"2018-07-17 10:14:59","update_time":"2018-07-17 10:14:59","image":null,"child":[{"category_id":10075,"name":"\u62c9\u6746\u7bb1","parent_id":10009,"image_id":10065,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:31:44","update_time":"2018-07-17 13:31:44","image":{"file_id":10065,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717133143a45f59273.jpg","file_size":11379,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:31:43","file_path":"http:\/\/static.yoshop.xany6.com\/20180717133143a45f59273.jpg"}},{"category_id":10076,"name":"\u65f6\u5c1a\u7537\u5305","parent_id":10009,"image_id":10066,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:31:59","update_time":"2018-07-17 13:31:59","image":{"file_id":10066,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717133158bf0436318.jpg","file_size":4243,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:31:58","file_path":"http:\/\/static.yoshop.xany6.com\/20180717133158bf0436318.jpg"}},{"category_id":10077,"name":"\u7537\u58eb\u8170\u5e26","parent_id":10009,"image_id":10067,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:32:13","update_time":"2018-07-17 13:32:13","image":{"file_id":10067,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171332128992b6822.jpg","file_size":9902,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:32:12","file_path":"http:\/\/static.yoshop.xany6.com\/201807171332128992b6822.jpg"}},{"category_id":10078,"name":"\u7537\u5305\u4e0a\u65b0","parent_id":10009,"image_id":10068,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:32:28","update_time":"2018-07-17 13:32:28","image":{"file_id":10068,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"20180717133227cfde21313.jpg","file_size":14739,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:32:27","file_path":"http:\/\/static.yoshop.xany6.com\/20180717133227cfde21313.jpg"}},{"category_id":10079,"name":"\u81ea\u8425\u5973\u5305","parent_id":10009,"image_id":10069,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:32:48","update_time":"2018-07-17 13:32:48","image":{"file_id":10069,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"201807171332472e5603287.jpg","file_size":4437,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:32:47","file_path":"http:\/\/static.yoshop.xany6.com\/201807171332472e5603287.jpg"}},{"category_id":10080,"name":"\u65b0\u6b3e\u53cc\u80a9\u5305","parent_id":10009,"image_id":10070,"sort":100,"wxapp_id":10001,"create_time":"2018-07-17 13:32:58","update_time":"2018-07-17 13:32:58","image":{"file_id":10070,"storage":"qiniu","group_id":0,"file_url":"http:\/\/static.yoshop.xany6.com","file_name":"2018071713325709a965823.jpg","file_size":7190,"file_type":"image","extension":"jpg","is_user":0,"is_delete":0,"wxapp_id":10001,"create_time":"2018-07-17 13:32:57","file_path":"http:\/\/static.yoshop.xany6.com\/2018071713325709a965823.jpg"}}]}},"sharingCatgory":[],"articleCatgory":[]});

    });

</script>
    </div>
    <!-- 内容区域 end -->

</div>
<script src="assets/common/plugins/layer/layer.js"></script>
<script src="assets/common/js/jquery.form.min.js"></script>
<script src="assets/common/js/amazeui.min.js"></script>
<script src="assets/common/js/webuploader.html5only.js"></script>
<script src="assets/common/js/art-template.js"></script>
<script src="assets/store/js/app.js?v=1.1.36"></script>
<script src="assets/store/js/file.library.js?v=1.1.36"></script>
</body>

</html>
