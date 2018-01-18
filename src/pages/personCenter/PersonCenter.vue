
<!-- PersonCenter.vue -->
<template>
  <div class="content">
    <div class="person-title">
      <div class="user-title">
        <div class="login-img">
          <img class="img" src="../../assets/image/publicIcon/loginImg.png">
        </div>
        <div class="login-info">
          <div class="user-info">
            <h3>Gherardo</h3>
            <div class="user-level">
              <p>Lv1</p>
            </div>

          </div>
          <div class="sign-content">
            <div class="sign-in">
              <i class="icon integral"></i>
              <p>签到</p>
            </div>
          </div>
        </div>
      </div>
      <div class="type-list">
        <ul>
          <li>
            <label>动态</label>
            <p>0</p>
          </li>
          <li>
            <label>关注</label>
            <p>0</p>
          </li>
          <li>
            <label>粉丝</label>
            <p>0</p>
          </li>
          <li>
            <i class="icon "></i>
            <p>我的资料</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="business-list">
      <ul>
        <li>
          <div class="business-icon">
            <i class="icon message"></i>
          </div>
          <p>我的消息</p>
        </li>
      </ul>
    </div>
    <div class="business-list">
      <ul>
        <li>
          <div class="business-icon">
            <i class="icon vip"></i>
          </div>
          <p>VIP会员</p>
        </li>
        <li>
          <div class="business-icon">
            <i class="icon shopping"></i>
          </div>
          <p>商城</p>
        </li>
        <li>
          <div class="business-icon">
            <i class="icon scanner"></i>
          </div>
          <p>扫一扫</p>
        </li>
      </ul>
    </div>
    <div class="business-list">
      <ul>
        <li>
          <div class="business-icon">
            <i class="icon setting"></i>
          </div>
          <p>设置</p>
        </li>
        <li>
          <div class="business-icon">
            <i class="icon about"></i>
          </div>
          <p>关于</p>
        </li>
      </ul>
    </div>

  </div>
</template>

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

<style scoped>
  .content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .person-title{
    background-color: #fff;
    margin-bottom: 10px;
  }
  .person-title .user-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;

  }
  .person-title .user-title .login-img{
    width: 80px;
    height: 80px;

  }
  .person-title .user-title .login-img img{
    border-radius: 80px;

  }
  .login-info{
    flex:1;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;

  }
  .login-info .user-info{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;

  }
  .login-info .user-info h3{
    margin: 0;
    padding: 10px 0;
    font-size: 20px;
    font-weight: normal;

  }
  .login-info .user-info p{

  }
  .user-level{

  }
  .user-level p{

  }
  .login-info .sign-content{
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .login-info .sign-content .sign-in{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #d61e14;
    border:1px solid #d61e14;
    border-radius: 8px;
    height: 30px;padding: 0 10px;

  }
  .login-info .sign-content .sign-in p{
    padding: 0 5px;

  }
  .integral{
    background-image: url("../../assets/image/publicIcon/integral.png");
    width: 20px;
    height: 20px;
  }
 .type-list{
   padding: 10px 15px;
   border-top:1px solid #d7d7d7;
   border-bottom: 1px solid #d7d7d7;

 }
  .type-list ul{
    display: flex;
    flex-direction: row;
    align-items: center;

  }
  .type-list ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.25;
    border-right: 1px solid #d7d7d7;
  }
  .type-list ul li:last-child{
    border-right:none;
  }
  .type-list ul li label{
    color: #c4c4c4;
  }
  .business-list{
    background-color: #fff;
    margin-bottom: 10px;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;

  }
  .business-list ul{
    padding-left: 15px;

  }
  .business-list ul li{
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
  }
  .business-list ul li:last-child{
    border-bottom: none;
  }
  .business-list ul li:after{
    content: '';
    position: absolute;
    top:50%;
    transform: translate(0,-50%);
    right: 15px;
    display: block;
    background-image: url("../../assets/image/personCenter/rightArrow.png");
    width: 24px;
    height: 24px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .business-list ul li .business-icon{
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .business-list ul li p{

  }

  .message{
    background-image: url("../../assets/image/personCenter/message.png");
    width: 20px;
    height: 20px;
  }
  .vip{
    background-image: url("../../assets/image/personCenter/vip.png");
    width: 20px;
    height: 20px;
  }
  .shopping{
    background-image: url("../../assets/image/personCenter/shopping.png");
    width: 20px;
    height: 20px;
  }
  .setting{
    background-image: url("../../assets/image/personCenter/setting.png");
    width: 20px;
    height: 20px;
  }
  .about{
    background-image: url("../../assets/image/personCenter/about.png");
    width: 20px;
    height: 20px;
  }
  .scanner{
    background-image: url("../../assets/image/personCenter/seanner.png");
    width: 20px;
    height: 20px;
  }



</style>

