<template>

  <div>
      <div class="home">
         <blogPost :post="welcomeScreen"></blogPost><!-- we need to bind the data from the parent to the component blogpost-->
         <blogPost :post="post" v-for="(post , index) in sampleBlogPost" :key="index"></blogPost><!-- for the three other firblog posts , w could have add the three manually but it is more smart and impressive-->
      </div>
  </div>
  
</template>

<script>
import blogPost from '../components/BlogPost.vue';

export default {
  name: "Home",
  components: {
    blogPost
  },
  data(){
    return {
      welcomeScreen:{
        title: "Welcome!",
        blogPost: "Weekly blog articels with all things programming including HTML, CSS, Javascript and more,Register tofay to never miss the chance and the great opportunities here with us",
        welcomeScreen: true,
        photo:"coding"
      }, // this is for the so called hero section
      sampleBlogPost:[ // this is for the two fireblogs 
        {
          title:"this is a filter Title!",
          blogHTML:"this is a filter blog post title!",
          blogCoverPhoto:"beautiful-stories",
        },
        {
          title:"this is a filter Title!",
          blogHTML:"this is a filter blog post title!",
          blogCoverPhoto:"designed-for-everyone",
        }
       
      ],
    }
  }
};
</script>
