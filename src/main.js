import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'
import { Dialog } from 'vant';
Vue.use(Dialog);

// 全局注册自定义组件
import OrderItem from './components/OrderItem'
Vue.component('briup-order-item',OrderItem)
import OrderItemTask from './components/OrderItemTask'
Vue.component('briup-order-item-task',OrderItemTask)
import OrderItemComplete from './components/OrderItemComplete'
Vue.component('briup-order-item-complete',OrderItemComplete)


// 全局注册过滤器
Vue.filter('datefmt',function(val){
  if(val){
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
  }
  return val;
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
