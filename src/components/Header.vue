<template>
  <header class="header">
    <div class="left-menu" @click="goBack()">
      <div class="back" v-if="!($route.name === 'Home' || $route.name === 'Discovery'|| $route.name === 'PersonCenter' || $route.name === 'More')">
        <i class="icon goBack"></i>
      </div>
    </div>
    <div class="header-content">
      <p>{{$route.meta.titleName}}</p>
    </div>
    <div class="right-menu">
    </div>
  </header>
</template>

<style>
  .goBack{
    background-image: url("../../src/assets/image/publicIcon/back.png");
  }
  .header{
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #d61e14;
    position: fixed;
    width: 100%;
    flex:1;
    top: 0;
    z-index: 99;
  }
  .left-menu{
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .back{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-content{
    width: 100%;
    flex:1;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .right-menu{
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<script type="es6">
  export default {
    data() {
      return {
        messageData:0,
        titleName:'',
        hasBack:''

      }
    },
    mounted () {
      //获取消息数量
      this.getMessageData();
    },
    methods: {
      goBack(){
        this.$router.back(-1)
      },
      getMessageData(){

      },
    }
  }
</script>
