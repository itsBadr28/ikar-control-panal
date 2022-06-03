<template>
<!-- eslint-disable -->
<SideBar />
  <div class=" transition-all " :style="{ 'margin-left': sidebarWidth }" :class=" isDark ? 'dark' : '' ">
      <Nav />
       <div class="dark:bg-[#F1F0FE] bg-[#212529] ">
        <div class="flex justify-between w-full">
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
                   <div class="w-[90%] mx-auto  relative">
                       <div class="flex w-full my-4  justify-between">
                         <div>
                           <button class="py-2 px-4 w-24 font-body font-bold bg-white text-black rounded"> Filter <font-awesome-icon icon="filter" /></button>
                         </div>
                         <div class="w-[90%] ">
                           <input type="text" class=" px-4 font-body  py-2 w-[90%] rounded-l h-10" placeholder="Enter Vehicles">
                           <button class="py-2 px-4 bg-[#10b981] font-body font-bold text-white h-10 rounded-r"> Search </button>
                         </div>
                       </div>
                       <div class="flex w-[97%] lg:hidden mx-auto justify-between dark:bg-white bg-gray-100 my-1 rounded absolute">
                         <div class="m-4">
                           <header class="border-b bg-gray-200 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> Vehicles Fuel </h1>
                           </header>
                           <div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">Gas</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">Petrol</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">Electrical</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">Diesel</label>
                             </div>
                           </div>
                         </div>
                         <div class="m-4">
                           <header class="border-b bg-gray-200 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> Vehicles Type </h1>
                           </header>
                           <div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">Cars</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">Suvs</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">Tracks</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">Vans</label>
                             </div>
                           </div>
                         </div>
                         <div class="m-4">
                           <header class="border-b bg-gray-200 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> Vehicles Type </h1>
                           </header>
                           <div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">Automatic</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">Manual</label>
                             </div>
                           </div>
                         </div>
                         <div class="m-4">
                           <header class="border-b bg-gray-200 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> passengers </h1>
                           </header>
                           <div class="flex">
                             <div>
                                 <div class="mx-4">
                                   <input class="w-4 h-4" type="checkbox">
                                   <label class="text-lg text-[#171818] font-body px-2" for="">+ 2</label>
                                 </div>
                                 <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">+ 4</label>
                                 </div>
                                 <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] font-body px-2" for="">+ 5</label>
                                 </div>
                             </div>
                            <div>
                                   <div class="mx-4">
                                   <input class="w-4 h-4" type="checkbox">
                                   <label class="text-lg text-[#171818] font-body px-2" for="">+ 7</label>
                                 </div>
                                 <div class="mx-4">
                                   <input class="w-4 h-4" type="checkbox">
                                   <label class="text-lg text-[#171818] font-body px-2" for="">+ 10</label>
                                 </div>
                                 <div class="mx-4">
                                   <input class="w-4 h-4" type="checkbox">
                                   <label class="text-lg text-[#171818] font-body px-2" for="">+ 12</label>
                                 </div>
                             </div> 
                           </div>
                         </div>
                         <div class=" w-[20%] mt-auto  mb-4">
                         <button class="bg-[#10b981] w-2/3 ml-16 rounded text-white py-2 px-4">Apply</button>
                         </div>
                       </div>
                   </div>
              </div>
             </div>
           </div>
        </div>
        <div class="flex mx-auto w-full p-5 ">
          <div class="w-[70%] flex flex-wrap justify-between">
            <div v-scrollanimation  class="relative translate-y-24 duration-800  w-[32%]  mb-16 shadow">
              <div class="bg-[#171818] h-[21.5rem] rounded-t-lg  ">
                 <h1 class="text-white text-2xl font-body font-bold p-2 uppercase text-center">dddddddddddd</h1>
                 <h1 class="text-lg text-center font-body  text-white">
                   Lorem ipsum dolor sit amet.
                 </h1>
                 <div class="flex mx-auto text-white justify-center flex-wrap">
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gear" />
                  <h1 class="font-body py-1">Automatic</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="user" />
                  <h1 class="font-body py-1">4 Passengers</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="suitcase" />
                  <h1 class="font-body py-1">3 Bags</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gas-pump" />
                  <h1 class="font-body py-1">gas</h1>
                </div>
                 </div>
                 <img src="../assets/img/car8.png" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-2xl">BMW 2021</h1>
                <button class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
            <div v-scrollanimation class="relative  translate-y-24 duration-800 w-[32%]  mb-16 shadow">
              <div class="bg-[#171818] h-[21.5rem] rounded-t-lg  ">
                 <h1 class="text-white text-2xl font-body font-bold p-2 uppercase text-center">dddddddddddd</h1>
                 <h1 class="text-lg text-center font-body  text-white">
                   Lorem ipsum dolor sit amet.
                 </h1>
                 <div class="flex mx-auto text-white justify-center flex-wrap">
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gear" />
                  <h1 class="font-body py-1">Automatic</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="user" />
                  <h1 class="font-body py-1">4 Passengers</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="suitcase" />
                  <h1 class="font-body py-1">3 Bags</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gas-pump" />
                  <h1 class="font-body py-1">gas</h1>
                </div>
                 </div>
                 <img src="../assets/img/1543605917710.png" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-2xl">BMW 2021</h1>
                <button class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
            <div v-scrollanimation class="relative  translate-y-24 duration-800 w-[32%]  mb-16 shadow">
              <div class="bg-[#171818] h-[21.5rem] rounded-t-lg  ">
                 <h1 class="text-white text-2xl font-body font-bold p-2 uppercase text-center">dddddddddddd</h1>
                 <h1 class="text-lg text-center font-body  text-white">
                   Lorem ipsum dolor sit amet.
                 </h1>
                 <div class="flex mx-auto text-white justify-center flex-wrap">
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gear" />
                  <h1 class="font-body py-1">Automatic</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="user" />
                  <h1 class="font-body py-1">4 Passengers</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="suitcase" />
                  <h1 class="font-body py-1">3 Bags</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gas-pump" />
                  <h1 class="font-body py-1">gas</h1>
                </div>
                 </div>
                 <img src="../assets/img/1544210775124.png" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-2xl">BMW 2021</h1>
                <button class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
            <div v-scrollanimation class="relative  translate-y-24 duration-800 w-[32%]  mb-16 shadow">
              <div class="bg-[#171818] h-[21.5rem] rounded-t-lg  ">
                 <h1 class="text-white text-2xl font-body font-bold p-2 uppercase text-center">dddddddddddd</h1>
                 <h1 class="text-lg text-center font-body  text-white">
                   Lorem ipsum dolor sit amet.
                 </h1>
                 <div class="flex mx-auto text-white justify-center flex-wrap">
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gear" />
                  <h1 class="font-body py-1">Automatic</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="user" />
                  <h1 class="font-body py-1">4 Passengers</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="suitcase" />
                  <h1 class="font-body py-1">3 Bags</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gas-pump" />
                  <h1 class="font-body py-1">gas</h1>
                </div>
                 </div>
                 <img src="../assets/img/1554931356778.png" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-2xl">BMW 2021</h1>
                <button class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
            <div v-scrollanimation class="relative  translate-y-24 duration-800 w-[32%]  mb-16 shadow">
              <div class="bg-[#171818] h-[21.5rem] rounded-t-lg  ">
                 <h1 class="text-white text-2xl font-body font-bold p-2 uppercase text-center">dddddddddddd</h1>
                 <h1 class="text-lg text-center font-body  text-white">
                   Lorem ipsum dolor sit amet.
                 </h1>
                 <div class="flex mx-auto text-white justify-center flex-wrap">
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gear" />
                  <h1 class="font-body py-1">Automatic</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="user" />
                  <h1 class="font-body py-1">4 Passengers</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="suitcase" />
                  <h1 class="font-body py-1">3 Bags</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gas-pump" />
                  <h1 class="font-body py-1">gas</h1>
                </div>
                 </div>
                 <img src="../assets/img/1574880314547.png" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-2xl">BMW 2021</h1>
                <button class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
            <div v-scrollanimation class="relative  translate-y-24 duration-800 w-[32%]  mb-16 shadow">
              <div class="bg-[#171818] h-[21.5rem] rounded-t-lg  ">
                 <h1 class="text-white text-2xl font-body font-bold p-2 uppercase text-center">dddddddddddd</h1>
                 <h1 class="text-lg text-center font-body  text-white">
                   Lorem ipsum dolor sit amet.
                 </h1>
                 <div class="flex mx-auto text-white justify-center flex-wrap">
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gear" />
                  <h1 class="font-body py-1">Automatic</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="user" />
                  <h1 class="font-body py-1">4 Passengers</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="suitcase" />
                  <h1 class="font-body py-1">3 Bags</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gas-pump" />
                  <h1 class="font-body py-1">gas</h1>
                </div>
                 </div>
                 <img src="../assets/img/1574880326498.png" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-2xl">BMW 2021</h1>
                <button class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
            <div v-scrollanimation class="relative  translate-y-24 duration-800 w-[32%]  mb-16 shadow">
              <div class="bg-[#171818] h-[21.5rem] rounded-t-lg  ">
                 <h1 class="text-white text-2xl font-body font-bold p-2 uppercase text-center">dddddddddddd</h1>
                 <h1 class="text-lg text-center font-body  text-white">
                   Lorem ipsum dolor sit amet.
                 </h1>
                 <div class="flex mx-auto text-white justify-center flex-wrap">
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gear" />
                  <h1 class="font-body py-1">Automatic</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="user" />
                  <h1 class="font-body py-1">4 Passengers</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="suitcase" />
                  <h1 class="font-body py-1">3 Bags</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gas-pump" />
                  <h1 class="font-body py-1">gas</h1>
                </div>
                 </div>
                 <img src="../assets/img/1574880326763.png" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-2xl">BMW 2021</h1>
                <button class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
            <div v-scrollanimation class="relative  translate-y-24 duration-800 w-[32%]  mb-16 shadow">
              <div class="bg-[#171818] h-[21.5rem] rounded-t-lg  ">
                 <h1 class="text-white text-2xl font-body font-bold p-2 uppercase text-center">dddddddddddd</h1>
                 <h1 class="text-lg text-center font-body  text-white">
                   Lorem ipsum dolor sit amet.
                 </h1>
                 <div class="flex mx-auto text-white justify-center flex-wrap">
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gear" />
                  <h1 class="font-body py-1">Automatic</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="user" />
                  <h1 class="font-body py-1">4 Passengers</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="suitcase" />
                  <h1 class="font-body py-1">3 Bags</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gas-pump" />
                  <h1 class="font-body py-1">gas</h1>
                </div>
                 </div>
                 <img src="../assets/img/car9.png" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-2xl">BMW 2021</h1>
                <button class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
            <div v-scrollanimation class="relative  translate-y-24 duration-800 w-[32%]  mb-16 shadow">
              <div class="bg-[#171818] h-[21.5rem] rounded-t-lg  ">
                 <h1 class="text-white text-2xl font-body font-bold p-2 uppercase text-center">dddddddddddd</h1>
                 <h1 class="text-lg text-center font-body  text-white">
                   Lorem ipsum dolor sit amet.
                 </h1>
                 <div class="flex mx-auto text-white justify-center flex-wrap">
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gear" />
                  <h1 class="font-body py-1">Automatic</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="user" />
                  <h1 class="font-body py-1">4 Passengers</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="suitcase" />
                  <h1 class="font-body py-1">3 Bags</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gas-pump" />
                  <h1 class="font-body py-1">gas</h1>
                </div>
                 </div>
                 <img src="../assets/img/car11.png" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-2xl">BMW 2021</h1>
                <button class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
          </div>
          <div v-scrollanimation class="w-[28%] ml-auto h-screen translate-y-24 duration-800 bg-[#171818] rounded flex flex-wrap justify-between">
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
