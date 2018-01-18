
<!-- Lggin.vue -->
<template>
  <div class="content login_content">
    <div class="login_logo">
      <img class="img" src="../../assets/image/login/login_logo.png">
    </div>
    <div class="login_form">
      <div class="login_input">
        <i class="icon userName"></i>
        <input v-model="userName" placeholder="请输入用户名">
      </div>
      <div class="login_input">
        <i class="icon password"></i>
        <input v-model="passWord" placeholder="请输入密码">
      </div>
      <div class="forget_register">
        <div class="forget_password">
          <p>忘记密码？</p>
        </div>
        <div class="register">
          <p>去注册</p>
        </div>
      </div>

      <div class="login_btn" @click="login(userName,passWord)">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script type="es6">

  export default {
    data () {
      return {
        userinfo:{},
        userName:'',
        passWord:''
      }
    },
    mounted(){
    },
    methods:{
      login(userName,passWord){
        this.userinfo = {"name":userName,"password":passWord};
        //this.$store.dispatch('getUserInfo',this.userinfo);
        this.$router.push({path:'/home'});
      }
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
  .login_content{
    background-image: url(../../assets/image/login/login_bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    vertical-align: middle;
  }
  .login_logo{
    padding: 20% 0;
    width: 50%;
    margin: 0 auto;

  }
  .login_form{

  }
  .login_form .login_input{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    width: 60%;
    padding: 15px 0;
    position: relative;
  }
  .login_form .login_input i{
    position: absolute;
    left: 10px;
    top: 50%;
    margin-top: -8px;

  }
  .login_form .login_input input{
    flex: 1;
    height: 40px;
    border-color: rgba(255,255,255,.8);
    background-color: rgba(255,255,255,.2);
    border-radius: 20px;
    padding-left: 30px;
    border-style:solid;
    color:#fff;

  }
  .forget_register{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;

  }
  .forget_register .forget_password{
    flex: 0.5;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px;
    position: relative;
  }
  .forget_register .forget_password:after{
    content: '';
    position: absolute;
    width: 1px;
    height: 40%;
    right: 0;
    background-color: #fff;
    top:50%;
    transform:translate(0,-50%);

  }
  .forget_register .register{
    flex: 0.5;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;

  }

  .login_btn{
    padding: 15px 0;
    text-align: center;
  }
  .login_btn button{
    width: 35%;
    height: 35px;
    border:none;
    border-radius: 20px;
    background-color: #FDF001;
    color:#D72117;
  }
  .userName{
    background-image: url(../../assets/image/login/user.png);
  }
  .password{
    background-image: url(../../assets/image/login/password.png);
  }


</style>

