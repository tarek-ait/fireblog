<template>
    <div class="profile">
        <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"></Modal>
        <div class="container">
            <h2>Account Settings</h2>
            <div class="profile-info">
                <div class="initials">{{  this.$store.state.profileInitials }}</div>
                <div class="admin-badge">
                    <adminIcon></adminIcon>
                    <span>admin</span>
                </div>
                <div class="input">
                    <label for="firstName">First Name : </label>
                    <input type="text" id="firstName" v-model="firstName">
                </div>
                <div class="input">
                    <label for="lastName">last Name : </label>
                    <input type="text" id="lastName" v-model="lastName">
                </div>
                <div class="input">
                    <label for="userName">user Name : </label>
                    <input type="text" id="userName" v-model="userName">
                </div>
                <div class="input">
                    <label for="email">Email : </label>
                    <input disabled type="text" id="email" v-model="email">
                </div>
                <button @click.prevent="changeData">Save Changes</button>
            </div>
        </div>
    </div>
</template>

<script>
import adminIcon from '../assets/Icons/user-crown-light.svg'
import Modal from '../components/modal.vue'

export default {
    name: 'Profile',
    components:{
        adminIcon,
        Modal
    },
    data(){
        return{
            modalMessage : "changes were saved",
            modalActive : null
        }
    },
    computed:{
        firstName:{
            get(){
                return this.$store.state.profileFirstName;
            },
            set(payload){
                this.$store.commit("changeFirstName",payload)
            }
            
        },
        lastName:{
            get(){
                return this.$store.state.profileLastName;
            },
            set(payload){
                this.$store.commit("changeLastName",payload)
            }
        },
        userName:{
            get(){
                return this.$store.state.profileUserName;
            },
            set(payload){
                this.$store.commit("changeUserName",payload)
            }
        },
        email:{
            get(){
                return this.$store.state.profileEmail;
            }
        },
    },
    methods:{
        changeData(){
            this.$store.dispatch("changeUserData");
            this.modalActive = !this.modalActive;
        },
        closeModal(){
            this.modalActive = !this.modalActive
        }
    }
}
</script>

<style scoped lang="scss">


.profile{
    .container{
        max-width: 1000px;
        padding: 60px 25px;
    }

    h2{
        text-align: center;
        margin-bottom: 16px;
        font-weight: 300;
        font-size: 32px;
    }


    .profile-info{
        border-radius: 8px;
        /** there is a box shadow for this one  */
        padding: 32px;
        background-color: #cfcfcf8f;
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 32px auto;
        gap: 1rem;


        .initials{
            position: initial;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            color: white;
            background-color: #303030;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
            font-size: 32px;
        }

        .admin-badge{
            display: flex;
            align-self: center;
            color: white;
            font-size: 14px;
            padding: 8px 24px;
            border-radius: 8px;
            background-color: #303030;
            margin: 16px 0;
            text-align: center;
            text-transform: capitalize;

            .icon{
                width: 14px;
                height: auto;
                margin-right: 8px;
            }
        }

        .input{
            margin-top: 16px 0;
          
            .label{
                font-size: 14px;
                height: auto;
                padding-bottom: 6px;
            }

            input{
                width: 100%;
                border: none;
                background-color: #f2f7f6;
                padding: 8px;
                height: 50px;
                @media(min-width : 900px){

                }

                &:focus{
                    outline: none;
                }
            }
        }


        button{
            align-self: center;
        }
    }
}
</style>