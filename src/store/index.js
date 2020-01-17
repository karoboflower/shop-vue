import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        compList:[],
        selectedIndex:-2,
        page:{},
    },
    mutations: {
        incrementCompList(state,arg){
            state.compList=arg;
        },
        incrementCompListItem(state,arg){
            state.compList[state.selectedIndex].default[arg.type]=arg.value;
        },
        incrementPage(state,arg){
            state.page[arg.type]=arg.value;
        },
        incrementSelectedIndex(state,arg){
            state.selectedIndex=arg;
        }, 
    }
});