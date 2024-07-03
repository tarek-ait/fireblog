<template>
  <div class="reset-password">

    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"></Modal>  <!-- run the function close modal whenever the event is up -->
    <Loading v-if="loading"></Loading>
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to 
          <router-link class="router-link" :to="{name : 'Login'}">Login</router-link>
        </p>
        <h2>Reset your password</h2>
        <p>Forgot your password? enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <email class="icon"></email>
          </div>
        </div>
        <button @click.prevent="resetPassword()">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div> 

    
  </div>


  
</template>

<script>

import email from '../assets/Icons/envelope-regular.svg'
import Modal from '../components/modal.vue'
import Loading from '../components/Loading.vue'
import firebase from 'firebase/app'
import "firebase/auth"



export default {
  name : "ForgotPassword",
  components:{
    email,
    Modal,
    Loading
  },
  data(){
    return {
      email:null,
      modalActive: false,
      modalMessage : "",
      loading:null,
    }
  },
  methods:{
    closeModal(){
      this.modalActive = !this.modalActive
      this.email=""
    },
    resetPassword(){  // we will use only one then 
      this.loading = true;
      firebase.auth().sendPasswordResetEmail(this.email).then(() => {
        this.modalMessage("you should revcieve an email");
        this.loading = false;
        this.modalActive = true;
      }).catch(err => {
        this.modalMessage = err.message;
        this.loading = false;
        this.modalActive = true;
      })
    }
  }
}

</script>

<style lang="scss">
.reset-password{
  position: relative;
  .form-wrap{
    .reset{
      h2{
        margin-bottom: 8px;
      }
    }
  }
}

</style>