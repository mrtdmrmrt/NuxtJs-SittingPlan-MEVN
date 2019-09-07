<template>
    <div class="container">
        <h1 class="title"> Kat Listesi </h1>
        <hr>
        <ul style="list-style-type:none;">
            
            <nuxt-link
            to="/masa"
            tag="a"
            class="">
                Kat 1
            </nuxt-link>
        
            <li><a href="#">Kat 2</a></li>
            <li><a href="#">Kat 3</a></li>
            <li><a href="#">Kat 4</a></li>
            <li><a href="#">Kat 5</a></li>
        </ul>
        <button @click="$emit('addFloorEvent')" class="btn btn-outline-info">YENİ</button>
    </div>
</template>


<script>
export default {
    
}
</script>


<style>
.btn {
    margin-top : 10px;
    margin-left: 40%;
}

li{
    margin-top : 10px;
}
.title {
  font-family : 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>