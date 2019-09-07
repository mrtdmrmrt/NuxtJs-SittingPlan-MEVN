<template>
    <div class="add-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <div class="card shadow pt-2 pb-2" style="width: 30rem;">
            <div class="card-body">
                <h5 class="card-title">FISHBONE İçin Sandalye Ekle</h5>
                <input type="text" class="form-control mt-3 mb-3" placeholder="Sandalye ismi giriniz..">
                <a @click="$emit('hideAddContainerEvent',true)"  class="card-link btn btn-sm btn-outline-danger">Vazgeç</a>
                <a @click="$emit('hideAddContainerEvent',true)" class="card-link btn btn-sm btn-outline-warning">Ekle</a>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>
<style scoped>
a {
    cursor: pointer;
}
</style>