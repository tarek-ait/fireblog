<template>
  <header>
    <nav class="container"> <!-- the container style is  in the app vue file-->
        <div class="brading">
            <router-link class="header" :to="{ name :'Home'}">fireBlogs</router-link>
        </div>
       <div class="nav-links" style="text-align: center;"><!-- for the website view -->
        <ul v-show="!mobile">
            <router-link class="link" :to="{name: 'Home'}">Home</router-link>
            <router-link class="link" :to="{name: 'Blogs'}">Blogs</router-link>
            <router-link class="link" v-if="this.$store.state.user" :to="{name : 'CreatePost'}">Create Post</router-link>
            <router-link class="link" v-if="!this.$store.state.user" :to="{name: 'Login'}">Login/Register </router-link>
        </ul>

        <div class="profile" @click="toggleProfileMenu" v-show="this.$store.state.user" ref="profile"  >
            <span  style="color: white;">{{  this.$store.state.profileInitials }}</span>
            <div v-show="profileMenu" class="profile-menu">
                <div class="info">
                    <p class="initials">{{  this.$store.state.profileInitials }}</p>
                    <div class="right" >
                        <p>{{ this.$store.state.profileFirstName }}  {{ this.$store.state.profileLastName }}</p>
                        <p>{{ this.$store.state.profileUserName }}</p>
                        <p>{{ this.$store.state.profileEmail }}</p>
                    </div>
                </div>
                <div class="options">
                    <div class="option">
                        <routerLink :to="{name : 'Profile'}" class="option">
                            <userIcon class="icon"></userIcon>
                            <p>profile</p>
                        </routerLink>
                    </div>
                    <div class="option">
                        <routerLink :to="{name : 'Admin'}" class="option">
                            <adminIcon class="icon"></adminIcon>
                            <p>Admin</p>
                        </routerLink>
                    </div>
                    <div @click="signOut" class="option">
                        <signOutIcon class="icon"></signOutIcon>
                        <p >Sign out</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </nav>
    <menuIcon v-show="mobile" @click="toggleMobileNav()" class="menu-icon"></menuIcon>
    
    <transition name="mobile-nav" ><!-- animations using vue.js, we will use this tarnsition to add the animation to the navigation bar -->
        <div v-show="mobileNav" class="mobile-nav">
            <ul style="display: flex;flex-direction: column">
                <router-link class="link" :to="{name: 'Home'}">Home</router-link>
                <router-link class="link" :to="{name: 'Blogs'}">Blogs</router-link>
                <router-link class="link" v-if="this.$store.state.user" :to="{name : 'CreatePost'}">Create Post</router-link>
                <router-link class="link"  v-if="!this.$store.state.user" :to="{name: 'Login'}"></router-link>
            </ul>
        </div>
    </transition>

   



  </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg' // we import the svg icon from the assets 
import userIcon from '../assets/Icons/user-alt-light.svg' // we import the svg icon from the assets 
import adminIcon from '../assets/Icons/user-crown-light.svg' // we import the svg icon from the assets 
import signOutIcon from '../assets/Icons/sign-out-alt-regular.svg' // we import the svg icon from the assets 
import firebase from 'firebase/app'
import  "firebase/auth"   // we import the entier library 

export default {
    name:'navigation',
    components:{
        menuIcon,
        signOutIcon,
        userIcon,
        adminIcon,
    },
    data(){
        return{
            mobile: null, // indecating if we are in a mobile device 
            mobileNav: null, // indecating if we click on the navigation menu
            windowWidth: null, // get the window width
            profileMenu : false
        }
    },
    created(){
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
    methods:{
        checkScreen(){
            this.windowWidth = window.innerWidth; // a javascript way to get the widht of the window 
            if(this.windowWidth <= 750){
                this.mobile = true;
            }else{
                this.mobile = false;
                this.mobileNav = false;
            }
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },
        toggleProfileMenu(e){
             // so when know when we click on the profile icons to display the menu
             if(e.target === this.$refs.profile){
                this.profileMenu = !this.profileMenu
             }
        },
        signOut(){
            firebase.auth().signOut();
            this.$router.push({name: 'Home'});
            window.location.reload();
        }
    },
   
}

</script>

<style lang="scss" scoped >
    header{
        background-color: #fff;
        padding: 0 25px;
        box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1),0px 4px 6px -1px rgba(0,0,0,0.06);
        z-index: 99;
    }
    .link{
        font-weight: 500;
        padding: 0 8px;
        transition: color 0.3s ease;

        &:hover{
            color: #1eb8b8;
        }
    }
    nav{
        display: flex;
        padding: 25px 0;

        .brading{
            display: flex;
            align-items: center;

            .header{
                font-weight: 600;
                font-size: 24px;
                color: black;
                text-decoration: none;
            }
        }
    }
    .nav-links{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
        ul{
            margin-right: 32px ;
            margin-top: 1rem;
            .link{
                margin-right: 32px;
            }

            .link:last-child{
                margin-right: 0;
            }
        }
    }
    .menu-icon{
        cursor: pointer;
        position: absolute;
        top: 28px;
        right: 25px;  /* we are setting the width of the icon through this coordinations */
        height: 25px;
        width: auto;
    }
    .mobile-nav{
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        background-color:#303030;
        top: 0;
        height: 100%;
        .link{
            color: white;
            padding: 15px 0;
        }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition: all 1s ease;
    }

    .mobile-nav-enter{
        transform: translateX(-250px); /* we can use these properties to add them on the navigation bar for tresor */ 
    }
  
    .mobile-nav-enter-to{
        transform: translateX(0);
    }

    .mobile-nav-leave-to{
        transform: translateX(-250px);
    }





    .profile{
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        background-color: #303030;  


        span{
            pointer-events: none;
        }
        .profile-menu{
            position: absolute;
            top: 50px;
            right: 0;
            width: 250px;
            background-color: #303030;
            box-shadow: inset;

            .info{
                display: flex;
                align-items: center;
                padding: 15px;
                border-bottom: 1px solid white;

                .initials{
                    position: initial;
                    width: 40px;
                    height: 40px;
                    background-color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #303030;
                }


                .right{
                    flex: 1;
                    margin-left: 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    p:nth-child(1){
                        font-size: 14px;
                        margin-bottom: 3px;
                    }

                    p:nth-child(2),
                    p:nth-child(3){
                        font-size: 12px;
                        margin-bottom: 3px;
                    }
                }
            }

            .options{
                    padding: 15px;
                    margin-bottom: 0;
                    .option{
                        text-decoration: none;
                        color: white;
                        display: flex;
                        align-items: center;
                        
                        width: 100%;
                        .icon{
                            width: 18px;
                            height: 18px;
                        }

                        p{
                            font-size:14px;
                            margin-left: 12px;
                            margin-top: 10px;
                        }
                        &:last-child{
                            margin-bottom: 0;
                        }
                    }
                }
        }
    }
</style>