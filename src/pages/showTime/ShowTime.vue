
<!-- PersonCenter.vue -->
<template>
  <div class="content">
    <div class="operate-btn">
      <ul>
        <li>
          <i class="icon text"></i>
          <p>撒狗粮</p>
        </li>
        <li>
          <i class="icon video"></i>
          <p>撒视频狗粮</p>
        </li>
      </ul>
    </div>

    <div class="show-list">
      <ul>
        <li v-for="item in vm.messages">
          <div class="item-title">
            <div class="user-logo">
              <img class="img" src="../../assets/image/publicIcon/loginImg.png">
            </div>
            <div class="item-info">
              <div class="user-name">
                <p><span>{{item.userName}}</span>分享狗粮:</p>
                <p>{{item.date}}</p>
              </div>
              <div class="care-status">
                <p>+关注</p>
              </div>
            </div>
          </div>
          <div class="item-content">
            <div class="show-text">
              <p>{{item.textContent}}</p>
            </div>
            <div class="show-img">
              <ul>
                <li v-for="img in item.showImg">
                  <img class="img" :src="img.url">
                </li>
              </ul>
            </div>
            <div class="operate-type">
              <ul>
                <li>
                  <i class="icon agree"></i>
                  <p>4496</p>
                </li>
                <li>
                  <i class="icon pingjia"></i>
                  <p>4496</p>
                </li>
                <li>
                  <i class="icon share"></i>
                  <p>4496</p>
                </li>
              </ul>
            </div>
          </div>

        </li>
      </ul>
    </div>
    <div v-if="showPullMore" class="pull-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <i class="icon loading"></i>
      <p>努力加载中...</p>
    </div>
  </div>
</template>

<script type="es6">

  export default {
    data () {
      return {
        showList:[],
        count: 0,
        messageList: [],
        messageNewList: [],
        busy: false,
        showPullMore:true,
        vm: {
          messages: [],
          pagination: {
            perPage: 7,
            currentPage: 1
          }
        }
      }
    },

    mounted(){
      this.init();
    },
    methods:{
      init(){
        /*services.getMessages({perPage: vm.pagination.perPage, page: vm.pagination.currentPage}, function (data) {
             vm.messages = data;
             })*/
        this.messageList = [{
          "loginImg":"",
          "userName":"大佬刘",
          "date":"1月9日",
          "textContent":"天下唯美食和音乐不能辜负，其他的都是浮云！",
          "showImg":[{
            "url":require('../../assets/image/home/flowers-1.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-3.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          },{
            "url":require('../../assets/image/home/flowers-5.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          }]
        },{
          "loginImg":"",
          "userName":"老夫的少女心",
          "date":"1月9日",
          "textContent":"你们有没有偷偷珍藏了很多特别喜欢的小句子吖？",
          "showImg":[{
            "url":require('../../assets/image/home/flowers-5.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          },{
            "url":require('../../assets/image/home/flowers-3.png')
          },{
            "url":require('../../assets/image/home/flowers-1.png')
          }]
        },{
          "loginImg":"",
          "userName":"Gherardo",
          "date":"1月9日",
          "textContent":"天空飘过五个字，那都不是事！",
          "showImg":[{
            "url":require('../../assets/image/home/flowers-1.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-3.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          }]
        },{
          "loginImg":"",
          "userName":"DWW即将拥有人鱼线。。。",
          "date":"1月9日",
          "textContent":"没有什么事情是一顿饭解决不了的，如果有的话，呢么酒两顿！",
          "showImg":[{
            "url":require('../../assets/image/home/flowers-1.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-3.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          },{
            "url":require('../../assets/image/home/flowers-5.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          },{
            "url":require('../../assets/image/home/flowers-1.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          }]
        },{
          "loginImg":"",
          "userName":"大佬刘",
          "date":"1月9日",
          "textContent":"天下唯美食和音乐不能辜负，其他的都是浮云！",
          "showImg":[{
            "url":require('../../assets/image/home/flowers-1.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-3.png')
          }]
        }];
        this.vm.messages = this.messageList;
      },
      loadMore(){
        this.vm.pagination.currentPage += 1;
        console.log(this.vm.pagination.currentPage);
        this.busy = true;
        this.messageNewList = [{
          "loginImg":"",
          "userName":"大佬刘new",
          "date":"1月9日",
          "textContent":"天下唯美食和音乐不能辜负，其他的都是浮云！",
          "showImg":[{
            "url":require('../../assets/image/home/flowers-1.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-3.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          },{
            "url":require('../../assets/image/home/flowers-5.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          }]
        },{
          "loginImg":"",
          "userName":"老夫的少女心new",
          "date":"1月9日",
          "textContent":"你们有没有偷偷珍藏了很多特别喜欢的小句子吖？",
          "showImg":[{
            "url":require('../../assets/image/home/flowers-5.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          },{
            "url":require('../../assets/image/home/flowers-3.png')
          },{
            "url":require('../../assets/image/home/flowers-1.png')
          }]
        },{
          "loginImg":"",
          "userName":"Gherardo new",
          "date":"1月9日",
          "textContent":"天空飘过五个字，那都不是事！",
          "showImg":[{
            "url":require('../../assets/image/home/flowers-1.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-3.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          }]
        },{
          "loginImg":"",
          "userName":"DWW即将拥有人鱼线new",
          "date":"1月9日",
          "textContent":"没有什么事情是一顿饭解决不了的，如果有的话，呢么酒两顿！",
          "showImg":[{
            "url":require('../../assets/image/home/flowers-1.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-3.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          },{
            "url":require('../../assets/image/home/flowers-5.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          },{
            "url":require('../../assets/image/home/flowers-1.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-4.png')
          }]
        },{
          "loginImg":"",
          "userName":"大佬刘 new",
          "date":"1月9日",
          "textContent":"天下唯美食和音乐不能辜负，其他的都是浮云！",
          "showImg":[{
            "url":require('../../assets/image/home/flowers-1.png')
          },{
            "url":require('../../assets/image/home/flowers-2.png')
          },{
            "url":require('../../assets/image/home/flowers-3.png')
          }]
        }];
        this.vm.messages = this.vm.messages.concat(this.messageNewList);
        setTimeout(() => {
          if(this.messageNewList <10){
            this.showPullMore = false;

          }
          this.busy = false; //为true则禁止无限滚动
        }, 5000);
      },

    },
    // 在components字段中，包含导入的子组件
    components: {

    }
  }
</script>

<style scoped>
  .content{
    width: 100%;
    heigt: 100%;
    display: flex;
    flex-direction: column;
  }
  .operate-btn{
    background-color: #fff;
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    margin-bottom: 10px;

  }
  .operate-btn ul{
    display: flex;
    flex-direction: row;
    align-items: center;

  }
  .operate-btn ul li{
    flex:0.5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    height: 45px;
    position: relative;

  }
  .operate-btn ul li p{
    padding: 0 10px;
  }
  .operate-btn ul li:first-child:after{
    position: absolute;
    right: 0;
    width: 1px;
    height: 60%;
    content: '';
    top:50%;
    transform: translate(0,-50%);
    background-color: #c4c4c4;

  }
  .addPerson{
    background-image: url("../../assets/image/showTime/addPerson.png");
    width: 24px;
    height: 24px;
  }
  .text{
    background-image: url("../../assets/image/showTime/text.png");
    width: 24px;
    height: 24px;
  }
  .video{
     background-image: url("../../assets/image/showTime/video.png");
     width: 24px;
     height: 24px;
   }


  .show-list{

  }
  .show-list ul{

  }
  .show-list>ul>li{
    padding: 10px 15px;
    background-color: #fff;
    border-bottom: 1px solid #d5d5d5;

  }
  .show-list>ul>li:first-child{
    border-top: 1px solid #d5d5d5;
  }
  .show-list>ul>li .item-title{
    display: flex;
    flex-direction: row;
    align-items: center;

  }
  .show-list>ul>li .item-title .user-logo{
    width: 50px;
    height: 50px;

  }
  .show-list>ul>li .item-title .user-logo img{
    border-radius: 50px;
  }
  .show-list>ul>li .item-info{
    flex:1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left:10px;

  }
  .show-list>ul>li .item-info .user-name{

  }
  .show-list>ul>li .item-info .user-name span{
    color: cornflowerblue;
    padding-right: 10px;

  }
  .show-list>ul>li .item-info .user-name p:last-child{
    font-size: 12px;
    color: #e6e6e6;
  }
  .show-list>ul>li .item-info .care-status{
    color:#d61e14;

  }

  .item-content{

  }
  .item-content .show-text{
    padding: 10px 0;

  }
  .item-content .show-text p{

  }
  .item-content .show-img{

  }
  .item-content .show-img ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-flow: row wrap;

  }
  .item-content .show-img ul li{
    flex: 0.33;
    min-width: 33.3333%;
    padding: 5px;

  }
  .item-content .show-img ul li img{

  }
  .item-content .operate-type{

  }
  .item-content .operate-type ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;

  }
  .item-content .operate-type ul li{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
  }
  .item-content .operate-type ul li p{
    padding: 0 10px;

  }


  .agree{
    background-image: url("../../assets/image/showTime/good.png");
    width: 20px;
    height: 20px;
  }
  .pingjia{
    background-image: url("../../assets/image/showTime/pingjia.png");
    width: 20px;
    height: 20px;
  }
  .share{
    background-image: url("../../assets/image/showTime/share.png");
    width: 20px;
    height: 20px;
  }



</style>

