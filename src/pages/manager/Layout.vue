<template>
<div class="manager">
    <div class="content">
         <router-view/>
    </div>   
    <div>
       <van-tabbar @change="tabChangeHandler">
       <van-tabbar-item name="/manager/home" icon="star-o">首页</van-tabbar-item>
       <van-tabbar-item name="/order" icon="search">订单</van-tabbar-item>
       <van-tabbar-item name="/user" icon="user-o">我的</van-tabbar-item>
       </van-tabbar>
    </div>
</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    created(){
        
    },
    data() {
        return {

        }
    },
    methods: {
        ...mapState('user',['info']),
        tabChangeHandler(path){
                this.$router.push({path}) ;
                console.log(path)                      
        }
    }
}
    
</script>