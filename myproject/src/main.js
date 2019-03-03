import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router';
import {routes} from './route';
 
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
	routes: routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
