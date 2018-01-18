<template>
  <footer class="footer">
    <ul>
      <router-link :to="{name:'Home'}" tag="li" exact>
        <i class="icon home" :class="{'homeActive':$route.name == 'Home'}"></i>
        <p :style="{'color':$route.name == 'Home'?'#fff':''}">首页</p>
      </router-link>
      <router-link :to="{name:'Discovery'}" tag="li">
        <i class="icon discovery" :class="{'discoveryActive':$route.name == 'Discovery'}"></i>
        <p :style="{'color':$route.name == 'Discovery'?'#fff':''}">发现</p>
      </router-link>

      <router-link :to="{name:'ShowTime'}" tag="li">
        <i class="icon show" :class="{'showActive':$route.name == 'ShowTime'}"></i>
        <p :style="{'color':$route.name == 'ShowTime'?'#fff':''}">花圈</p>
      </router-link>
      <router-link :to="{name:'PersonCenter'}" tag="li">
        <i class="icon person" :class="{'personActive':$route.name == 'PersonCenter'}"></i>
        <p :style="{'color':$route.name == 'PersonCenter'?'#fff':''}">我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<style>
  .footer{
    display: flex;
    align-items: center;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top:1px solid #d5d5d5;
    background-color: rgba(0,0,0,.7);

  }
  .footer ul{
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
  }
  .footer ul li{
    height: 100%;
    flex:0.25;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .footer ul li p{
    font-size: 12px;
    color:#c4c4c4;
  }
  .home{
    background-image:url(../assets/image/publicIcon/home.png);
    width: 25px;
    height: 25px;
  }
  .homeActive{
    background-image:url(../assets/image/publicIcon/homeActive.png);
    width: 25px;
    height: 25px;
  }
  .discovery{
    background-image:url(../assets/image/publicIcon/discovery.png);
    width: 25px;
    height: 25px;
  }
  .discoveryActive{
    background-image:url(../assets/image/publicIcon/discoveryActive.png);
    width: 25px;
    height: 25px;
  }
  .person{
    background-image:url(../assets/image/publicIcon/person.png);
    width: 25px;
    height: 25px;
  }
  .personActive{
    background-image:url(../assets/image/publicIcon/personActive.png);
    width: 25px;
    height: 25px;
  }
  .show{
    background-image:url(../assets/image/publicIcon/show.png);
    width: 25px;
    height: 25px;
  }
  .showActive{
    background-image:url(../assets/image/publicIcon/showActive.png);
    width: 25px;
    height: 25px;
  }

</style>
<script type="es6">
  export default {
    data () {
      return {
      }
    },
    mounted(){
    },
    methods:{
    },
    // 在components字段中，包含导入的子组件
    components: {
    }
  }
</script>
