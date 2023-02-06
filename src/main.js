// import Vue from 'vue';
// import { RouterMount } from 'uni-simple-router';
// import App from './App.vue';
// import router from './router';

// App.mpType = 'app';

// Vue.config.productionTip = false;

// const app = new Vue({
//   ...App,
// });
// // v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// // #ifdef H5
// RouterMount(app, '#app');
// // #endif

// // #ifndef H5
// app.$mount(); // 为了兼容小程序及app端必须这样写才有效果
// // #endif

import Vue from 'vue';
import uView from 'uview-ui';
import App from './App.vue';

// 注册全局组件
import '@/config/component.config';

// import pageHead from './components/page-head.vue'; // 全局引用 page-head 组件

Vue.config.productionTip = false;
// Vue.component('page-head', pageHead); // 全局注册 page-head 组件，每个页面将可以直接使用该组件
App.mpType = 'app';
Vue.use(uView);

const app = new Vue({
  ...App,
});
app.$mount(); // 挂载 Vue 实例
