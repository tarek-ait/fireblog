<template>
  <div class="form-wrap">
      <form class="login">
        <p class="login-register">
          Don't have an account
          <router-link class="router-link" :to="{name : 'Register'}">Register</router-link>
        </p>
        <h2>Login to Fireblog</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <email class="icon"></email>
          </div>
          <div class="input">
            <input type="text" placeholder="Password" v-model="password">
            <password class="icon"></password>
          </div>
          <div class="error" v-show="error">{{ this.errorMsg }}</div>
        </div>
        <router-link class="forgot-password"  :to="{name : 'ForgotPassword'}">
          Forgot your password?
        </router-link>
        <button @click.prevent="signIn()">Sign in</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>

import email from '../assets/Icons/envelope-regular.svg'
import password from '../assets/Icons/lock-alt-solid.svg'
import firebase from 'firebase/app'
import "firebase/auth"


export default {
    name : "Login",
    components: {
      email,
      password
    },
    data(){
      return {
        email :"",
        password : "",
        error : null,
        errorMsg : ""
       
      }
    },
    methods:{
      signIn() {
  firebase
    .auth()
    .signInWithEmailAndPassword(this.email, this.password)
    .then(() => {
      // Redirect to Home after successful login
      this.$router.push({ name: 'Home' });
      this.error = false; // Reset error state
      this.errorMsg = ""; // Clear error message
      this.$store.state.navigation = true; // display once again the navigation and the footer 
      // Log UID of the current user (may not be immediately available)
    })
    .catch((err) => {
      // Handle login errors
      this.error = true;
      this.errorMsg = err.message;
      console.error("Error signing in:", err);
    });
},


    }
}


</script>

<style lang="scss">  /**since the three veiews will have the same style */

.form-wrap{
  overflow:hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register{
    margin-bottom: 32px;

    .router-link{
      color: #000;
    }
  }



  form {
    flex-direction: column;
    padding: 0 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (min-width: 900px){
        padding: 0 50px;
    }

    h2{
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px){
          font-size: 40px;
      }
    }

    .inputs{
      width: 100%;
      max-width: 320px;

      .input{
          position: relative;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;


          input{
            width: 100%;
            border: none;
            align-items: center;
            justify-content: center;
            background-color: #f2f7f6;
            padding: 4px 4px 4px 36px;
            height: 50px;

            &:focus{
              outline: none;
            }
          }

          .icon{
            width: 12px;
            margin-top: 18px;
            position: absolute;
            left: 12px;
          }
      }
    }

    .forgot-password{
      text-decoration: none;
      color: black;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;   /**16 top 0 right and left and 32 top */
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;


      &:hover{
        border-color: #303030;
      }
    }

    /**now we work for the angle  */

    .angle{
      display: none;
      position: absolute;
      background-color: white;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width:900px){
        display: initial;
      }
    }
  }
  .background{
      display: none;
      flex: 2;
      background-size: cover;
      background-image: url('../assets/background.png');
      width: 100%;
      height: 100%;
      @media(min-width:900px){
        display: initial;
      }
    }
}








</style>