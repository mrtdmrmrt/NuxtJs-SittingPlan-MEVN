<template>
    <div class="container">
        <h1 class="title"> FISHBONE Sandalye Listesi </h1>
        <hr>
        <ul style="list-style-type:none;">
        
            <li><a href="#">Mert</a></li>
            <li><a href="#">İrem</a></li>
            <li><a href="#">Onur</a></li>
            <li><a href="#">Yeşim</a></li>
        </ul>
        <button @click="$emit('addFloorEvent')"  class="btn btn-outline-info">YENİ</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.btn{
    margin-top: 10px;
    margin-left: 30%;
}
li{
    margin-top: 10px;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>