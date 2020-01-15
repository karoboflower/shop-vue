import {menuLeft} from './components/common/menuLeft'
import {pageMenu} from './components/setting/pageMenu'
import {pageTitle} from './components/wxapp/pageTitle'
import {swiper} from './components/wxapp/swiper'//图片轮播
import {photo} from './components/wxapp/photo'//单图组
// import {window} from './components/wxapp/window'
import {essay} from './components/wxapp/essay'
import {headline} from './components/wxapp/headline'
import {search} from './components/wxapp/search'
import {announce} from './components/wxapp/announce'
import {navigation} from './components/wxapp/navigation'
import {goods} from './components/wxapp/goods'
import {auxiliarline} from './components/wxapp/auxiliarline'
import {blank} from './components/wxapp/blank'
import {swiperComponent} from './components/wxapp/swiperComponent'
import {photoComponent} from './components/wxapp/photoComponent'
import {windowComponent} from './components/wxapp/windowComponent'
import {essayComponent} from './components/wxapp/essayComponent'
import {headlineComponent} from './components/wxapp/headlineComponent'
import {searchComponent} from './components/wxapp/searchComponent'
import {announceComponent} from './components/wxapp/announceComponent'
import {navigationComponent} from './components/wxapp/navigationComponent'
import {goodsComponent} from './components/wxapp/goodsComponent'
import {auxiliarlineComponent} from './components/wxapp/auxiliarlineComponent'
import {blankComponent} from './components/wxapp/blankComponent'
import {Editor} from './components/common/wangeditor/index.js'//wangeditor组件修改源码
import {photoGallery} from './components/common/photoGallery'//图片组件封装

const install = function (Vue) {
    Vue.component(menuLeft.name, menuLeft)
    Vue.component(pageMenu.name, pageMenu)  
    Vue.component(swiper.name, swiper)  
    Vue.component(pageTitle.name, pageTitle)  
    Vue.component(photo.name, photo)
    Vue.component(window.name, window)
    Vue.component(essay.name, essay)
    Vue.component(headline.name, headline)
    Vue.component(search.name, search)
    Vue.component(announce.name, announce)
    Vue.component(navigation.name, navigation)
    Vue.component(goods.name, goods)
    Vue.component(auxiliarline.name, auxiliarline)
    Vue.component(blank.name, blank)
    Vue.component(swiperComponent.name, swiperComponent)
    Vue.component(photoComponent.name, photoComponent)
    Vue.component(windowComponent.name, windowComponent)
    Vue.component(essayComponent.name, essayComponent)
    Vue.component(headlineComponent.name, headlineComponent)
    Vue.component(searchComponent.name, searchComponent)
    Vue.component(announceComponent.name, announceComponent)
    Vue.component(navigationComponent.name, navigationComponent)
    Vue.component(goodsComponent.name, goodsComponent)
    Vue.component(auxiliarlineComponent.name, auxiliarlineComponent)
    Vue.component(blankComponent.name, blankComponent)
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
    // Vue.prototype.wangEditor=function(config){
    //     const wangEditor = Vue.extend(wangEditor)
    //     const newWangEditor=new wangEditor();
    //     newWangEditor.$mount(config.containId);
    //     if(config.defaultContent){
    //         //newWangEditor.editor.txt.html(config.defaultContent)
    //     }   
    // }
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install
}

