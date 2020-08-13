// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from './store/index';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'element-ui/lib/theme-chalk/index.css';
// froala富文本
import VueFroala from 'vue-froala-wysiwyg'
import jQuery from 'jquery'
Vue.use(Antd);
require('froala-editor/js/froala_editor.pkgd.min.js')
require('froala-editor/js/languages/zh_cn.js')
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')
require('font-awesome/css/font-awesome.min.css')

window.$ = window.jQuery = jQuery
Vue.use(VueFroala)

Vue.config.productionTip = false;

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
