<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="order">
        <div class="head">
                   <van-nav-bar
  title="订单"
  left-text="首页"
  right-text="我的"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
        </div>
        <div class="tab">
<van-tabs v-model="active" >
  <van-tab title="所有订单">  <!--  -->
   <briup-order-item v-for='order in orders' :key="order.id"  :data='order'></briup-order-item>
  </van-tab>   <!--  -->

  <van-tab title="待分配订单">
     <briup-order-item v-for='order in ordersStatusFilter("待派单")' :key="order.id"  :data='order'></briup-order-item>
  </van-tab>

  <van-tab title="可接订单">
         <briup-order-item-task v-for='order in ordersStatusFilter("待接单")' :key="order.id"  :data='order'></briup-order-item-task>
  </van-tab>

  <van-tab title="待完成订单">
         <briup-order-item-complete v-for='order in ordersStatusFilter("待服务")' :key="order.id"  :data='order'></briup-order-item-complete>
  </van-tab>

  <van-tab title="已完成订单">
     <briup-order-item v-for='order in ordersStatusFilter("已完成")' :key="order.id"  :data='order'></briup-order-item>
  </van-tab>
  
</van-tabs>
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
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
     data() {
    return {
       isLoading: false,
      active: 0,
      data:{type:Object}
    }
  },
  computed:{
    // 映射 store->vue
        ...mapState('order',['orders']),
        ...mapGetters('order',['ordersStatusFilter'])
  },
  created(){
    this.findAllOrders();
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    ...mapActions('order',['findAllOrders']),
    onClickLeft() {
        this.$router.push("/manager/home");
    },
    onClickRight() {
        this.$router.push("/user");
    }
  }
}
</script>