<template>
    <div id="background">
      <Carousel />
      <div class="nameList">
        <ul>
          <li v-for="name in names" :key="name">{{name}}pangemiName</li><!-- name是后端传过来的数组，这里使用v-for遍历，优于多个li100000000%！！ -->
          <li>番名</li>
        </ul>
      </div>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
export default {
  components: { Carousel },
  data(){
    return{
      names:Array,
    }
  }
}

</script>

<style scoped>
li{
  position: absolute;
  top: 50%;
  right: 300px;
}
</style>