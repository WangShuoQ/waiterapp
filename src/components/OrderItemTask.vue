<template>
  <div class="order_item">
    <van-row class="header"> 
      <van-col span="12">订单编号：{{data.id}}</van-col>
      <van-col span="12" class="status">{{data.status}}</van-col>
    </van-row>
    <van-row>
      <van-col :span="6">
        <img src="../assets/service.png" alt="">
      </van-col>
      <van-col :span="16" :offset="2">
        <p>擦玻璃、打扫卫生、清洗空调、{{data.customerId}}</p>
        <div>服务时间：{{data.orderTime | datefmt}}</div>
        <div v-if='data.address'>服务地址：{{data.address.province}} {{data.address.city}} {{data.address.area}} {{data.address.address}}</div>
        <div  v-if='data.address'>联系方式：{{data.address.telephone}}</div>  
      </van-col>
      <van-col :offset="9">
      <van-button type="primary" size="small" @click="tc">承接订单</van-button>
      <van-button type="warning" size="small" @click="sb">放弃此单</van-button>
      </van-col>

    </van-row>
    <div class="text-right">
      合计￥ {{data.total}}
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data:{type:Object}
  },
  methods:{
   tc() {
      Dialog.alert({
      message: '接单成功'
      }).then(() => {
      // on close
      })
    },
     sb() {
      Dialog.alert({
      message: '已放弃此单'
      }).then(() => {
      // on close
      })
    }
  }
}
</script>
<style scoped>
.order_item {
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #ffffff;
}
.order_item .header {
  line-height: 2.5em;
  font-size: 14px;
}
.order_item .header .status {
  text-align: right;
  font-size: 12px;
  color: #fd621f;
}
.order_item img {
  width: 100%;
  border-radius: 3px;
}


</style>