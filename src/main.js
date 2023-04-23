import { createApp } from 'vue';
import App from './App.vue';
import VueCookies from 'vue-cookies';
import router from './router';
import './assets/main.css';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import Vue3Toastify from 'vue3-toastify';
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
Amplify.configure(awsconfig);

createApp(App)
  .use(router)
  .use(VueCookies)
  .use(Vue3Toastify, {
    autoClose: 3000,
  })
  .use(LoadingPlugin)
  .mount('#app');
