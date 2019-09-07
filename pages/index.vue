<template>
  <div class="container">
    <KatListesi 
    @addFloorEvent="showAddContainer"/>

    <KatEkle 
    @hideAddContainerEvent ="showAdd = false"
    :class="{'show-add-container' : showAdd} "/>
  </div>
</template>
<script>
import KatListesi from "@/components/KatListesi"
import KatEkle from "@/components/Ekle/KatEkle"

export default {
  data(){
    return {
      showAdd : false,
    
    }
  },
  components : {
    KatListesi,
    KatEkle
  },
  methods : {
     showAddContainer(){
      this.showAdd = true
     
    }

  }
  
}
</script>
