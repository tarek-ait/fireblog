<template>
  <div class="modal">
    <div class="modal-content">
        <close @click="closePreview" class="icon"></close>
        <img :src="this.blogCoverPhoto" alt="">
    </div>
  </div>
</template>

<script>
import close from '../assets/Icons/times-circle-light.svg'
export default {
    name:"BlogCoverPhoto",
    components:{
        close,
    },
    methods:{
        closePreview(){
            this.$store.commit("openPhotoPreview");
        }
    },
    computed:{
        blogCoverPhoto(){
            return this.$store.state.blogPhotoFileURL;
        }
    }
}
</script>

<style lang="scss" scoped>

.modal{
    margin-top: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1000;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height:100%;
    position: absolute;
    
    .modal-content{
        background-color: #fff;
        position: relative;
        border-radius: 12px;
        width: 600px;
        height: 400px;
        padding: 50px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);

        .icon{
            width: 24px;
            height: auto;
            cursor: pointer;
            font-size: 24px;
            position: absolute;
            top: 15px;
            right: 15px;
            color: #303030;
        }

        img{
            margin-top: 16px;
            display: block;
            width: auto;
            height: 100%;
            /** there  is a shadow for this one to */
        }
    }
}
</style>