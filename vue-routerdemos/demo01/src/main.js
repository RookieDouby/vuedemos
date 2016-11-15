import Vue from 'vue';
import VueRouter from 'vue-router';
import routeConfig from './route-config';


Vue.use(VueRouter);
//1.create a router instance
const router = new VueRouter();
//2. map router config
router.map(routeConfig);
//3.create tempalte instance
const App = Vue.extend(require('./App.vue'));
//4.start app with router instance
router.start(App,'#app');