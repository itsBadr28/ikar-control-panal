<template>
  <!-- eslint-disable  -->
  <div :class=" isDark ? 'dark' : '' ">
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal"
    :class="{ hidden: !addVehicleModalShow }">
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
            <p class="text-2xl text-white dark:text-[#141517] font-body font-bold">Add Vehicle</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="toggleAddVehicle">
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
                 <input v-model="posts.name" name="name" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Name Offer">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Brand
                </label>
             <input v-model="posts.brand" name="brand" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Brand of Vehicle">
                </div>
                </div>
             <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                   Model
                  </label>
                 <input v-model="posts.model" name="model" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-userName" type="text" placeholder="Model of Vehicle">
                </div>
             </div>
             <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                   Description
                  </label>
                 <input v-model="posts.description" name="description" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-userName" type="text" placeholder="description">
                </div>
             </div>
               <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Registration Number
                  </label>
                 <input v-model="posts.matricule" name="matricule" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" type="number" placeholder="000000-00-00">
                </div>
             </div>
              <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Price Per Day
                 </label>
                 <input v-model="posts.pricePerDay" name="pricePerDay" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500"  type="number" placeholder="Price in dollars">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Price Per Hour
                </label>
             <input v-model="posts.pricePerHour" name="pricePerHour" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500"  type="number" placeholder="Price in dollars">
                </div>
                </div>
                
             <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Passengers
                  </label>
                  <input v-model="posts.placeNumber" name="placeNumber" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="Passengers N">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Doors
                  </label>
                  <input v-model="posts.doorsNumber" name="doorsNumber" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="Doors N">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Bags
                  </label>
                  <input v-model="posts.bagsNumber" name="bagsNumber" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="Bags N">
                </div>
             </div>
             <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Depots
                  </label>
                <div class="flex flex-wrap justify-start">
                   <input type="radio" v-model="posts.deposit" id="" class="h-4 w-4 outline-none my-auto mx-4" name="deposit" value="Alger">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Alger</label>
                   <input type="radio" v-model="posts.deposit" id="" class="h-4 w-4 outline-none my-auto mx-4" name="deposit" value="Eloued">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Eloued</label>
                   <input type="radio" v-model="posts.deposit" id="" class="h-4 w-4 outline-none my-auto mx-4" name="deposit" value="Mila">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Mila</label>
                   <input type="radio" v-model="posts.deposit" id="" class="h-4 w-4 outline-none my-auto mx-4" name="deposit" value="Oran">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Oran</label>  
                   <input type="radio" v-model="posts.deposit" id="" class="h-4 w-4 outline-none my-auto mx-4" name="deposit" value="Guelma">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Guelma</label>                   
                 </div>
                </div>
             </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Fuel
                  </label>
                <div class="flex flex-wrap justify-start">
                   <input type="radio" v-model="posts.fule" id="" class="h-4 w-4 outline-none my-auto mx-4" name="fuelType" value="gaz">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Gaz</label>
                   <input type="radio" v-model="posts.fule" id="" class="h-4 w-4 outline-none my-auto mx-4" name="fuelType" value="petrol">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Petrol</label>
                   <input type="radio" v-model="posts.fule" id="" class="h-4 w-4 outline-none my-auto mx-4" name="fuelType" value="electric">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Electric</label>
                   <input type="radio" v-model="posts.fule" id="" class="h-4 w-4 outline-none my-auto mx-4" name="fuelType" value="mazot">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Mazot</label>                  
                 </div>
                </div>
             </div>
            </div>
            <!-- Upload img -->
            <div class="w-full ml-4">
              <div class="flex justify-center mb-[26px]">
                 <input  name="picture" type="file"  class=" bg-gray-200" />
                <!-- <div class="max-w-2xl mt-6 rounded-lg shadow-xl dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700">
                  <div class="m-4">
                    <label class="inline-block mb-2 dark:text-gray-500 text-gray-200">File Upload</label>
                    <div div class="flex items-center justify-center w-full">
                       <label class="flex flex-col w-96 h-[10.7rem] border-4 border-blue-200 border-dashed dark:hover:bg-gray-100 hover:bg-gray-700 dark:hover:border-gray-300 hover:border-gray-500">
                        <div class="flex flex-col items-center my-auto justify-center pt-7">
                         <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                         </div>
                        <input  name="picture" type="file"  class="opacity-0 bg-gray-200" />
                       </label>
                   </div>
                  </div>
            </div> -->
            </div>
             <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Color
                 </label>
                 <input v-model="posts.color" name="color" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Color of Vehicle">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Year
                </label>
             <input v-model="posts.releaseYear" name="releaseYear" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500"  type="number" placeholder="Year of Vehicle">
                </div>
                </div>
             <div class="flex flex-wrap -mx-3 mb-10">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Transmission
                  </label>
                <div class="flex my-auto flex-wrap mt-4 justify-start">
                   <input type="radio" v-model="posts.isAutomatic"  class="h-4 w-4 outline-none my-auto mx-4" name="isAutomatic" value="">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Manual</label>
                   <input type="radio" v-model="posts.isAutomatic"  class="h-4 w-4 outline-none my-auto mx-4" name="isAutomatic" value="true">
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
                   <input type="radio" v-model="posts.type" id="" class="h-4 w-4 outline-none my-auto mx-4" name="type" value="Cars">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Cars</label>
                   <input type="radio" v-model="posts.type" id="" class="h-4 w-4 outline-none my-auto mx-4" name="type" value="Suvs">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Suvs</label>
                   <input type="radio" v-model="posts.type" id="" class="h-4 w-4 outline-none my-auto mx-4" name="type" value="Vans">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm  daek:text-gray-700 my-auto">Vans</label>
                   <input type="radio" v-model="posts.type" id="" class="h-4 w-4 outline-none my-auto mx-4" name="type" value="Truck">
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
                   <input type="checkbox" v-model="posts.hasbluetooth" class="h-4 w-4 outline-none my-auto mx-3 mb-1" name="hasbluetooth" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm mb-1  daek:text-gray-700 my-auto">Bluetooth</label>
                   <input type="checkbox" v-model="posts.hascruisecontrol" class="h-4 w-4 outline-none my-auto mx-3 mb-1" name="hascruisecontrol" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm mb-1  daek:text-gray-700 my-auto"> Cruise Control</label>
                    </div>
                    <div class="flex flex-wrap justify-start">
                   <input type="checkbox" v-model="posts.hasAMFMstereoRadio" class="h-4 w-4 outline-none my-auto mx-3 mb-1" name="hasAMFMstereoRadio" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm mb-1  daek:text-gray-700 my-auto">Am/FM Stereo Radio</label>
                   <input type="checkbox" v-model="posts.hasairconditioning" class="h-4 w-4 outline-none my-auto mx-3 mb-1" name="hasairconditioning" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm mb-1 pr-8 daek:text-gray-700 my-auto"> Air Conditioning </label> 
                   <input type="checkbox" v-model="posts.hasleatherInterior" class="h-4 w-4 outline-none my-auto mx-3 mb-1" name="hasleatherInterior" value="1">
                   <label class="block uppercase tracking-wide text-gray-300 text-sm mb-1 pr-8 daek:text-gray-700 my-auto"> Leather Interior </label>                  
                    </div>
                    
                 </div>
                </div>
             </div>
            <button class="text-white font-body font-bold bg-green-500 w-full py-3 rounded">ADD</button>
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
  name: 'addVehicle',
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
      posts: {
        name: '',
        brand: '',
        model: '',
        type: '',
        description: '',
        matricule: '',
        pricePerDay: '',
        pricePerHour: '',
        placeNumber: '',
        doorsNumber: '',
        bagsNumber: '',
        deposit: '',
        fule: '',
        color: '',
        releaseYear: '',
        isAutomatic: '',
        hasbluetooth: null,
        hascruisecontrol: null,
        hasAMFMstereoRadio: null,
        hasairconditioning: null,
        hasleatherInterior: null,
        picture: '',
      },
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
    addVehicleModalShow() {
      return this.$store.getters.addVehicleModalShow;
    },
  },
  methods: {
    ...mapMutations(['toggleAddVehicle']),
    // onFileChange(e) {
    //   const files = e.target.files || e.dataTransfer.files;
    //   if (!files.length) {
    //     return;
    //   }
    //   this.createImage(files[0]);
    // },
    // postDataAddVehicle(e, values) {
    //   e.preventDefault();
    //   // values.array.forEach(element => {
    //   //   console.log(element);
    //   // });
    //   const inputs = document.querySelectorAll('input');
    //   inputs.forEach(input => {
    //     console.log(input.value);
    //   });
    // },
  },
};
</script>
