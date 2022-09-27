import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/style/reset.less';

// 字体图标
import '@/assets/iconfont/iconfont.css';

/**替换组件库中的时间插件 */
import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

Vue.use(Antd);
Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
