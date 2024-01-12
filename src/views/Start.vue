<script>
import showPerson from '../components/showPerson.vue'
</script>

<template>
  <div id="page">
    <div id="addr"></div>
    <router-link to="/showPerson">
      <img src="../images/zhenxia.jpg" alt="跳转至个人展示" srcset="" id="zhenxia">
    </router-link>
    </div>
</template>

<style scoped>
#page {
  margin: 0;
  padding: 0;
  height: 98vh;
  background-image: url("src/images/preview.jpg") ;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}
#zhenxia {
  border-radius: 50%;
  position: relative;
  left: 600px;
  top: 130px;
  image-rendering: crisp-edges;
}
</style>
