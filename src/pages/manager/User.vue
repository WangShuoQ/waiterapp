<template>
    <div class="user">  
        <!--  -->
        <van-nav-bar
            title="我的"
            left-text="返回"
            left-arrow
            @click-left="onClickBack"
        />
        <!--  -->
         <!--  -->
         <div class="head">
             <van-image  
             round   
             width="100"
             height="100"         
             src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
         </div>  
         <van-divider>waiter1</van-divider>  
      <!--  -->
      <div class="username"></div>
  <van-cell title="我的收入" />
  <van-cell title="我的订单" @click="listHandler" />
  <van-cell title="退出登录" @click="BackHandler" />
        </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed:{
    ...mapState('user',['info','token'])
  },
  methods: {
        ...mapActions('user',['logout']),
    onClickBack() {
      this.$router.push("/order")
    },
    listHandler(){
      this.$router.push({path:"/order"})
    },

    BackHandler(){
        // 1. 退出
      this.logout()
      .then(()=>{
        // 2. 跳转到登录
        this.$router.push({path:"/"})
      })
    }
  }
}
</script>
<style scoped>
.head {
  margin-left: 38%;
  margin-top: 10%;
}
.username{
    margin-top: 10%;
}
</style>