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
            <div v-if="filteredVehicles" v-for="(vehicle, index) in filteredVehicles" :key="vehicle" v-scrollanimation  class=" translate-y-16 mr-2.5  duration-500   w-[32%]  mb-16 ">
              <div class="bg-[#171818] dark:bg-white h-[21.5rem] rounded-t-lg  ">
               <div class="flex  justify-between">
                <div></div>
                 <h1 class="text-white dark:text-[#171818] text-2xl font-body font-bold px-2 p-1 uppercase text-center">{{ vehicle.name }}</h1>
                 <div class="h-4 p-2 w-4 bg-white rounded-full"></div>
                </div> 
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
                  <h1 class="font-body py-1">{{ vehicle.fuelType }}</h1>
                </div>
                 </div>
                 <img :src="`data:image/png;base64,${vehicle.picture}`" alt="">
              </div>
              <div class="absolute rounded-b flex  w-full h-12 bg-[#10b981]">
                <h1 class="text-white my-auto font-body font-bold mx-4 text-xl">{{ vehicle.brand }} {{ vehicle.releaseYear }}</h1>
                <button @click="showMore(index)" class=" h-10 my-auto ml-auto mr-4 rounded text-sm font-body font-bold text-[#212529] bg-white p-2"> SHOW MORE </button>
              </div>
            </div>
          </div>
          <div>
            <button @click="toggleAddVehicle" v-scrollanimation class="w-[410px] mb-4 ml-auto h-12 translate-y-24 duration-800 bg-emerald-500 hover:bg-emerald-600 my-auto rounded flex flex-wrap">
              <h1 class="text-white m-auto font-body font-bold text-xl"> 
                <font-awesome-icon class="my-auto" icon="plus" />
                Add Vehicles </h1>
            </button>
          <div v-scrollanimation class="w-[410px] ml-auto  translate-y-24 duration-800 bg-[#171818] dark:bg-white rounded flex flex-wrap justify-between">
            <div class="p-4 ">
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Name :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.name}} </h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Type :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.type}} </h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Brand :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.brand}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Model :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.model}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Color :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.color}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-[1.3rem] font-body font-bold text-white dark:text-[#171818] px-2" >Registration Number :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.matricule}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >State :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.state}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Transmission :</h1>
                <h1 v-if="posts.transmission == '1'" class=" text-white dark:text-[#171818] py-1 font-body text-lg ">Automatic</h1>
                <h1 v-if="posts.transmission == '0'" class=" text-white dark:text-[#171818] py-1 font-body text-lg ">Manual</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Fuel :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.fuel}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Price Per Day :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.pricePerDay}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Price Per Hour :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.pricePerHour}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Passengers :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg ">{{posts.passengers}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Doors :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg "> {{posts.doors}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Bags :</h1>
                <h1 class=" text-white dark:text-[#171818] py-1 font-body text-lg "> {{posts.bags}}</h1>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >Depots :</h1>
                <ul>
                   <li class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> {{posts.depot}}</li>
                </ul>
              </div>
              <div class="flex ">
                <h1 class=" text-2xl font-body font-bold text-white dark:text-[#171818] px-2" >seconds:</h1>
                <ul class="">
                    <li v-if="posts.hasbluetooth" class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Bluetooth</li>
                    <li v-if="posts.hascruisecontrol" class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Cruise Control</li>
                    <li v-if="posts.hasAMFMstereoRadio " class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Am/FM Stereo Radio</li>
                    <li v-if="posts.hasAirConditioning" class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Air Conditioning</li>
                    <l v-if="posts.hasLeatherInterior" class=" text-white dark:text-[#171818] py-1 font-body text-lg px-1 "> Leather Interior</l>
                </ul>
              </div>
            </div>
            <div class="flex w-full">
              <button @click="deleteVehicle" class="w-[100%] mx-4  rounded my-4 bg-red-500 text-white py-2 px-4 uppercase font-body font-bold"> Delete</button>
            </div>

          </div>
          </div>
          <div v-scrollanimation @click="toggleUpdateVehicle" class="-translate-y-10 duration-200 h-10 w-10 left-[1470px] top-[20rem] rounded-sm shadow-lg  shadow-[#0000005c] absolute flex hover:bg-emerald-700 bg-emerald-500 ">
                <font-awesome-icon class="text-white m-auto text-xl" icon="pen" />
              </div>
        </div>
        <div :style="{ 'margin-left': sidebarWidth }" v-scrollanimation v-if="filter" class="flex w-[80%] left-[6.7rem]  -translate-y-10 duration-200 top-[13rem]  mx-auto justify-between dark:bg-[#171818] bg-gray-100  rounded absolute">
                         <div class="m-4">
                           <header class="border-b rounded-sm bg-gray-200 dark:bg-gray-800 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> Fuel </h1>
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
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2 " for="">Diesel</label>
                             </div>
                           </div>
                         </div>
                         <div class="m-4">
                           <header class="border-b rounded-sm bg-gray-200 dark:bg-gray-800 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> Type </h1>
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
                           <header class="border-b rounded-sm bg-gray-200 dark:bg-gray-800 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> Transmission </h1>
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
                           <header class="border-b rounded-sm bg-gray-200 dark:bg-gray-800 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> State </h1>
                           </header>
                           <div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Available</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Rented</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Dead insurance card</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Under Maintenance</label>
                             </div>
                             <div class="mx-4">
                               <input class="w-4 h-4" type="checkbox">
                               <label class="text-lg text-[#171818] dark:text-white font-body px-2" for="">Lost</label>
                             </div>
                           </div>
                         </div>
                         <div class="m-4">
                           <header class="border-b rounded-sm bg-gray-200 dark:bg-gray-800 border-[#10b981]">
                            <h1 class="text dark:text-white text-[#171818] font-body font-bold py-2 px-4"> passengers </h1>
                           </header>
                           <select class=" w-full text-lg my-2 px-4 h-10 font-body font-bold" name="" id="">
                             <option class=" font-body" value="2"> +2 </option>
                             <option class=" font-body" value="4"> +4 </option>
                             <option class=" font-body" value="5"> +5 </option>
                             <option class=" font-body" value="7"> +7 </option>
                             <option class=" font-body" value="10"> +10 </option>
                             <option class=" font-body" value="12"> +12 </option>
                           </select>
                         </div>
                         <div class=" w-[20%] mt-auto  mb-4">
                         <button class="bg-[#10b981] w-2/3 ml-16 rounded text-white py-2 px-4">Apply</button>
                         </div>
        </div>
       </div>
        <AddVehicles />
        <UpdateVehicle  :name="posts.name"  :matricule="posts.matricule"  :brand="posts.brand" :model="posts.model" :color="posts.color" :releaseYear="posts.releaseYear" :hasairconditioning="posts.hasairconditioning"
        :fuel="posts.fuel" :pricePerDay="posts.pricePerDay" :pricePerHour="posts.pricePerHour" :passengers="posts.passengers" :hasbluetooth="posts.hasbluetooth" :hascruisecontrol="posts.hascruisecontrol"
        :bags="posts.bags" :doors="posts.doors"  :id="posts.id" :depot="posts.depot" :state="posts.state" :description="posts.description" :type="posts.type"   :hasAMFMstereoRadio="posts.hasAMFMstereoRadio"  :hasleatherInterior="posts.hasleatherInterior"  :transmission="posts.transmission"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import SideBar from '../components/Sidebar.vue';
import Nav from '../components/Nav.vue';
import AddVehicles from '../components/AddVehicle.vue';
import UpdateVehicle from '../components/UpdateVehicle.vue';
import { sidebarWidth } from '../SideBar/sideBar';

export default {
  name: 'Vehicles-',
  data() {
    return {
      vehicles: [],
      search: '',
      filter: false,
      posts: {
        id: '',
        description: '',
        matricule: '',
        name: '',
        brand: '',
        model: '',
        color: '',
        type: '',
        transmission: '',
        state: '',
        fuel: '',
        pricePerDay: '',
        pricePerHour: '',
        passengers: '',
        releaseYear: '',
        bags: '',
        doors: '',
        depot: '',
        hasbluetooth: '',
        hascruisecontrol: '',
        hasAMFMstereoRadio: '',
        hasAirConditioning: '',
        hasLeatherInterior: '',
      },
    };
  },
  components: {
    SideBar,
    Nav,
    AddVehicles,
    UpdateVehicle,
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
    addVehicleModalShow() {
      return this.$store.getters.addVehicleModalShow;
    },
  },
  mounted() {
    fetch('http://localhost:3000/api/vehicles')
      .then(res => res.json())
      .then(data => {
        // const vehicles = data.filter(vehicle => vehicle.placeNumber >= this.filterPassengers);
        this.vehicles = data;
      })
      .catch(err => console.log(err.message));
  },
  methods: {
    ...mapMutations(['toggleAddVehicle']),
    ...mapMutations(['toggleUpdateVehicle']),
    showMore(index) {
      this.posts.name = this.filteredVehicles[index].name;
      this.posts.id = this.filteredVehicles[index].id;
      this.posts.type = this.filteredVehicles[index].type;
      this.posts.description = this.filteredVehicles[index].description;
      this.posts.matricule = this.filteredVehicles[index].matricule;
      this.posts.brand = this.filteredVehicles[index].brand;
      this.posts.model = this.filteredVehicles[index].model;
      this.posts.color = this.filteredVehicles[index].color;
      this.posts.state = this.filteredVehicles[index].status;
      this.posts.transmission = this.filteredVehicles[index].isAutomatic;
      this.posts.fuel = this.filteredVehicles[index].fuelType;
      this.posts.pricePerDay = this.filteredVehicles[index].pricePerDay;
      this.posts.pricePerHour = this.filteredVehicles[index].pricePerHour;
      this.posts.passengers = this.filteredVehicles[index].placeNumber;
      this.posts.doors = this.filteredVehicles[index].doorsNumber;
      this.posts.depot = this.filteredVehicles[index].deposit_id;
      this.posts.bags = this.filteredVehicles[index].bagsNumber;
      this.posts.releaseYear = this.filteredVehicles[index].releaseYear;
      this.posts.hasbluetooth = this.filteredVehicles[index].hasbluetooth;
      this.posts.hascruisecontrol = this.filteredVehicles[index].hascruisecontrol;
      this.posts.hasAMFMstereoRadio = this.filteredVehicles[index].hasAMFMstereoRadio;
      this.posts.hasairconditioning = this.filteredVehicles[index].hasairconditioning;
      this.posts.hasLeatherInterior = this.filteredVehicles[index].hasleatherInterior;
    },
    deleteVehicle() {
      const matricule = this.posts.matricule;
      const url = `http://localhost:3000/api/vehicles/${matricule}`;
      console.log(typeof (matricule));
      console.log(url);
      fetch(url, {
        method: "DELETE",
      }).then(res => console.log(res.json()))
        .catch(err => console.log(err));
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
