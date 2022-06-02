<template>
<!-- eslint-disable -->

  <SideBar />
  <div class=" transition-all " :style="{ 'margin-left': sidebarWidth }" :class=" isDark ? 'dark' : '' ">
     <Nav />
    <div class="dark:bg-[#F1F0FE] flex px-5 h-[93vh]  flex-wrap bg-[#212529]">
    <div class=" dark:bg-white bg-[#171818] m-2 my-4 w-full mx-auto shadow-xl rounded">
            <header class="px-5 py-4 border-b dark:border-gray-100 flex justify-between border-gray-800">
              <div class="flex">
                <h2 class="font-bood font-bold my-auto dark:text-[#171818] uppercase text-xl text-white">Staffs</h2> 
              </div>
              <div>
                <button @click.prevent="toggleAddStaff" class=" rounded  font-body p-2 upperase bg-[#87c776] hover:bg-[#5d8951] dark:bg-[#52b788] transition-colors hover:dark:bg-[#3b8160] "> Add Staff</button>
              </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-body uppercase text-gray-400 dark:bg-white">
                            <tr>
                              <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Id</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Name</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Email</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Tel</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Age</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">position</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Province</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">Status</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">Profile Staff</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y dark:divide-gray-100 divide-gray-800">
                            <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">01</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></div>
                                        <div class="font-body text-white dark:text-gray-800">Alex Shatov</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">alexshatov@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">0775320145</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">19</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">secretary</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">Present</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                            </tr>
                             <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">02</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach"></div>
                                        <div class="font-body text-white dark:text-gray-800">Philip Harbach</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">philip.h@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">0775320145</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">21</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">Admin</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Eloued</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#fb5757] bg-red-600 rounded-full text-red-800  text-center">absent</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                            </tr>
                            <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">03</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk"></div>
                                        <div class="font-body text-white dark:text-gray-800">Mirko Fisuk</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">mirkofisuk@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">0775320145</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">32</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#4f5051] ">Admin</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Mila</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#fef0b8] bg-yellow-200 rounded-full text-yellow-800  text-center">Patient</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                            </tr>
                             <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">04</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg" width="40" height="40" alt="Olga Semklo"></div>
                                        <div class="font-body text-white dark:text-gray-800">Olga Semklo</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">olga.s@cool.design</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">0775320145</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">23</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Selver</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">Present</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                            </tr>
                             <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">05</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long"></div>
                                        <div class="font-body text-white dark:text-gray-800">Burak Long</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">longburak@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">0775320145</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">19</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Selver</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">Present</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" @click="togglestaffProfile" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</div>
<AddStaff />
<StaffProfile />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import 'chartjs-adapter-moment';
import { sidebarWidth } from '../SideBar/sideBar';
import Nav from '../components/Nav.vue';
import SideBar from '../components/Sidebar.vue';
import AddStaff from '../components/addStaff.vue';
import StaffProfile from '../components/staffProfile.vue';

export default {
  name: 'Staffs-',
  data() {
    return {
      hoverBtn: [],
    };
  },
  components: {
    Nav,
    SideBar,
    AddStaff,
    StaffProfile,
  },
  setup() {
    return { sidebarWidth };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
    ...mapState(['addStaffModalShow']),
    ...mapState(['staffProfileModalShow']),
  },
  methods: {
    ...mapMutations(["toggleAddStaff"]),
    ...mapMutations(["togglestaffProfile"]),
  },

};
</script>
