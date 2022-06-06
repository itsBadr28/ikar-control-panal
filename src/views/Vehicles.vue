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
                           <button @click="filter = !filter" class="py-2 px-4 w-24 font-body font-bold bg-white dark:bg-[#171818] dark:text-white text-black rounded"> Filter <font-awesome-icon icon="filter" /></button>
                         </div>
                         <div class="w-[90%] ">
                           <input type="text" v-model="search" class=" dark:border dark:border-r-0 border-[#171818] px-4 font-body outline-none  py-2 w-[90%] rounded-l h-10" placeholder="Enter Vehicles">
                           <button class="py-2 px-4 bg-[#10b981] font-body font-bold text-white h-10 rounded-r"> Search </button>
                         </div>
                       </div>
                       
                   </div>
              </div>
             </div>
           </div>
        </div>
        <div class="flex mx-auto w-full p-5  z-0">
          <div class="w-[75%] flex flex-wrap ">
            <div v-if="filteredVehicles" v-for="vehicle in filteredVehicles" :key="vehicle" v-scrollanimation  class=" translate-y-16 mr-2.5  duration-500   w-[32%]  mb-16 ">
              <div class="bg-[#171818] dark:bg-white h-[21.5rem] rounded-t-lg  ">
                 <h1 class="text-white dark:text-[#171818] text-2xl font-body font-bold p-2 uppercase text-center">{{ vehicle.name }}</h1>
                 <h1 class="text-lg text-center font-body  text-white dark:text-[#171818]">
                   {{ vehicle.description }}
                 </h1>
                 <div class="flex mx-auto text-white dark:text-[#171818] justify-center flex-wrap">
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gear" />
                  <h1 v-if="vehicle.isAutomatic" class="font-body py-1">Automatic</h1>
                  <h1 v-if="!vehicle.isAutomatic" class="font-body py-1">manual</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="user" />
                  <h1 class="font-body py-1">{{ vehicle.placeNumber }} Passengers</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="suitcase" />
                  <h1 class="font-body py-1">{{ vehicle.bagsNumber }} Bags</h1>
                </div>
                <div class="flex">
                  <font-awesome-icon class="p-2" icon="gas-pump" />
                  <h1 class="font-body py-1">gas</h1>
                </div>
                 </div>
                 <img :src="`data:image/png;base64,${vehicle.picture}`" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-2xl">{{ vehicle.brand }} 2021</h1>
                <button class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
          </div>
          <div v-scrollanimation class="w-[410px] ml-auto h-screen translate-y-24 duration-800 bg-[#171818] dark:bg-white rounded flex flex-wrap justify-between">
            <div class="p-4 relative">
              <div class="h-10 left-[20.8rem] w-10 rounded-sm shadow-lg  shadow-[#0000005c] absolute flex hover:bg-emerald-700 bg-emerald-500 ">
                <font-awesome-icon class="text-white m-auto text-xl" icon="pen" />
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Name :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">Standard Elite </h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Brand :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">BMW</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Model :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">288i Gran Coupe</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Color :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">gray</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-[1.3rem] font-body font-bold text-white dark:text-[#171818] px-2" >Registration Number :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">021542-21-39</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Stat :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">rented</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Engine :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">Automatic</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Fuel :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg "> Gas</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Price Par Day :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg "> $150</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Price Par Hour :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg "> $10</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Passengers :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">5</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Doors :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg "> 4</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Depots :</h1>
                <ul>
                   <li class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Eloued</li>
                    <li class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Constantine</li>
                </ul>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >seconds:</h1>
                <ul class="">
                    <li class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Bluetooth</li>
                    <li class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Cruise Control</li>
                    <li class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Am/FM Stereo Radio</li>
                    <li class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Air Conditioning</li>
                    <li class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Leather Interior</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div :style="{ 'margin-left': sidebarWidth }" v-scrollanimation v-if="filter" class="flex w-[80%] left-[6.7rem]  -translate-y-10 duration-200 top-[13rem]  mx-auto justify-between dark:bg-[#171818] bg-gray-100  rounded absolute">
                         <div class="m-4">
                           <header class="border-b bg-gray-200 dark:bg-gray-800 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> Vehicles Fuel </h1>
                           </header>
                           <div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Gas</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Petrol</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Electrical</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Diesel</label>
                             </div>
                           </div>
                         </div>
                         <div class="m-4">
                           <header class="border-b bg-gray-200 dark:bg-gray-800 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> Vehicles Type </h1>
                           </header>
                           <div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Cars</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Suvs</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Tracks</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Vans</label>
                             </div>
                           </div>
                         </div>
                         <div class="m-4">
                           <header class="border-b bg-gray-200 dark:bg-gray-800 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> Vehicles Type </h1>
                           </header>
                           <div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Automatic</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Manual</label>
                             </div>
                           </div>
                         </div>
                         <div class="m-4">
                           <header class="border-b bg-gray-200 dark:bg-gray-800 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> passengers </h1>
                           </header>
                           <div class="flex">
                             <div>
                                 <div class="mx-4">
                                   <input class="w-4 h-4" type="checkbox">
                                   <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">+ 2</label>
                                 </div>
                                 <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">+ 4</label>
                                 </div>
                                 <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">+ 5</label>
                                 </div>
                             </div>
                            <div>
                                   <div class="mx-4">
                                   <input class="w-4 h-4" type="checkbox">
                                   <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">+ 7</label>
                                 </div>
                                 <div class="mx-4">
                                   <input class="w-4 h-4" type="checkbox">
                                   <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">+ 10</label>
                                 </div>
                                 <div class="mx-4">
                                   <input class="w-4 h-4" type="checkbox">
                                   <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">+ 12</label>
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
</template>

<script>
import SideBar from '../components/Sidebar.vue';
import Nav from '../components/Nav.vue';
import { sidebarWidth } from '../SideBar/sideBar';

export default {
  name: 'Vehicles-',
  data() {
    return {
      vehicles: [],
      search: '',
      filter: false,
    };
  },
  components: {
    SideBar,
    Nav,
  },
  setup() {
    return { sidebarWidth };
  },
  computed: {
    filteredVehicles() {
      return this.vehicles.filter(vehicle => vehicle.description.toLowerCase().includes(this.search.toLowerCase()));
    },
    isDark() {
      return this.$store.getters.Dark;
    },
  },
  mounted() {
    fetch('http://localhost:3000/api/admin/vehicles')
      .then(res => res.json())
      .then(data => {
        // const vehicles = data.filter(vehicle => vehicle.placeNumber >= this.filterPassengers);
        const set = new Set();
        const Output = [];
        data.forEach(car => {
          if (!set.has(car.description)) {
            set.add(car.description);
            Output.push(car);
            console.log(data);
          }
        });

        this.vehicles = Output;
        console.log(this.vrhicles);
      })
      .catch(err => console.log(err.message));
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
