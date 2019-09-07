<template>
    <div class="container">
       <MasaListesi 
       @addFloorEvent="showAddContainer"/>
       <MasaEkle 
        @hideAddContainerEvent ="showAdd = false"
        :class="{'show-add-container' : showAdd} "/>
    </div>
</template>
<script>
import MasaListesi from "@/components/MasaListesi"
import MasaEkle from "@/components/Ekle/MasaEkle"
export default {
  data(){
    return {
      showAdd : false,
    
    }
  },
    components :{
      MasaListesi,
      MasaEkle
    },
    methods : {
      showAddContainer(){
      this.showAdd = true
     
    }
  }
}
</script>
<style scoped>

</style>