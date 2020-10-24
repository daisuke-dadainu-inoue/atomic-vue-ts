import Vue from 'vue';
import router from '@/front/route';
import store from '@/front/store';
import App from '@/front/component/pages/App.vue';
import { Loading, Notification, Message, MessageBox } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/ja';
import locale from 'element-ui/lib/locale';

// configure language
locale.use(lang);

// set
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

new Vue({
  render: (h) => h(App),
  router: router,
  store: store,
  components: {
    app: App,
  },
}).$mount('#app');
