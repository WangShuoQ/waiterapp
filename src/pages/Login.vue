<template>
    <div class="login">                       <!-- 页面 -->
        <div class="header">             <!-- 头部 -->
            <div class="logo">               <!-- logo -->
            <img src="../assets/12.jpg" alt="">
            </div>                           <!-- logo -->
            <div class="title">员工端服务管理平台</div>   <!-- 标题 -->
            <div class="login-content">         <!-- 登录框 -->
            <!--  -->
             <p>用户名:waiter1   密码:123321</p>
           <!--  -->
           <van-cell-group>
                    <van-field
                        v-model="form.username"
                        required
                        clearable
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('question')"
                    />
                    <van-field
                        v-model="form.password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                    </van-cell-group>
                  
            </div>                              <!-- 登录框 -->  
            <div class="login-submit">          <!-- 提交 -->
      <van-button size="default" round style="width:30%" @click="submitHandler">登录</van-button>
            </div>                                      <!-- 提交 -->
            <div class="logo">               <!-- logo -->
            <img src="../assets/12.jpg" alt="">
            </div>                           <!-- logo -->
        </div>                              <!-- 头部 -->
    </div>                                   <!-- 页面 -->                            
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            form:{
                type:'waiter'
            }      
        }
    },
 methods:{
    ...mapActions("user",["login"]),
    submitHandler(){
      this.login(this.form)
      .then(()=>{
        this.$router.push("/manager/home")
      })
    }
  }
    }
</script>
<style scoped>
.header {
  box-sizing: border-box;
  height: 200px;
  color: #ffffff;
  text-align: center;
}
.header .logo {
  height: 50px;
  line-height: 50px;
}
.header .title {
  font-size: 28px;
}
.login-content {
  margin-bottom: 1em;
  margin-top: 200px;
}
.login-submit {
  text-align: center;
}
</style>