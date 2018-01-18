<template>
  <div id="app">
    <Header v-if="$route.meta.headerShow"></Header>
    <div class="container" v-bind:class="{'has-footer':$route.meta.footerShow,'has-header':$route.meta.headerShow}">
      <router-view></router-view>
    </div>
    <Footer v-if="$route.meta.footerShow"></Footer>
  </div>
</template>

<script type="es6">
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'app',
    data(){
      return{

      }
    },
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  @import "../src/assets/css/main.css";
  @import "../src/assets/css/normalize.css";

  .container{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }
  .has-header{
    top:45px;
  }
  .has-footer{
    bottom: 50px;
  }
</style>
