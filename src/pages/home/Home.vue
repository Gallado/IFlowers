
<!-- Home.vue -->
<template>
  <div class="content">
    <div class="swiper-content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/image/home/flowers-1.png" class="" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="../../assets/image/home/flowers-2.png" class="" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="../../assets/image/home/flowers-3.png" class="" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="../../assets/image/home/flowers-4.png" class="" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="../../assets/image/home/flowers-5.png" class="" alt=""/>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
      </div>
    </div>
    <div class="flower-type">
      <ul>
        <li @click="buyFlower()">
          <i class="icon flower"></i>
          <p>找花店</p>
        </li>
        <li>
          <i class="icon book"></i>
          <p>看花语</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
  import Swiper from '../../../static/js/swiper-3.3.1.min.js'

  export default {
    data () {
      return {
        listImg:[],
      }
    },

    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable:true,
        autoplay:3000

      });
    },
    methods:{
      getImgList(){
        this.listImg = [{
          "url":"../../assets/image/home/flower-1.png"
        },{
          "url":"../../assets/image/home/flower-2.png"
        },{
          "url":"../../assets/image/home/flower-1.png"
        },{
          "url":"../../assets/image/home/flower-2.png"
        }]
      },
      buyFlower(){

      }
    },
    // 在components字段中，包含导入的子组件
    components: {

    }
  }
</script>

<style scoped>
  @import '../../../static/js/swiper-3.3.1.min.css';
  .content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
  .swiper-content{
    height: 180px;
    width: 100%;
  }
  .swiper-container{
    height: 100%;
  }
  .swiper-pagination-customs-active {
    opacity: 1;
    background-color: #F78E00;
  }

  .flower-type{
    margin: 10px 0;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;

  }
  .flower-type ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;

  }
  .flower-type ul li{
    flex:0.5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
  }
  .flower-type ul li:after{
    position: absolute;
    content: '';
    width: 1px;
    height: 35px;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
    background-color: #d5d5d5;

  }
  .flower-type ul li p{
    padding: 0 10px;

  }
  .flower{
    background-image: url("../../assets/image/home/flowers.png");
    width: 20px;
    height: 20px;
  }
  .book{
    background-image: url("../../assets/image/home/book.png");
    width: 20px;
    height: 20px;
  }


</style>

