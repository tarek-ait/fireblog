<template>
  <header>
    <nav class="container"> <!-- the container style is  in the app vue file-->
        <div class="brading">
            <router-link class="header" :to="{ name :'Home'}">fireBlogs</router-link>
        </div>
       <div class="nav-links"><!-- for the website view -->
        <ul v-show="!mobile">
            <router-link class="link" to="#">Home</router-link>
            <router-link class="link" to="#">Blogs</router-link>
            <router-link class="link" to="#">Create Post</router-link>
            <router-link class="link" to="#">Login/Register </router-link>
        </ul>
       </div>
    </nav>
    <menuIcon v-show="mobile" @click="toggleMobileNav()" class="menu-icon"></menuIcon>
    
    <transition name="mobile-nav" ><!-- animations using vue.js, we will use this tarnsition to add the animation to the navigation bar -->
        <div v-show="mobileNav" class="mobile-nav">
            <ul style="display: flex;flex-direction: column">
                <router-link class="link" to="#">Home</router-link>
                <router-link class="link" to="#">Blogs</router-link>
                <router-link class="link" to="#">Create Post</router-link>
                <router-link class="link" to="#">Login/Register </router-link>
            </ul>
        </div>
    </transition>

   



  </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg' // we import the svg icon from the assets 

export default {
    name:'navigation',
    components:{
        menuIcon
    },
    data(){
        return{
            mobile: null, // indecating if we are in a mobile device 
            mobileNav: null, // indecating if we click on the navigation menu
            windowWidth: null // get the window width
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
</style>