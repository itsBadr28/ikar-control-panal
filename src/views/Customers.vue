<template>
<!-- eslint-disable -->
<SideBar />
<div class=" transition-all  " :style="{ 'margin-left': sidebarWidth }" :class=" isDark ? 'dark' : '' ">
  <Nav />
<div class="dark:bg-[#F1F0FE] flex px-5   flex-wrap bg-[#212529]">
    <div class="w-full  m-2 mx-auto flex ">
        <div  class="dark:bg-gray-200 bg-[#454b50] rounded w-full mx-auto " style="padding: 2px;">
    <div class="relative flex items-center">

      <!-- tab dividers -->
      <div class="absolute w-full">
        <div class="w-1/3 flex justify-between m-auto">
          <div class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out" :class="{ 'opacity-100': selectedTab === 'requests'}"></div>
          <div class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out" :class="{ 'opacity-100': selectedTab === 'excluded'}"></div>
          <div class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out" :class="{ 'opacity-100': selectedTab === 'tenants'}"></div>
        </div>
      </div>

      <!-- white sliding tab block -->
      <div class="absolute left-0 inset-y-0 w-1/4 flex dark:bg-white bg-[#171818]  transition-all ease-in-out duration-200 transform rounded shadow" :class="{'translate-x-0': selectedTab === 'tenants', 'translate-x-full': selectedTab === 'rented', 'translate-x-[200%]': selectedTab === 'excluded','translate-x-[300%]': selectedTab === 'requests'}"></div>

      <!-- clickable buttons -->
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'tenants'"><font-awesome-icon class="mr-1" icon="street-view" /> Tenants</div>
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'rented'"><font-awesome-icon class="mr-1" icon="car-on" /> Currently rented</div>
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'excluded'"><font-awesome-icon class="mr-1" icon="user-slash" /> Excluded</div>
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'requests'"><font-awesome-icon class="mr-1" icon="user-group" /> Requests</div>

    </div>
  </div>
    </div>
        <div v-if="selectedTab === 'tenants' " class=" dark:bg-white bg-[#171818] m-2 my-4 w-full mx-auto shadow-xl rounded">
            <header class="px-5 py-4 border-b dark:border-gray-100 border-gray-800">
                <h2 class="font-bood font-bold dark:text-[#171818] uppercase text-xl text-white">tenants</h2>
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
                                    <div class="font-body text-left">Rank</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Rent Number</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Province</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">Status</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">Profile tenant</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Selver</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
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
                                    <div class="text-left font-body font-bold text-[#fefb35] ">Gold</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">32</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Eloued</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
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
                                    <div class="text-left font-body font-bold text-[#4f5051] ">Iron</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">7</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Mila</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
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
                                    <div class="font-body text-white dark:text-gray-800 text-left">14</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
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
                                    <div class="font-body text-white dark:text-gray-800 text-left">12</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" @click="toggletenantProfile" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
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
         <div v-if="selectedTab === 'rented' " class=" dark:bg-white bg-[#171818] m-2 my-4 w-full mx-auto shadow-xl rounded">
            <header class="px-5 py-4 border-b dark:border-gray-100 border-gray-800">
                <h2 class="font-bood font-bold dark:text-[#171818] uppercase text-xl text-white">tenants</h2>
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
                                    <div class="font-body text-left">Rank</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Vehicle Name</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Rent Number</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Province</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">Status</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">Profile tenant</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Selver</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">BMW 2 Sires</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Selver</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">BMW 2 Sires</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">32</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Eloued</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Selver</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">BMW 2 Sires</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">7</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Mila</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Selver</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">BMW 2 Sires</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">14</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Selver</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">BMW 2 Sires</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" @click="toggletenantProfile" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
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
        <div v-if="selectedTab === 'excluded' " class=" dark:bg-white bg-[#171818] m-2 my-4 w-full mx-auto shadow-xl rounded">
            <header class="px-5 py-4 border-b dark:border-gray-100 border-gray-800">
                <h2 class="font-bood font-bold dark:text-[#171818] uppercase text-xl text-white">tenants</h2>
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
                                    <div class="font-body text-left">Reason For Ban</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Ban Status</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Ban End Date</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">Profile tenant</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Too many delays</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">temporary</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold text-white dark:text-gray-800  text-center">14-09-2022</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Vehicle damage</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">temporary</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold text-white dark:text-gray-800  text-center">12-07-2022</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Vehicle theft</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">permanent</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold text-white dark:text-gray-800  text-center">/</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Attacking the workers</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">permanent</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold text-white dark:text-gray-800  text-center">/</div>
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
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">Use in an illegal act</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">permanent</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold text-white dark:text-gray-800 rounded-full   text-center">/</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" @click="toggletenantProfile" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
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
        <div v-if="selectedTab === 'requests' " class=" dark:bg-white bg-[#171818] m-2 my-4 w-full mx-auto shadow-xl rounded">
            <header class="px-5 py-4 border-b dark:border-gray-100 border-gray-800">
                <h2 class="font-bood font-bold dark:text-[#171818] uppercase text-xl text-white">tenants</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-body uppercase text-gray-400 dark:bg-white">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">N:</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">FirstName</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">LastName</div>
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
                                    <div class="font-body text-left">License number</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Age</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center"> <font-awesome-icon icon="circle-info" /> Picture</div>
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
                                        <div class="font-body text-white dark:text-gray-800">Shatov</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Alex</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
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
                                    <div class="font-body text-white dark:text-gray-800 text-left">256465123</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">19</div>
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
                             <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">02</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Harbach</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Philip</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
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
                                    <div class="font-body text-white dark:text-gray-800 text-left">256465123</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">21</div>
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
                            <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">03</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Fisuk</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Mirko</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
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
                                    <div class="font-body text-white dark:text-gray-800 text-left">256465123</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">32</div>
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
                             <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">04</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Semklo</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Olga</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
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
                                    <div class="font-body text-white dark:text-gray-800 text-left">256465123</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">23</div>
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
                             <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">05</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Long</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Burak</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
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
                                    <div class="font-body text-white dark:text-gray-800 text-left">256465123</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">19</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" @click="toggletenantProfile" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
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
<TenantProfile />
</div>

</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Nav from '../components/Nav.vue';
import { sidebarWidth } from '../SideBar/sideBar';
import SideBar from '../components/Sidebar.vue';
import TenantProfile from '../components/tenantsProfile.vue';

export default {
  name: 'Customers-',
  data() {
    return {
      selectedTab: 'tenants',
    };
  },
  components: {
    Nav,
    SideBar,
    TenantProfile,
  },
  setup() {
    return { sidebarWidth };
  },
  computed: {
    isDark() {
      console.log('inside customers');
      return this.$store.getters.Dark;
    },
  },
  methods: {
    ...mapMutations(['tiggleIsDark']),
    ...mapMutations(['toggletenantProfile']),
  },
};
</script>

<style>

</style>
