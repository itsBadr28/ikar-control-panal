<template>
<!-- eslint-disable -->
<div  :class="isDark ? 'dark' : ''" class="fixed z-[100] transition duration-500 inset-0 -left-[58px] overflow-y-auto bg-cover  bg-right-bottom ">
    <div class=" flex  w-screen bg-[#212529] dark:bg-[#fdfffc] h-screen mx-auto">
        <div class="w-[90%] mx-auto">
          <div class="w-full  flex justify-between">
            <div></div>
              <div  @click.prevent="tiggleIsDark" class="bg-slate-200 w-10 h-10 m-2 hover:bg-slate-300 transition  duration-500   rounded">
                <font-awesome-icon class="text-[#212529] m-2 dark:block hidden hover:rotate-180 transition duration-500 text-2xl text-right" icon="sun" />
                <font-awesome-icon class="text-[#212529] m-2 dark:hidden hover:rotate-180 transition duration-500 text-2xl text-right" icon="moon" />
              </div>
          </div>
          <div class=" transition duration-500 w-[100%]">
            <!-- <h1 class="uppercase text-2xl font-body text-center dark:text-[#1B1C1A] text-white m-8"> Logo</h1> -->
            <img class="w-44 mx-auto  dark:block hidden" src="../assets/img/logo.png" alt="">
            <img class="w-44 mx-auto  dark:hidden " src="../assets/img/logoDark.png" alt="">
            <div class="flex  justify-center">
              <h1 class=" font-bold text-3xl font-body text-white dark:text-[#212529] text-center uppercase pl-2 py-4 ">Welcome to IKAR</h1>
            </div>
            
            <form @submit=" postDataLogIN" method="post"  >
             <div :class=" isDark ? 'dark ' : '' ">
                 <div  class="dark:bg-gray-200 bg-[#454b50] rounded w-[90%] mx-auto " style="padding: 2px;">
                    <div class="relative flex items-center">
                          <div class="absolute w-full">
                            <div class="w-1/3 flex justify-between m-auto">
                              <div class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out" :class="{ 'opacity-100': posts.selectedTab === 'owner'}"></div>
                              <div class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out" :class="{ 'opacity-100': posts.selectedTab === 'admin'}"></div>
                            </div>
                          </div>
                          <div class="absolute left-0 inset-y-0 w-1/3 flex dark:bg-white bg-[#171818]  transition-all ease-in-out duration-200 transform rounded shadow" :class="{'translate-x-0': posts.selectedTab === 'admin', 'translate-x-full': posts.selectedTab === 'secretary', 'translate-x-[200%]': posts.selectedTab === 'owner'}"></div>
                          <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="posts.selectedTab = 'admin'">Admin</div>
                          <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="posts.selectedTab = 'secretary'">Secretary</div>
                          <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="posts.selectedTab = 'owner'">Owner</div>

                    </div>
                 </div>
             </div>
             <div class="m-4 w-[90%] mx-auto">
                 <label for="email" class="text-white dark:text-[#212529] mb-4 font-bold font-body uppercase text-xl ">Email :  </label>
                 <div class="w-full">
                     <input type="text" v-model="posts.email" name="email" class="w-full font-body bg-[#212529] dark:bg-[#F6F6F6] focus:border-b-4 transition duration-500  focus:dark:border-b-[#212529] focus:border-b-[#6c757d]  dark:text-[#141414] text-white font-bold  border dark:border-gray-400 border-gray-300 rounded focus:rounded-b-md outline-none  p-4" placeholder="Exampl@email.com" id="">
                 </div>
             </div>
             <div class="m-4 w-[90%] mx-auto">
                 <label for="password" class="dark:text-[#212529] text-white mb-4 font-bold font-body  uppercase text-xl ">password :  </label>
                 <div class="w-full">
                     <input type="password" v-model="posts.password" name="password" class="w-full bg-[#212529] dark:bg-[#F6F6F6] focus:border-b-4 transition duration-500  focus:dark:border-b-[#212529] focus:border-b-[#6c757d]  dark:text-[#141414] text-white border dark:border-gray-400 border-gray-300 font-bold font-body rounded focus:rounded-b-md outline-none p-4" placeholder="********" id="">
                 </div>
                 </div>
                 <div class=" ml-12 flex justify-between mx-auto w-[86%]">
                   <div class="flex">
                     <input type="checkbox"  name="remamber" v-model="posts.rememberMe" value="1" class="w-5 my-auto h-5" >
                     <label for="checkbox"   class=" my-auto dark:text-[#1E293B] text-white ml-1 font-body font-bold">Remember me</label>
                   </div>
                 </div>
             <div class="m-4 w-[90%] mx-auto">
                 <button class="btn w-full dark:bg-[#212529]  duration-500 hover:dark:bg-[#414141] my-auto bg-[#454b50] hover:bg-[#2d2c2c] text-white border-0 rounded py-4 mb-4 ">Login</button>
             </div>
            </form>
          </div>
      </div>
        
      <div :class=" isDark ? 'bg-center' : 'night ' " class="bg w-full  h-screen duration-50  bg-cover ">
      </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  props: [],
  components: {
  },
  name: 'login-',
  data() {
    return {
      posts: {
        email: null,
        password: null,
        rememberMe: null,
        role: null,
        selectedTab: 'admin',
      },
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
  },
  methods: {
    ...mapMutations(['tiggleIsDark']),
    async postDataLogIN(e) {
      const role = this.posts.selectedTab;
      const baseURL = `http://localhost:3000/api/${role}/login`;
      // console.log(baseURL);
      this.axios.post(baseURL, this.posts)
        .then((result) => {
          // console.warn(result);
          this.$router.push('/controlPanel');
          localStorage.setItem('auth-token', result.data.token);
          // console.log(result.data.profil.userName);
          sessionStorage.setItem('userName', result.data.profil.userName);
          sessionStorage.setItem('type', result.data.profil.type);
        });
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.bg{
    background-image: url(../assets/img/bglogin2.jpg);
}
.night{
    background-image: url(../assets/img/bgloginNight2.jpg);
}
</style>
