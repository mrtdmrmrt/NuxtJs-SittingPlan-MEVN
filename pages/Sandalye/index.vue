<template>
    <div class="container">
      <SandalyeListesi 
      @addFloorEvent="showAddContainer"/>

      <SandalyeEkle 
      @hideAddContainerEvent ="showAdd = false"
      :class="{'show-add-container' : showAdd} "/>
    </div>
</template>
<script>
import SandalyeListesi from "@/components/SandalyeListesi"
import SandalyeEkle from "@/components/Ekle/SandalyeEkle"
export default {
    data(){
      return {
        showAdd : false,
    
      }
    },
    components :{
      SandalyeListesi,
      SandalyeEkle
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