<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from "@/components/Header"
export default {
  components : {
    Header
  }
}
</script>


<style>

.add-container {
      background-color: rgba(0, 0, 0, .8);
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: 1;
      visibility: hidden;
      /*visibility görünüp görünmemesini sağlar bu yüzden update de bununla oynuyca*/
    }
    .show-add-container{
      visibility: visible!important;
    }
</style>
