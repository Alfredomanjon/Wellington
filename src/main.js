import { createApp } from 'vue';
import App from './App.vue';
import VueCookies from 'vue-cookies';
import router from './router';
import './assets/main.css';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

createApp(App).use(router).use(VueCookies).mount('#app');
