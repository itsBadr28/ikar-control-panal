<template>
  <!-- eslint-disable  -->
  <div :class=" isDark ? 'dark' : '' ">
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal"
    :class="{ hidden: !updateVehicleModalShow }">
    <div class="flex items-end justify-center  min-h-screen pt-4 px-4 pb-20 text-center
      sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div class="inline-block align-bottom bg-[#171818] rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 bg-[#171818] dark:bg-white text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl text-white dark:text-[#141517] font-body font-bold">Update Vehicle</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="toggleUpdateVehicle">
              <font-awesome-icon class=" text-white dark:text-[#141517] scale-150" icon="circle-xmark" />
            </div>
          </div>

          <form @submit="postDataAddVehicle" method="post" enctype="multipart/form-data" action="http://localhost:3000/api/vehicles" >
            <div class="flex justify-between ">
            <div class="w-full mx-2">
             <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Name
                 </label>
                 <input v-model="name" name="name" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Name Offer">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Brand
                </label>
             <input v-model="brand" name="brand" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Brand of Vehicle">
                </div>
                </div>
             <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                   Model
                  </label>
                 <input v-model="model" name="model" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-userName" type="text" placeholder="Model of Vehicle">
                </div>
             </div>
              <!-- <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                   Description
                  </label>
                 <input v-model="description" name="description" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-userName" type="text" placeholder="description">
                </div>
             </div> -->
               <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Registration Number
                  </label>
                 <input v-model="matricule" name="matricule" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" type="number" placeholder="000000-00-00">
                </div>
             </div>
                <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Price Per Day
                 </label>
                 <input v-model="pricePerDay" name="pricePerDay" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500"  type="number" placeholder="Price in dollars">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Price Per Hour
                </label>
             <input v-model="pricePerHour" name="pricePerHour" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500"  type="number" placeholder="Price in dollars">
                </div>
                </div>
                
               <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Passengers
                  </label>
                  <input v-model="passengers" name="placeNumber" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="Passengers N">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Doors
                  </label>
                  <input v-model="doors" name="doorsNumber" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="Doors N">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Bags
                  </label>
                  <input v-model="bags" name="bagsNumber" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="Bags N">
                </div>
             </div>
            <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Depots
                  </label>
                <div class="flex flex-wrap justify-start">
                   <input type="radio" v-model="depot" id="" class="h-4 w-4 outline-none my-auto mx-4" name="deposit" value="11">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Alger</label>
                   <input type="radio" v-model="depot" id="" class="h-4 w-4 outline-none my-auto mx-4" name="deposit" value="10">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Eloued</label>
                   <input type="radio" v-model="depot" id="" class="h-4 w-4 outline-none my-auto mx-4" name="deposit" value="8">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Mila</label>
                   <input type="radio" v-model="depot" id="" class="h-4 w-4 outline-none my-auto mx-4" name="deposit" value="12">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Oran</label>  
                   <input type="radio" v-model="depot" id="" class="h-4 w-4 outline-none my-auto mx-4" name="deposit" value="9">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Guelma</label>                   
                 </div>
                  </div>
            </div>
            <!-- Upload img -->
             <div class="w-full ml-4">
                   <div class="flex flex-wrap -mx-3 mb-6">
                
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Fuel
                  </label>
                <div class="flex flex-wrap justify-start">
                   <input type="radio" v-model="fuel" id="" class="h-4 w-4 outline-none my-auto mx-4" name="fuelType" value="gaz">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Gaz</label>
                   <input type="radio" v-model="fuel" id="" class="h-4 w-4 outline-none my-auto mx-4" name="fuelType" value="petrol">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Petrol</label>
                   <input type="radio" v-model="fuel" id="" class="h-4 w-4 outline-none my-auto mx-4" name="fuelType" value="electric">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Electric</label>
                   <input type="radio" v-model="fuel" id="" class="h-4 w-4 outline-none my-auto mx-4" name="fuelType" value="mazot">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Mazot</label>                  
                 </div>
                </div>
             </div> 
              <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Color
                 </label>
                 <input v-model="color" name="color" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Color of Vehicle">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Year
                </label>
             <input v-model="releaseYear" name="releaseYear" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500"  type="number" placeholder="Year of Vehicle">
                </div>
                </div> 
                <div class="flex flex-wrap -mx-3 mb-10">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Transmission
                  </label>
                <div class="flex my-auto flex-wrap mt-4 justify-start">
                   <input type="radio" v-model="transmission"  class="h-4 w-4 outline-none my-auto mx-4" name="isAutomatic" value="0">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Manual</label>
                   <input type="radio" v-model="transmission"  class="h-4 w-4 outline-none my-auto mx-4" name="isAutomatic" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Automatic</label>                  
                 </div>
                </div>
             </div>
             <div class="flex flex-wrap -mx-3 mb-6"> 
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Type
                  </label>
                <div class="flex flex-wrap justify-start">
                   <input type="radio" v-model="type" id="" class="h-4 w-4 outline-none my-auto mx-4" name="type" value="Cars">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Cars</label>
                   <input type="radio" v-model="type" id="" class="h-4 w-4 outline-none my-auto mx-4" name="type" value="Suvs">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Suvs</label>
                   <input type="radio" v-model="type" id="" class="h-4 w-4 outline-none my-auto mx-4" name="type" value="Vans">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Vans</label>
                   <input type="radio" v-model="type" id="" class="h-4 w-4 outline-none my-auto mx-4" name="type" value="Truck">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Trucks</label>               
                 </div>
                </div>
             </div>
             <div class="flex flex-wrap -mx-3 mb-[16px]">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Seconds
                  </label>
                <div class="">
                    <div class="flex flex-wrap justify-start">
                   <input type="checkbox" v-model="hasbluetooth" class="h-4 w-4 outline-none my-auto mx-3 mb-1" name="hasBluetooth" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm mb-1  daek:text-gray-700 my-auto">Bluetooth</label>
                   <input type="checkbox" v-model="hascruisecontrol" class="h-4 w-4 outline-none my-auto mx-3 mb-1" name="hasAMFMstereoRadio" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm mb-1  daek:text-gray-700 my-auto"> Cruise Control</label>
                    </div>
                    <div class="flex flex-wrap justify-start">
                   <input type="checkbox" v-model="hasAMFMstereoRadio" class="h-4 w-4 outline-none my-auto mx-3 mb-1" name="hasairconditioning" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm mb-1  daek:text-gray-700 my-auto">Am/FM Stereo Radio</label>
                   <input type="checkbox" v-model="hasairconditioning" class="h-4 w-4 outline-none my-auto mx-3 mb-1" name="hasleatherInterior" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm mb-1 pr-8 daek:text-gray-700 my-auto"> Air Conditioning </label> 
                   <input type="checkbox" v-model="hasleatherInterior" class="h-4 w-4 outline-none my-auto mx-3 mb-1" name="LeatherInterior" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm mb-1 pr-8 daek:text-gray-700 my-auto"> Leather Interior </label>                  
                    </div>
                    
                 </div>
                </div>
             </div>
            <button class="text-white font-body font-bold bg-green-500 w-full py-3 rounded">Update</button>
            </div> 
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'updateVehicle',
  props: {
    name: String,
    brand: String,
    model: String,
    color: String,
    fuel: String,
    matricule: Number,
    releaseYear: Number,
    pricePerDay: Number,
    pricePerHour: Number,
    passengers: Number,
    bags: Number,
    doors: Number,
    depot: String,
    type: String,
    hasbluetooth: Number,
    hasAMFMstereoRadio: Number,
    hasleatherInterior: Number,
    hascruisecontrol: Number,
    hasairconditioning: Number,
    transmission: Number,
  },
  data() {
    return {
      schema: {
        // pickUpLocation: 'required|alphaSpaces',
        firstName: 'required|min:2|max:100|alphaSpaces',
        lastName: 'required|min:3|max:100|alphaSpaces',
        email: 'required|min:3|max:100|email',
        phone: 'required|digits:10',
        license: 'required',
        // age: 'required|min_value:18|max_value:100',
        password: 'required|min:3|max:100',
        confirm_password: 'required|confirmed:@password',
        // tos: 'required',
      },
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
    updateVehicleModalShow() {
      return this.$store.getters.updateVehicleModalShow;
    },
  },
  methods: {
    ...mapMutations(['toggleUpdateVehicle']),
  },
};
</script>
