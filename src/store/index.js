import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import order from './order'
import user from './user'
import home from './home'





export default new Vuex.Store({
  modules:{
    order,
    user,
    home
  }
})
