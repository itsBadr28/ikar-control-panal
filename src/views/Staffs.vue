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
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center"></div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y dark:divide-gray-100 divide-gray-800">
                            <tr v-if="staffs" v-for="(staff,index) in staffs" class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">{{ index + 1 }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full w-8 h-8" :src="`data:image/png;base64,${staff.picture}`" width="40" height="40" alt="Alex Shatov"></div>
                                        <div class="font-body text-white dark:text-gray-800">{{ staff.userName }}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">{{ staff.email }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">{{ staff.phone }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">{{ staff.type }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">{{ staff.region }}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">Present</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn[index] = false" @mouseleave="hoverBtn[index] = true" @click="togglestaffProfile" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div @click="showProfil(index)" class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn[index] ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn[index] ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverdle[index] = false" @mouseleave="hoverdle[index] = true" class="text-lg rounded flex mx-auto  dark:bg-gray-200 py-2 my-auto text-red-500 dark:text-gray-500">
                                       <div @click="deleteStaff(staff.id, staff.type, staff.profil_id)" class=" mx-auto">
                                        <font-awesome-icon :class="hoverdle[index] ? '':'hidden'" class="flex mx-auto" icon="circle-minus" />
                                        <font-awesome-icon :class="hoverdle[index] ? 'hidden':''" class="flex mx-auto" icon="trash-can" />
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
<StaffProfile :firstName="posts.firstName"  :lastName="posts.lastName"  :phone="posts.phone"
 :email="posts.email" :profil_id="posts.profil_id"  :userName="posts.userName" :id="posts.id" :picture="posts.picture" :type="posts.type" :region="posts.region"/>
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
      hoverdle: [],
      staffs: [],
      posts: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        userName: '',
        type: '',
        picture: '',
        region: '',
        id: '',
        profil_id: '',
      },
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
    addStaffModalShow() {
      return this.$store.getters.addStaffModalShow;
    },
    staffProfileModalShow() {
      return this.$store.getters.staffProfileModalShow;
    },
  },
  mounted() {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => {
        this.staffs = data;
        data.forEach(d => console.log(d));
      })
      .catch(err => console.log(err.message));
  },
  methods: {
    ...mapMutations(["toggleAddStaff"]),
    ...mapMutations(["togglestaffProfile"]),
    showProfil(index) {
      this.posts.firstName = this.staffs[index].firstName;
      this.posts.lastName = this.staffs[index].lastName;
      this.posts.phone = this.staffs[index].phone;
      this.posts.email = this.staffs[index].email;
      this.posts.userName = this.staffs[index].userName;
      this.posts.type = this.staffs[index].type;
      this.posts.region = this.staffs[index].region;
      this.posts.picture = this.staffs[index].picture;
      this.posts.id = this.staffs[index].profil_id;
      this.posts.profil_id = this.staffs[index].id;
      console.log(this.posts.id);
    },
    deleteStaff(id, type, profil_id) {
      const url = `http://localhost:3000/api/users/${id}`;
      console.log(id);
      console.log(type);
      console.log(typeof (id));
      console.log(url);
      const data = { type, profil_id };
      console.log("data" + data);
      fetch(url, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
        },
      }).then(res => console.log(res.json()))
        .catch(err => console.log(err));
    },
  },

};
</script>
