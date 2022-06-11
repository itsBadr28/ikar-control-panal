<template>
<!-- eslint-disable -->
<div :class=" isDark ? 'dark' : '' " class="relative">
    <div  class=" pr-2 dark:bg-[#f1f0fe] bg-[#212529]  h-[8vh] flex justify-between">
        <div></div>
        <div class="flex bg-[#171818] dark:bg-white shadow dark:shadow-white shadow-[#171818] my-auto  items-center rounded    ">
          <div  class="flex p-1.5 justify-between">
            <img @click="getTime"  class="w-8 h-8 my-auto text-lg " :src="url" alt="">
            <!-- <font-awesome-icon v-on:click="getweather" class="text-white dark:text-[#171818] my-auto text-lg px-0.5" icon="cloud" /> -->
            <h1 class="text-white dark:text-[#171818] my-auto text-lg px-2 border-r-[2px] dark:border-[#171818] border-white">{{ parseFloat(temperature).toFixed(0) }}°C</h1>
            <h1 class="text-white dark:text-[#171818] my-auto text-lg px-2 border-r-[2px] dark:border-[#171818] border-white">{{ day }}-{{ month }}-{{ year }} </h1>
            <h1 class="text-white dark:text-[#171818] my-auto text-lg px-2">{{hour}}:{{minute}}:{{second}}</h1>
          </div>   
        </div>
        <div class="flex ">
            <div class="flex  bbg-red-500 ">
            <div class="my-auto m-0.5 w-8 h-8  dark:hover:bg-gray-200 hover:bg-gray-400 rounded-full relative">
                <font-awesome-icon class="text-white dark:text-[#212529] p-1.5  text-xl " icon="bell" />
                <span class="absolute right-1.5 w-1.5 h-1.5 bg-red-600 rounded-full top-2 "></span>
            </div>
             <div class="relative inline-block my-auto text-left">
                <button @click="toggledropDownOpen" class=" relative flex justify-center items-center group text-[#141517] rounded focus:text-white">
             <div class=" w-8 h-8  hover:bg-gray-400 dark:hover:bg-gray-200 rounded-full flex  relative ">
              <font-awesome-icon class="text-white dark:text-[#212529]  p-1.5 text-xl" icon="gear" />
            </div>
          </button>
            <div :class=" dropDownOpen ? '':'hidden'" class="absolute top-full z-10  group-focus:block min-w-full w-max bg-white mt-1 rounded">
              <div class=" origin-top-right absolute right-0 -top-1 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div @click="toggledropDownOpen" class="py-1"> 
                    <div @click="toggleuserProfile">
                    <a   class="hover:bg-slate-200 text-[#141517] block px-4 text-left py-2 text-md">Profile</a>
                      </div>                   
                      <div  
                        @click="toggleIssignIn"
                      >
                      <button
                        class="
                          text-[#141517]
                          hover:bg-slate-200
                          block
                          w-full
                          my-auto
                          text-left
                          px-4
                          py-2
                          text-md
                          font-body
                          font-bold
                        "
                      >
                        Sign out
                      <font-awesome-icon
                        class="text-[#141517] ml-28 my-auto  text-md"
                        icon="arrow-right-from-bracket"
                      />
                      </button>
                      </div>
                  </div>
                </div> 
            </div>
          </div>
              <div  @click.prevent="tiggleIsDark" class="bg-slate-200 w-8 h-8 m-1 my-auto mr-2 hover:bg-slate-300 transition  duration-500   rounded-full">
                <font-awesome-icon class="text-[#212529] p-1.5 dark:block hidden hover:rotate-180 transition duration-500 text-xl " icon="sun" />
                <font-awesome-icon class="text-[#212529] p-1.5 dark:hidden hover:rotate-180 transition duration-500 text-xl " icon="moon" />
              </div>
           <div class="flex my-auto mr-4">
             <div  class="my-auto h-9 mr-2 relative">
               <h1 class="text-sm text-gray-50 dark:text-[#171818] font-body font-bold">{{ userName }}</h1>
               <span class="text-sm absolute  text-[#acacb0] dark:text-[#171818] font-body  tracking-tight">{{ type }}</span>
             </div>  
             <div class="bg bg-cover bg bg-center relative w-9 my-auto h-9 rounded-full before:absolute before:w-2 before:h-2 before:animate-pulse before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
             </div>
           </div>    
            </div>
             
        </div>
    </div>
    <UserProfile />
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import UserProfile from './userProfile.vue';

export default {
  name: 'Nav-',
  components: {
    UserProfile,
  },
  data() {
    return {
      userName: '',
      type: '',
      temperature: 0,
      iconweather: '',
      hour: 0,
      minute: 0,
      second: 0,
      day: 0,
      month: 0,
      year: 0,
      url: '',
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
    dropDownOpen() {
      return this.$store.getters.dropDownOpen;
    },
    userProfileModalShow() {
      return this.$store.getters.userProfileModalShow;
    },
  },
  methods: {
    ...mapMutations(['tiggleIsDark']),
    ...mapMutations(["toggledropDownOpen"]),
    ...mapMutations(["toggleuserProfile"]),
    getweather: async function () {
      navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const log = position.coords.longitude;
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&units=metric&appid=6c61208811cbfeec3dcf61084ad82054`;
        const data = await fetch(baseURL);
        const weather = await data.json();
        this.url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        this.temperature = weather.main.temp;
        this.iconweather = weather.weather[0].icon;
      });
    },
    getTime() {
      setInterval(() => {
        const date = new Date();
        const [hour, minute, second] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        this.hour = hour;
        this.minute = minute;
        this.second = second;
      }, 1000);
    },
    getDate() {
      setInterval(() => {
        const date = new Date();
        const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];
        this.day = day;
        this.month = month + 1;
        this.year = year;
        // console.log(month + 1);
      }, 1);
    },
    async created() {
      this.userName = sessionStorage.getItem('userName');
      this.type = sessionStorage.getItem('type');
    },
  },
  beforeMount() {
    this.getTime();
    this.getweather();
    this.getDate();
    this.created();
  },
};
</script>

<style lang="scss" scoped>
.bg{
background-image: url("../assets/img/userImg2.jpg");
}
</style>
