
<!-- PersonCenter.vue -->
<template>
  <div class="content">

    <div class="item-list">
      <ul>
        <li
            v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
            :key="color.text">
          <div class="item-content" @click="goItem(color)">
            <p>{{color.text}}</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script type="es6">

  export default {
    data () {
      return {
        colors: []
      }
    },

    mounted(){
      this.getTypelist();
    },
    methods:{
      getTypelist(){
        this.colors = [{
          "text":"花海"
        },{
          "text":"花世界"
        },{
          "text":"兰花"
        },{
          "text":"杜鹃花"
        },{
          "text":"蜜桂花"
        },{
          "text":"百合花"
        },{
          "text":"仙人掌"
        },{
          "text":"地中海"
        },{
          "text":"人山人海"
        }]
      },
      goItem(data){
        alert(data.text);
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
  .item-list{


  }
  .item-list ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-flow: row wrap;
  }
  .item-list ul li{
    flex: 0.3333;
    min-width: 33.33333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;

    color: #fff;
    padding: 5px;

  }
  .item-list ul li .item-content{
    width: 100%;
    height: 100%;
    background-color: #d61e14;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;;

  }




</style>

