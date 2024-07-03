<template>

  <div>
      <div class="home">
         <blogPost v-if="!this.$store.state.user" :post="welcomeScreen"></blogPost><!-- we need to bind the data from the parent to the component blogpost-->
         <blogPost :post="post" v-for="(post , index) in blogPostsFeed" :key="index"></blogPost><!-- for the three other firblog posts , w could have add the three manually but it is more smart and impressive-->
        <div class="blog-card-wrap">
          <div class="container-fluid">
            <h3 style="margin-bottom: 2rem;">View more recent Blogs</h3>
              <div class="blog-cards">
                <blogCards :post="post" v-for="( post , index ) in blogPostsCards" :key="index"></blogCards>
              </div>
          </div>
        </div>
        <div v-if="!this.$store.state.user" class="updates">
          <div class="container-fluid2">
            <h2>Never miss a Post. Register for your free account to day</h2>
            <router-link to="#" class="router-btn">
              Register for FireBlogs
              <Arrow class="arrow"></Arrow>
            </router-link>
          </div>
        </div>
        </div>
  </div>
  
</template>

<script>
import blogCards from '../components/BlogCard.vue';
import Arrow from '../assets/Icons/arrow-right-light.svg';
import blogPost from '../components/BlogPost.vue';


export default {
  name: "Home",
  components: {
    blogPost,
    blogCards,
    Arrow
  },
  data(){
    return {
      welcomeScreen:{
        title: "Welcome!",
        blogPost: "Weekly blog articels with all things programming including HTML, CSS, Javascript and more,Register tofay to never miss the chance and the great opportunities here with us",
        welcomeScreen: true,
        photo:"coding"
      }, 
    }
  },
  computed:{
    blogPostsCards(){
      return this.$store.getters.blogPostsCards;
    },
    blogPostsFeed(){
      return this.$store.getters.blogPostsFeed;
    }
  }
};
</script>


<style lang="scss">
  .blog-card-wrapp{
    h3{
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }

  .arrow{
    path{
      fill: white;
    }
  }

  .updates{
    padding: 0 100px ;
    .container-fluid2{
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      
      align-items: center;
      @media (min-width:800px){
        padding: 125px 25px;
        flex-direction: row;
      }

      .router-btn{
        display: flex;
        font-size: 14px;
        text-decoration: none;
        @media(min-width:800px){
          margin-left: auto;
        }
      }

      h2{
        font-weight: 400;
        font-size: 32px;
        max-width: 425px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        @media(min-width:800px){
          text-align: initial;
          font-size: 40px;
        }
      }
    }
  }
</style>