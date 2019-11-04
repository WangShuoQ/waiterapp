<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
<div class="home">
    <div class="head">
        <van-nav-bar
  title="首页"
  right-text="订单"
  @click-right="onClickRight"
/>
</div>
<div class="photo">
    <van-row>
        <van-col>
            <img src="../../assets/imgs/1.jpg" style="width:100%" alt="">
        </van-col>
    </van-row>
</div>  
<div class="function1">
  <van-grid :border="false" :column-num="4">
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-4.jpg" />
  </van-grid-item>
</van-grid>
</div> 
<!-- 当前待处理单 -->
<div>
  <van-panel title="当前待完成订单:">
  <div>
    <div slot="footer">
      <van-count-down :time="time" format="此单剩余时间:HH:mm:ss"/>
      <van-card
  num="1"
  price="200.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini" type="primary" @click="tc">已完成</van-button>
    <van-button size="mini" type="danger" @click="fq">放弃此单</van-button>
  </div>
</van-card>
</div>
</div>
</van-panel> 
  </div>  
  <!-- 推荐订单 -->
  <div>
  <van-panel title="推荐订单">
  <div>
    <div slot="footer">
      <van-count-down :time="time" format="此单剩余时间:HH:mm:ss"/>
       <van-card
  num="1"
  price="200.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini" type="primary" @click="jd">接单</van-button>
    <van-button size="mini" type="danger" @click="fq">忽视此单</van-button>
  </div>
</van-card>
</div>
</div>
</van-panel> 
  </div>  
    </div>
    <div>
      <br>
      <br>
      <br>
    </div>
    </van-pull-refresh>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
import { Dialog } from 'vant';
export default {
   components: {
    [Dialog.Component.name]: Dialog.Component
  },
   data() {
    return {
      isLoading: false,
      time: 30 * 60 * 60 * 1000,
    }
  },
  methods: {
    tc() {
      Dialog.alert({
      message: '该订单已完成'
      }).then(() => {
      // on close
      })
    },
     fq() {
      Dialog.alert({
      message: '订单忽视成功'
      }).then(() => {
      // on close
      })
    },
    jd() {
      Dialog.alert({
      message: '接单成功'
      }).then(() => {
      // on close
      })
    },
    onClickRight() {
        this.$router.push("/order");
    },
     onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
}
</script>