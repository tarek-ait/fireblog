<template>  <!--the blog card -->
  <div class="blog-card">
    <div class="icons"  v-show="editPost"> <!-- the icons are in a components state, and we display them if the editpost is true -->
        <div class="icon"  @click="editBlog">
            <Edit class="edit"></Edit>
        </div>
        <div @click="deletePost" class="icon">
            <Delete class="delete"></Delete>
        </div>
    </div>
    <img :src="post.blogCoverPhoto" > <!-- we get the image according to the post we deliver from the home page-->
    <div class="info">
        <h4>{{ post.blogTitle}} </h4> <!--we display the title of the bolg-->
        <div style="display: flex;align-items: center;justify-content: space-between;">
            <h6>Posted on {{ new Date(post.blogDate).toLocaleString('en-us',{dateStyle : "long"}) }}</h6>
            <h6>Posted By {{ post.postedBy }}</h6>  <!-- we display the date of the blog -->
        </div>
        
        <router-link class="link" :to="{name: 'viewBlog' , params: {blogid: this.post.blogId} }">
            View the link 
            <Arrow class="arrow" style="fill: black;color: black;"></Arrow>
        </router-link>
    </div>
  </div>
</template>

<script>
// importing svgs as components which will make them easy to handle 
import Arrow from '../assets/Icons/arrow-right-light.svg'
import Edit from '../assets/Icons/edit-regular.svg'
import Delete from '../assets/Icons/trash-regular.svg'



export default {
    name: 'blogCards',
    props:['post'], // passing the post from the home view 
    components: {
        Arrow,
        Delete,
        Edit
    },
    methods:{
        deletePost(){
            this.$store.dispatch("deletePost", this.post.blogId) // dispatching the delete post action from the store
        },
        editBlog(){
            this.$router.push({name: 'EditBlog', params: {blogid: this.post.blogId}})
        }
    },
    computed: {
        editPost(){
            return this.$store.state.editPost; // getting the edit post boolean from the store 
        }
    }
}
</script>

<style scoped lang="scss">


.blog-card{
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: white;
    min-height: 420px;
    transition: all 0.5s ease-out;    

    &:hover{
        transform: rotateZ(-1deg) scale(1.01);
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),rgba(0,0,0,0.06);
    
    }

    .icons{
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;

        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: white;
            transition: all 0.5s ease;

            &:hover{
                background-color: #303030;
                
                .edit,
                .delete{
                    path{
                        fill: white;
                    };
                }
            }


            &:nth-child(1){
                margin-right: 8px;
            }

            .edit,
            .delete{
                pointer-events: none;
                height: 15px;
                width: auto;
            }
        }
    }

    img{
        display: block;
        border-radius: 8px 8px 0 0;
        z-index: 1;
        width: 100%;
        min-height: 200px;
        object-fit: cover;
    }

    .info{
        display: flex;
        flex-direction: column;
        height: 100%;
        z-index: 3;
        padding: 32px 16px;
        color: black;

        h4{
            padding-bottom: 8px;
            font-size: 20px;
            font-weight: 300;
        }

        h6{
            font-weight: 400;
            font-size: 12px;
            padding-block: 16px;
        }

        .link{
            display: flex;
            align-items: center;
            margin-top: auto;
            font-weight: 500;
            padding-top: 20px;
            font-size: 12px;
            padding-bottom: 4px;
            transition: 0.5s all ease;

            &:hover{
                color: rgba(48,48,48,0.8);
            }

            .arrow {
                width: 10px;
                fill: black;
            }
        }
    }
}
</style>