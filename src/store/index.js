import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        photoStyleObj:{},
        swiperStyleObj:{},
        windowStyleObj:{},
        searchStyleObj:{},
        announceStyleObj:{},
        navigationStyleObj:{},
        auxiliarlineStyleObj:{},
        blankStyleObj:{},
        goodsStyleObj:{},
        compList:[],
        selectedIndex:-2,


    },
    mutations: {
        incrementCompList(state,arg){
            state.compList=arg;
        },
        incrementCompListItem(state,arg){
            state.compList[state.selectedIndex].default[arg.type]=arg.value;
        },
        incrementSelectedIndex(state,arg){
            state.selectedIndex=arg;
        },
        // 轮播图样式
        incrementSwiperStyleObj(state, arg) {
            state.swiperStyleObj = arg;
        },
        // 单组图样式
        incrementPhotoStyleObj(state, arg) {
            state.photoStyleObj = arg;
        },
         // 橱窗样式
         incrementWindowStyleObj(state, arg) {
            state.windowStyleObj = arg;
        },
        //搜索框样式
        incrementSearchStyleObj(state, arg) {
            state.searchStyleObj = arg;
        },
         //公告样式
         incrementAnnounceStyleObj(state, arg) {
            state.announceStyleObj = arg;
        },
        //导航样式
        incrementNavigationStyleObj(state, arg) {
            state.navigationStyleObj = arg;
        
        },
        //辅助线
        incrementAuxiliarlineStyleObj(state, arg) {
            state.auxiliarlineStyleObj = arg;
        
        },
        //空白区域
        incrementBlankStyleObj(state, arg) {
            state.blankStyleObj = arg;
        },
        // 商品组
        incrementGoodsStyleObj(state, arg) {
            state.goodsStyleObj = arg;
        },
        
    }
});