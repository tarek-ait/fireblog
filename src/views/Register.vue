<template>
    <div class="form-wrap">
      <form class="register">
        <p class="login-register">
          Already have an account have an account
          <router-link class="router-link" :to="{name : 'Login'}">Login</router-link>
        </p>
        <h2>Create your fireblog account</h2>
        <div class="inputs">
          
          <div class="input">
            <input type="text" placeholder="first name" v-model="firstName">
            <user class="icon"></user>
          </div>
          <div class="input">
            <input type="text" placeholder="last name" v-model="lastName">
            <user class="icon"></user>
          </div>
          <div class="input">
            <input type="text" placeholder="user name" v-model="userName">
            <user class="icon"></user>
          </div>
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
        <button @click.prevent="register()">Sign up</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>
import email from '../assets/Icons/envelope-regular.svg'
import password from '../assets/Icons/lock-alt-solid.svg'
import user from '../assets/Icons/user-alt-light.svg'
import firebase from 'firebase/app'
import "firebase/auth"
import  db from '../firebase/firebaseInit'

export default {
    name : "Register",
    components: {
      email,
      password,
      user
    },
    data(){
      return {
        firstName:"",
        lastName:"",
        userName:"",
        email :"",
        password : "",
        error : null,
        errorMsg : ""
      }
    },
    methods :{
            async register() {
            if (
              this.email !== "" &&
              this.password !== "" &&
              this.firstName !== "" &&
              this.lastName !== "" &&
              this.userName !== "" // Fixed variable name here
            ) {
              this.error = false;
              this.errorMsg = "";
              this.$store.state.navigation = true;
              
              try {
                const createUser = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
                const userData = {
                  firstName: this.firstName,
                  lastName: this.lastName,
                  username: this.userName, 
                  email: this.email,
                };
                
                await db.collection("users").doc(createUser.user.uid).set(userData); // we set the user data in here 
                this.$router.push({ name: "Home" });
                
              } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
              }
              
            } else {
              this.error = true;
              this.errorMsg = "Please fill out all the fields!";
            }
          }

    }
}

</script>


<style lang="scss">

</style>
