<template>
<!-- eslint-disable -->
<SideBar />
  <div class=" transition-all " :style="{ 'margin-left': sidebarWidth }" :class=" isDark ? 'dark' : '' ">
      <Nav />
       <div class="dark:bg-[#F1F0FE] bg-[#212529] h-screen">
        <div class="flex mx-auto w-full">
           <div v-scrollanimation class="mx-auto translate-y-24 duration-800 mt-4 w-full  px-5">  
             <div v-scrollanimation class=" duration-400 relative flex flex-col min-w-0 break-words dark:bg-white bg-[#171818] rounded-lg mb-6 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                  <div class="flex flex-wrap">
                       <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                       <h5 class="text-white dark:text-[#171818] uppercase font-bold text-xs">Filter</h5>
                       <span class="font-semibold text-xl text-white dark:text-[#171818]"> </span>
                       </div>
                       <div class="relative w-auto pl-4 flex-initial">
                          <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                           <font-awesome-icon icon="filter" />
                          </div>
                       </div>
                   </div>
                  <p class="text-sm text-blueGray-400 mt-4">
                    <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 12% </span>
                    <span class="whitespace-nowrap text-white dark:text-[#171818]"> Since last mounth </span>
                  </p>
                  <p class="text-sm text-blueGray-400 mt-4">
                    <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 12% </span>
                    <span class="whitespace-nowrap text-white dark:text-[#171818]"> Since last mounth </span>
                  </p>
                  <p class="text-sm text-blueGray-400 mt-4">
                    <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 12% </span>
                    <span class="whitespace-nowrap text-white dark:text-[#171818]"> Since last mounth </span>
                  </p>
              </div>
             </div>
           </div>
        </div>
       </div>
  </div>
</template>

<script>
import SideBar from '../components/Sidebar.vue';
import Nav from '../components/Nav.vue';
import { sidebarWidth } from '../SideBar/sideBar';

export default {
  name: 'Vehicles-',
  components: {
    SideBar,
    Nav,
  },
  setup() {
    return { sidebarWidth };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
  },
};
</script>

<style scoped>
.before-enter{
  opacity: 0;
  /* transform: translateY(100px); */
}
.enter{
opacity: 1;
transform: translateY(0px);
}
</style>
