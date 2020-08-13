import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
       param:{
           msg:'欢迎来到祖安',
           msg2:'尼玛今天八次爆炸,照亮台湾海峡,组成爱我中华'
       }
    },
    mutations,
    actions
})