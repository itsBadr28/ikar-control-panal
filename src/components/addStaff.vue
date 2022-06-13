<template>
  <!-- eslint-disable  -->
  <div :class=" isDark ? 'dark' : '' ">
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal"
    :class="{ hidden: !addStaffModalShow }">
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
            <p class="text-2xl text-white dark:text-[#141517] font-body font-bold">Add Staff</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="toggleAddStaff">
              <font-awesome-icon class=" text-white dark:text-[#141517] scale-150" icon="circle-xmark" />
            </div>
          </div>

          <form @submit="postDataAddStaff" method="post" enctype="multipart/form-data" action="http://localhost:3000/api/users">
            <div class="flex justify-between ">
            <div class="w-full mx-2">
             <div class="flex flex-wrap -mx-3 mb-6">
               <!-- first Name -->
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                 </label>
                 <input v-model="posts.firstName" name="firstName" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane">
              </div>
              <!-- last Name -->
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
             <input v-model="posts.lastName" name="lastName" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                </div>
                </div>
             <!-- user Name -->
             <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                   User Name
                  </label>
                 <input v-model="posts.userName" name="userName" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" type="text" placeholder="User Name">
                </div>
             </div>
                <!-- email -->
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                   EMAIL
                  </label>
                 <input v-model="posts.email" name="email" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="EMAIL@IKAR.com">
                </div>
             </div>
             <!-- passsword -->
               <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                 <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-password">
                 Password
                  </label>
                 <input v-model="posts.password" name="password" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="******************">
                </div>
             </div>
             <div class="flex flex-wrap -mx-3 mb-2">
               <!-- PHONE -->
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    PHONE
                  </label>
                  <input v-model="posts.phone" name="phone" class="appearance-none block w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="0779352250">
                </div>
                <!-- position -->
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-300 daek:text-gray-700 text-xs font-bold mb-2" for="grid-state">	
                      position
                  </label>
                <div class="relative">
                  <select v-model="posts.type" name="type" class="block appearance-none w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none dark:focus:bg-white focus:border-gray-500" id="grid-state">
                    <option value="admin">Admin</option>
                    <option value="secretary">secretary</option>
                    <option value="mechanic">Mechanic</option>
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
                  <select v-model="posts.region" name="region" class="block appearance-none w-full dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  dark:focus:bg-white focus:border-gray-500" id="grid-state">
                    <option value="Eloued">Eloued</option>
                    <option value="Guelma">Guelma</option>
                    <option value="Alger">Alger</option>
                    <option value="Mila">Mila</option>
                    <option value="Mila">Oran</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
               </div>
             </div>
            </div>
            <!-- Upload img -->
            <div class="w-full ml-4">
              <div class="flex justify-center mb-[48px]">
                <div class="max-w-2xl mt-6 rounded-lg shadow-xl dark:bg-gray-200 bg-gray-800 dark:text-gray-700 text-gray-200 border dark:border-gray-200 border-gray-700">
                  <div class="m-4">
                    <label class="inline-block mb-2 dark:text-gray-500 text-gray-200">File Upload</label>
                    <div div class="flex items-center justify-center w-full">
                       <label class="flex flex-col w-96 h-[16.6rem] border-4 border-blue-200 border-dashed dark:hover:bg-gray-100 hover:bg-gray-700 dark:hover:border-gray-300 hover:border-gray-500">
                        <div class="flex flex-col items-center my-auto justify-center pt-7">
                         <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                         </div>
                        <input name="picture" type="file" class="opacity-0 bg-gray-200" />
                       </label>
                   </div>
                  </div>
            </div>
            </div>
            <button class="text-white font-body font-bold bg-green-500 w-full py-3 rounded">SEND</button>
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
  name: 'addStaff',
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
      posts: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        userName: '',
        password: '',
        type: '',
        region: '',
      },
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
    ...mapState(['addStaffModalShow']),
  },
  methods: {
    ...mapMutations(['toggleAddStaff']),
    register(values) {
      console.log(values);
    },
    login(values) {
      console.log(values);
    },
  },
};
</script>
