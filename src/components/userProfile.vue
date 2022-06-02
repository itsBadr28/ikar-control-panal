<template>
  <!-- eslint-disable  -->
  <div :class=" isDark ? 'dark' : '' ">
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal"
    :class="{ hidden: !userProfileModalShow }">
    <div class="flex items-end justify-center  min-h-screen pt-4 px-4 pb-20 text-center
      sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div class="inline-block align-bottom bg-[#171818] rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="my-auto bg-[#171818] dark:bg-[#f1f0fe] text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center px-2 pt-1 pb-2 ">
            <p class="text-2xl text-white py-4 dark:text-[#141517] font-body font-bold">Your Profile</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="toggleuserProfile">
              <font-awesome-icon class=" text-white dark:text-[#141517] scale-150" icon="circle-xmark" />
            </div>
          </div>
          <!-- body -->
          <div class=" mb-2 grid">
            <div class="flex flex-row rounded-lg bg-gray-800 dark:bg-white  p-6">
              <div class="relative">
                <img class="w-20 h-20 rounded-md object-cover" src="https://api.lorem.space/image/face?w=150&h=150"
                  alt="User" />
                <div
                  class="absolute -right-3 bottom-5 h-5 w-5 sm:top-2 rounded-full border-4 border-white bg-green-400 sm:invisible md:visible"
                  title="User is online"></div>
              </div>
              <div class="flex flex-col px-6">
              <div class="flex h-8 flex-row">
               <!-- Username -->
               <a  target="_blank">
                 <h2 class="text-lg text-white dark:text-gray-600 font-semibold">{{userName}}</h2>
               </a>
        <!-- User Verified -->
              <svg class="my-auto ml-2 h-5 fill-blue-400" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                </svg>
            </div>

            <!-- Meta Badges -->
            <div class="mt-auto flex flex-row space-x-2">
              <!-- Badge Role -->
              <div class="flex flex-row">
                <svg class="mr-2 h-4 w-4 fill-gray-500/80" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
               </svg>
      
                <div class="text-xs text-gray-400/80 hover:text-gray-400">{{type}}</div>
              </div>

        <!-- Badge Location -->
             <div class="flex flex-row">
               <svg class="mr-2 h-4 w-4 fill-gray-500/80" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                 <path
                   d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                 </svg>
     
               <div class="text-xs text-gray-400/80 hover:text-gray-400">ELoued</div>
             </div>

        <!-- Badge phone-->
        <div class="flex flex-row">
          <font-awesome-icon class="mr-2 h-3 my-auto w-3 text-gray-500/80" icon="phone" />

          <div class="text-xs text-gray-400/80 hover:text-gray-400">0779255292</div>
        </div>
           </div>

    </div>

    <!-- Right Actions Container -->
    <div class="w-100 flex flex-grow flex-col items-end justify-start">
      <div class="flex flex-row space-x-3">
       

        <!-- More Actions Button -->
        <button class="flex rounded-md dark:bg-gray-100 bg-gray-700 py-2 px-1 text-white 
        transition-all duration-150 ease-in-out dark:hover:bg-gray-200 hover:bg-gray-900">
          <svg class="fill-gray-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
            </svg>
        </button>
      </div>
    </div>
            </div>
          </div>
           <form class="">
            <div class="flex justify-between ">
            <div class="w-full mx-2">
             <div class="flex flex-wrap -mx-3 mb-6">
               <!-- first Name -->
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                 </label>
                 <input class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane">
              </div>
              <!-- last Name -->
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
             <input class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                </div>
                </div>
             <!-- user Name -->
             <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                   User Name
                  </label>
                 <input class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-userName" type="text" placeholder="User Name">
                </div>
             </div>
                <!-- email -->
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                   EMAIL
                  </label>
                 <input class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="EMAIL@IKAR.com">
                </div>
             </div>
             <!-- passsword -->
               <!-- <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Password
                  </label>
                 <input class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
                </div>
             </div> -->
             <div class="flex flex-wrap -mx-3 mb-2">
               <!-- PHONE -->
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    PHONE
                  </label>
                  <input class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-city" type="tel" placeholder="0779352250">
                </div>
                <!-- position -->
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-state">	
                      position
                  </label>
                <div class="relative">
                  <select class="block  appearance-none w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>{{type}}</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
               </div>
               <!-- Region -->
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-state">	
                      Region
                  </label>
                <div class="relative">
                  <select class="block appearance-none w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  dark:focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>ELoued</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
               </div>
             </div>
             <div class="w-full my-4 mx-auto">
              <button class="text-white font-body font-bold bg-green-500 w-full py-3 rounded">Update</button>
            </div>
            </div>
            <!-- Upload img -->
            
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
  name: 'StaffProfile',
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
      schemaLogin: {
        password: 'required|min:3|max:100',
        email: 'required|min:3|max:100|email',
        remember: '',
      },
      userName: '',
      type: '',
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
    userProfileModalShow() {
      return this.$store.getters.userProfileModalShow;
    },
  },
  methods: {
    // ...mapMutations(['toggleAddStaff']),
    ...mapMutations(['toggleuserProfile']),
    // register(values) {
    //   console.log(values);
    // },
    // login(values) {
    //   console.log(values);
    // },
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
