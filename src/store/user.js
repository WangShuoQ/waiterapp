import Vue from 'vue';
import { Image } from 'vant';
import {post_json,get,post} from '../http/axios'
import {getToken,setToken,removeToken} from '../utils/auth'

Vue.use(Image);

export default {
  namespaced:true,
  state:{
    //0. token的初始化值为本地缓存中保存的token信息
    token:getToken(),
    info:{} //用户信息
  },
  mutations:{
    refreshInfo(state,info){
      state.info = info;
    },
    refreshToken(state,token){
      state.token = token;
    }
  },
  actions:{
    // 登录
    async login(context,payload){
      //1.登录
      let response = await post_json("/user/login",payload);
      let token = response.data.token;
      // 2. 将token缓存起来 localStorage
      setToken(token);
      // 3. token设置到状态机  
      context.commit("refreshToken",token);
    },
    // 通过token获取用户基本信息info
    async info(context,token){
      let response = await get("/user/info",{token});
      //将用户信息设置到info中
      await context.commit("refreshInfo",response.data)
    },
    // 退出
    async logout(context){
      // 1. 请求后台退出
      await post("/user/logout");
      // 2. 移除本地缓存中的token
      removeToken();
      // 3. 移除状态机中的token以及info
      context.commit('refreshInfo','');
      context.commit("refreshToken",{});
    }
  }
}