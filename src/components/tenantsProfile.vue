<template>
  <!-- eslint-disable  -->
  <div :class=" isDark ? 'dark' : '' ">
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal"
    :class="{ hidden: !tenantProfileModalShow }">
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
            <p class="text-2xl text-white dark:text-[#141517] font-body font-bold">Profile</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="toggletenantProfile">
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
                 <h2 class="text-lg text-white dark:text-gray-600 font-semibold">AD Badr Eddine</h2>
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
      
                <div class="text-xs text-gray-400/80 hover:text-gray-400">Admin</div>
              </div>

        <!-- Badge Location -->
             <div class="flex flex-row">
               <font-awesome-icon  class="mr-2 h-3.5 w-3.5 my-auto text-gray-500/80" icon="shield-halved" />
     
               <div class="text-xs text-gray-400/80 hover:text-gray-400">Selver</div>
             </div>

        <!-- Badge phone-->
        <div class="flex flex-row">
          <font-awesome-icon class="mr-2 h-3 my-auto w-3 text-gray-500/80" icon="phone" />

          <div class="text-xs text-gray-400/80 hover:text-gray-400">0779255292</div>
        </div>
           </div>

      <!-- Mini Cards -->
      <!-- <div class="mt-2 flex flex-row items-center space-x-5">
        <a href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div class="flex flex-row items-center justify-center">
            <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
              </svg>

            <span class="font-bold text-gray-600"> 4.6K </span>
          </div>

          <div class="mt-2 text-sm text-gray-400">Comments</div>
        </a>
        <a href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div class="flex flex-row items-center justify-center">
            <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z" />
              </svg>

            <span class="font-bold text-gray-600"> 45 </span>
          </div>

          <div class="mt-2 text-sm text-gray-400">Projects</div>
        </a>
        <a href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div class="flex flex-row items-center justify-center">
            <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M5.68,19.74C7.16,20.95 9,21.75 11,21.95V19.93C9.54,19.75 8.21,19.17 7.1,18.31M13,19.93V21.95C15,21.75 16.84,20.95 18.32,19.74L16.89,18.31C15.79,19.17 14.46,19.75 13,19.93M18.31,16.9L19.74,18.33C20.95,16.85 21.75,15 21.95,13H19.93C19.75,14.46 19.17,15.79 18.31,16.9M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12M4.07,13H2.05C2.25,15 3.05,16.84 4.26,18.32L5.69,16.89C4.83,15.79 4.25,14.46 4.07,13M5.69,7.1L4.26,5.68C3.05,7.16 2.25,9 2.05,11H4.07C4.25,9.54 4.83,8.21 5.69,7.1M19.93,11H21.95C21.75,9 20.95,7.16 19.74,5.68L18.31,7.1C19.17,8.21 19.75,9.54 19.93,11M18.32,4.26C16.84,3.05 15,2.25 13,2.05V4.07C14.46,4.25 15.79,4.83 16.9,5.69M11,4.07V2.05C9,2.25 7.16,3.05 5.68,4.26L7.1,5.69C8.21,4.83 9.54,4.25 11,4.07Z" />
              </svg>

            <span class="font-bold text-gray-600"> 120K </span>
          </div>

          <div class="mt-2 text-sm text-gray-400">Downloads</div>
        </a>
      </div> -->
    </div>

    <!-- Right Actions Container -->
    <div class="w-100 flex flex-grow flex-col items-end justify-start">
      <div class="flex flex-row space-x-3">
        <!-- Follow Button -->
        <div>
        <button
          class="flex rounded-sm mb-4 w-28 bg-yellow-500 py-1 px-4 text-white transition-all duration-150 ease-in-out hover:bg-yellow-600">
          <font-awesome-icon class="my-auto mr-2" icon="triangle-exclamation" />
            Warning
        </button>
        <button
          class="flex rounded-sm w-28  bg-red-500 py-1 px-4 text-white transition-all duration-150 ease-in-out hover:bg-red-600">
          <font-awesome-icon class="my-auto mr-2" icon="ban" />
            Ban
        </button>
        </div>

        <!-- More Actions Button -->
        <!-- <button class="flex rounded-md h-10 dark:bg-gray-100 bg-gray-700 py-2 px-1 text-white 
         transition-all duration-150 ease-in-out dark:hover:bg-gray-200 hover:bg-gray-900">
          <svg class="fill-gray-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
            </svg>
        </button> -->
      </div>
    </div>
            </div>
          </div>
          <div>
           <div class="mt-2 flex flex-row items-center space-x-5">
        <a href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div class="flex flex-row items-center justify-center">
            <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
              </svg>

            <span class="font-bold text-gray-600"> 4.6K </span>
          </div>

          <div class="mt-2 text-sm text-gray-400">Comments</div>
        </a>
        <a href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div class="flex flex-row items-center justify-center">
            <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z" />
              </svg>

            <span class="font-bold text-gray-600"> 45 </span>
          </div>

          <div class="mt-2 text-sm text-gray-400">Projects</div>
        </a>
        <a href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div class="flex flex-row items-center justify-center">
            <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M5.68,19.74C7.16,20.95 9,21.75 11,21.95V19.93C9.54,19.75 8.21,19.17 7.1,18.31M13,19.93V21.95C15,21.75 16.84,20.95 18.32,19.74L16.89,18.31C15.79,19.17 14.46,19.75 13,19.93M18.31,16.9L19.74,18.33C20.95,16.85 21.75,15 21.95,13H19.93C19.75,14.46 19.17,15.79 18.31,16.9M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12M4.07,13H2.05C2.25,15 3.05,16.84 4.26,18.32L5.69,16.89C4.83,15.79 4.25,14.46 4.07,13M5.69,7.1L4.26,5.68C3.05,7.16 2.25,9 2.05,11H4.07C4.25,9.54 4.83,8.21 5.69,7.1M19.93,11H21.95C21.75,9 20.95,7.16 19.74,5.68L18.31,7.1C19.17,8.21 19.75,9.54 19.93,11M18.32,4.26C16.84,3.05 15,2.25 13,2.05V4.07C14.46,4.25 15.79,4.83 16.9,5.69M11,4.07V2.05C9,2.25 7.16,3.05 5.68,4.26L7.1,5.69C8.21,4.83 9.54,4.25 11,4.07Z" />
              </svg>

            <span class="font-bold text-gray-600"> 120K </span>
          </div>

          <div class="mt-2 text-sm text-gray-400">Downloads</div>
        </a>
      </div> 
          </div>
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
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
    tenantProfileModalShow() {
      return this.$store.getters.tenantProfileModalShow;
    },
  },
  methods: {
    ...mapMutations(['toggleAddStaff']),
    ...mapMutations(['toggletenantProfile']),
    register(values) {
      console.log(values);
    },
    login(values) {
      console.log(values);
    },
  },
};
</script>
