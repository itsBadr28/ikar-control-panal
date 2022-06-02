<template>
<!-- eslint-disable -->
<div :class=" isDark ? 'dark' : '' " class=" bg-cover  bg-right-bottom ">
    <div class=" flex  w-screen bg-[#212529] dark:bg-[#fdfffc] h-screen mx-auto">
        <div class="w-[90%] mx-auto">
          <div class="w-full  flex justify-between">
              <div></div>
              <div  @click="isDark = !isDark" class="bg-slate-200 w-10 h-10 m-2 hover:bg-slate-300 transition  duration-500   rounded">
                <font-awesome-icon class="text-[#212529] m-2 dark:block hidden hover:rotate-180 transition duration-500 text-2xl text-right" icon="sun" />
                <font-awesome-icon class="text-[#212529] m-2 dark:hidden hover:rotate-180 transition duration-500 text-2xl text-right" icon="moon" />
              </div>
          </div>
          <div class=" w-[100%]">
            <h1 class="uppercase text-2xl font-body text-center dark:text-[#1B1C1A] text-white m-8"> Logo</h1>
            <h1 class=" font-bold text-2xl font-body text-white dark:text-[#212529] text-center uppercase pl-2 py-4 ">Sign in to your account</h1>
            <form action=""  >
             <div class="m-4 w-[90%] mx-auto">
                 <label for="email" class="text-white dark:text-[#212529] mb-4 font-bold font-body uppercase text-xl ">Email :  </label>
                 <div class="w-full">
                     <input type="text" name="email" class="w-full font-body dark:bg-white bg-[#F6F6F6] focus:border-b-4 transition duration-200  dark:border-b-[#212529] border-b-[#6c757d] text-[#000000] font-bold  border rounded focus:rounded-b-md outline-none  p-4" placeholder="Exampl@email.com" id="">
                 </div>
             </div>
             <div class="m-4 w-[90%] mx-auto">
                 <label for="password" class="dark:text-[#212529] text-white mb-4 font-bold font-body  uppercase text-xl ">password :  </label>
                 <div class="w-full">
                     <input type="password" name="password" class="w-full dark:bg-white bg-[#F6F6F6] focus:border-b-4 transition duration-200  dark:border-b-[#212529] border-b-[#6c757d] text-[#212529] border font-bold font-body rounded focus:rounded-b-md outline-none p-4" placeholder="********" id="">
                 </div>
                 </div>
                 <div class=" ml-12 flex ">
                     <input type="checkbox" class="w-5 my-auto h-5" >
                     <label for="checkbox" class=" my-auto dark:text-[#1E293B] text-white ml-1 font-body font-bold">Remember me</label>
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
export default {
  name: 'login-',
  data() {
    return {
      isDark: true,
    };
  },
};
</script>

<style>
.bg{
    background-image: url(../assets/img/bglogin2.jpg);
}
.night{
    background-image: url(../assets/img/bgloginNight2.jpg);
}
</style>
