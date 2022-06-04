<template>
  <!-- eslint-disable  -->
<div  :class=" isHidden ? '' : 'hidden' " class="fixed bg z-10 transition duration-500 inset-0 overflow-y-auto" id="modal">
    <div class="flex items-end justify-center bg-[#141517] min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- This element is to trick the browser into centering the modal contents. -->
      
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div  class="inline-block align-bottom bg-[#141517] h-screen text-left  overflow-hidden transform transition-all sm:align-middle sm:max-w-full sm:w-full">
         <div class="relative ">
            <img  class=" absolute 
            lg:-top-16 -top-44 opacity-60 z-0 md:rotate-45 pointer-events-none
            md:scale-100 scale-[200%] md:left-[24%] -left-[3.25rem] hidden md:block
             lg:h-[900px]  h-[500px]"
             src="../assets/img/liq-2.png" alt="">
          </div>
          <div class="mx-auto flex-initial my-72">
            <h1  class="text-7xl animate__animated animate__fadeInUp text-white text-center font-body font-bold">Welcome {{ name }}</h1>
            <h1 class="text-6xl animate__animated animate__fadeInUp text-white text-center font-body tracking-tight">{{ type }}</h1>
              <div class="relative">
                <!-- <router-link to="/dashboard" > -->
              <div  @click="goDashboard" class="absolute flex cursor-pointer animate-pulse hover:animate-none border transition-all  rounded-full   hover:scale-110 p-2 left-[47.85%] top-32 ">
                  <font-awesome-icon class="text-white animate-pulse text-xl p-4" icon="right-to-bracket" />
              </div>
              <!-- </router-link> -->
            </div>
          </div>
          
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Welcome-',
  data() {
    return {
      isHidden: true,
      audio: true,
      name: '',
      type: '',
    };
  },
  methods: {
    async created() {
      const data = sessionStorage.getItem('userName');
      console.log(data);
      this.name = data;
      this.type = sessionStorage.getItem('type');
    },
    goDashboard() {
      this.$router.push('/dashboard');
    },
    playSound() {
      // this.$router.push('/dashboard');
      const audio = new Audio(require('../assets/xbox.mp3'));
      audio.play();
    },
  },
  beforeMount() {
    this.created();
    this.playSound();
  },
};
</script>

<style scoped>

</style>
