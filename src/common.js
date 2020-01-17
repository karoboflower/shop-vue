import {menuLeft} from './components/common/menuLeft'
import {pageMenu} from './components/setting/pageMenu'
import {pageTitle} from './components/wxapp/pageTitle'
import {swiper} from './components/wxapp/swiper'//图片轮播
import {photo} from './components/wxapp/photo'//单图组
import {windowP} from './components/wxapp/window'//图片橱窗
import {videoP} from './components/wxapp/video'//视频组
import {essay} from './components/wxapp/essay'
import {headline} from './components/wxapp/headline'
import {search} from './components/wxapp/search'
import {announce} from './components/wxapp/announce'//公告组
import {navigation} from './components/wxapp/navigation'
import {goods} from './components/wxapp/goods'//商品组
import {auxiliarline} from './components/wxapp/auxiliarline'//辅助线
import {blank} from './components/wxapp/blank'//辅助空白
import {richText} from './components/wxapp/richText'//富文本
import {swiperComponent} from './components/wxapp/swiperComponent'
import {photoComponent} from './components/wxapp/photoComponent'
import {windowComponent} from './components/wxapp/windowComponent'
import {videoComponent} from './components/wxapp/videoComponent'
import {essayComponent} from './components/wxapp/essayComponent'
import {headlineComponent} from './components/wxapp/headlineComponent'
import {searchComponent} from './components/wxapp/searchComponent'
import {announceComponent} from './components/wxapp/announceComponent'
import {navigationComponent} from './components/wxapp/navigationComponent'
import {goodsComponent} from './components/wxapp/goodsComponent'
import {auxiliarlineComponent} from './components/wxapp/auxiliarlineComponent'
import {blankComponent} from './components/wxapp/blankComponent'
import {richTextComponent} from './components/wxapp/richTextComponent'

import {Editor} from './components/common/wangeditor/index.js'//wangeditor组件修改源码
import {photoGallery} from './components/common/photoGallery'//图片组件封装

const install = function (Vue) {
    Vue.component(menuLeft.name, menuLeft)
    Vue.component(pageMenu.name, pageMenu)  
    Vue.component(swiper.name, swiper)  
    Vue.component(pageTitle.name, pageTitle)  
    Vue.component(photo.name, photo)
    Vue.component(windowP.name, windowP)
    Vue.component(videoP.name, videoP)
    Vue.component(essay.name, essay)
    Vue.component(headline.name, headline)
    Vue.component(search.name, search)
    Vue.component(announce.name, announce)
    Vue.component(navigation.name, navigation)
    Vue.component(goods.name, goods)
    Vue.component(auxiliarline.name, auxiliarline)
    Vue.component(blank.name, blank)
    Vue.component(richText.name, richText)
    Vue.component(swiperComponent.name, swiperComponent)
    Vue.component(photoComponent.name, photoComponent)
    Vue.component(windowComponent.name, windowComponent)
    Vue.component(videoComponent.name, videoComponent)
    Vue.component(essayComponent.name, essayComponent)
    Vue.component(headlineComponent.name, headlineComponent)
    Vue.component(searchComponent.name, searchComponent)
    Vue.component(announceComponent.name, announceComponent)
    Vue.component(navigationComponent.name, navigationComponent)
    Vue.component(goodsComponent.name, goodsComponent)
    Vue.component(auxiliarlineComponent.name, auxiliarlineComponent)
    Vue.component(blankComponent.name, blankComponent)
    Vue.component(richTextComponent.name, richTextComponent)
    Vue.component(Editor.name, Editor)  
    Vue.component(photoGallery.name, photoGallery)

    window.windowphotoGallery={}
    window.windowphotoGallery.show=(config)=>{
     const photo = Vue.extend(photoGallery)
     const toastDom = new photo({
         el:document.createElement('div'),
         data(){
            return {
                isShowModel:config.isShowModel
            }
        },

    })
    document.body.appendChild(toastDom.$el)
    toastDom.$on('sure', function (msg) {
        if(config.onConfirm){
            config.onConfirm(msg)
        }
      })
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install
}

