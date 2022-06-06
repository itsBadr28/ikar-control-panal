<template>
<!-- eslint-disable -->
<div :class=" isDark ? 'dark ' : '' " >
  <div  @mouseover="collapsed = false" @mouseleave="collapsed = true"
   :style="{ width: sidebarWidth}" class="sidebar  fixed flex-col flex  z-10 transition-all  float-left  h-screen dark:bg-[#ffffff] shadow shadow-gray-900 dark:shadow-white bg-gray-900">
    <div :class="collapsed ? 'px-2' : 'px-6'" class=" pt-6">
        <div class="">
            <a :class=" collapsed ? 'hidden' : ''" href="" class="p-1.5  font-body font-bold text-white dark:text-[#171818] text-2xl uppercase">ikar</a>
            <img :class=" !collapsed ? 'hidden' : ''" class="w-10 dark:hidden h-10" src="../assets/img/logoDark.png" alt="">
            <img :class=" !collapsed ? 'hidden' : 'dark:block hidden'" class="w-10 h-10  " src="../assets/img/logo.png" alt="">
            <h1 :class=" collapsed ? 'hidden' : 'px-1.5'"  class="py-1.5  text-white dark:text-[#171818] uppercase font-body">{{ type }}</h1>
        </div>
        </div>    
         <div :class=" collapsed ? 'w-[100%]' : 'w-[80%] mx-auto'" class=" pt-6 pb-4 ">
            <hr class="border rounded border-gray-700">
        </div>
        <div>
          <SidebarLink to="/dashboard" class="dark:hover:bg-gray-300  hover:bg-[#0e0f0f] py-0.5 font-body font-bold" icon="fas fa-chart-pie">Dashboard</SidebarLink>
          <SidebarLink to="/orders" class="dark:hover:bg-gray-300 hover:bg-[#0e0f0f] py-0.5 font-body font-bold" icon="fas fa-store">Orders</SidebarLink>
          <SidebarLink to="/analysis" class="dark:hover:bg-gray-300 hover:bg-[#0e0f0f] py-0.5 font-body font-bold" icon="fas fa-chart-area">Analysis</SidebarLink>
          <SidebarLink to="/customers" class="dark:hover:bg-gray-300 hover:bg-[#0e0f0f] py-0.5 font-body font-bold" icon="fas fa-user">tenants</SidebarLink>
          <SidebarLink to="/staffs" class="dark:hover:bg-gray-300 hover:bg-[#0e0f0f] py-0.5 font-body font-bold" icon="fas fa-user-astronaut">Staffs</SidebarLink>
          <SidebarLink to="/vehicles" class="dark:hover:bg-gray-300 hover:bg-[#0e0f0f] py-0.5 font-body font-bold" icon="fas fa-truck-pickup">Vehicles</SidebarLink>
          <SidebarLink to="/examine" class="dark:hover:bg-gray-300 hover:bg-[#0e0f0f] py-0.5 font-body font-bold" icon="fas fa-camera-retro">Examine</SidebarLink>
        </div>
        <div :class=" collapsed ? 'w-[100%]' : 'w-[80%] mx-auto'" class=" pt-6 pb-4 ">
            <hr class="border rounded border-gray-700">
        </div>
          <div :class=" !collapsed ? 'pl-2 pr-4 py-4' : 'py-2 pl-2 '" class=" bg-[#232529] w-full h-16 absolute bottom-0  flex items-center justify-between">
          <div class="flex">
          <div class="bg bg-cover bg bg-center relative w-10 h-10 rounded-full before:absolute before:w-2 before:h-2 before:animate-pulse before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
          </div>
          <div  class="w-32  pl-3">
            <div  v-if="!collapsed" class="text-sm text-gray-50">{{ userName }}</div>
            <span :class=" collapsed ? 'hidden' : ''" class="text-xs text-[#acacb0] font-light tracking-tight">
              {{ type }}
            </span>
          </div>
          </div>
          
          <button :class=" collapsed ? 'opacity-0  transition duration-75' : ' opacity-100  transition duration-500'"
          class="text-gray-400 bg-gray-700 rounded focus:outline-none focus:ring-1 transition duration-500 focus:ring-gray-500 focus:text-white"
        >
          <svg class="w-4 h-4   stroke-current" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.25 10.75L12 14.25L8.75 10.75"
            ></path>
          </svg>
        </button>
        </div> 
</div></div>
  
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import SidebarLink from './SidebarLink.vue';
import { collapsed, toggleSidebar, sidebarWidth } from '../SideBar/sideBar';

export default {
  name: 'sideBar',
  props: {},
  components: {
    SidebarLink,
  },
  data() {
    return {
      audio: true,
      userName: '',
      type: '',
    };
  },
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
  },
  methods: {
    ...mapMutations(['tiggleIsDark']),
    async created() {
      this.userName = sessionStorage.getItem('userName');
      this.type = sessionStorage.getItem('type');
    },
  },
  beforeMount() {
    this.created();
  },

};
</script>

<style scoped lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}
.bg{
background-image: url("../assets/img/userImg2.jpg");
}
</style>
