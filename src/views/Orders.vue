<template>
      <!-- eslint-disable -->

  <SideBar />
  <div class=" transition-all " :style="{ 'margin-left': sidebarWidth }" :class=" isDark ? 'dark' : '' ">
     <Nav />
    <div class="dark:bg-[#F1F0FE] flex px-5 py-4  flex-wrap bg-[#212529]">
       <div class="flex justify-between w-full py-6">
           <div class=" w-[24%] dark:bg-white bg-[#171818] shadow-lg rounded-lg h-40">
               <div class=" my-auto">
                <apexchart
                  width="100%"
                  :options="chartDonut"
                  :series="series1">
                </apexchart>
               </div>
           </div>
           <div class=" w-[24%] dark:bg-white bg-[#171818] shadow-lg rounded-lg h-40">
               <div class=" my-auto">
                <apexchart
                  width="100%"
                  :options="chartDonut"
                  :series="series1">
                </apexchart>
               </div>
           </div>
           <div class=" w-[24%] dark:bg-white bg-[#171818] shadow-lg rounded-lg h-40">
               <div class=" my-auto">
                <apexchart
                  width="100%"
                  :options="chartDonut"
                  :series="series1">
                </apexchart>
               </div>
           </div>
           <div class=" w-[24%] dark:bg-white bg-[#171818] shadow-lg rounded-lg h-40">
               <div class=" my-auto">
                <apexchart
                  width="100%"
                  :options="chartDonut"
                  :series="series1">
                </apexchart>
               </div>
           </div>
           
        </div> 
      <div class="w-full  m-2 mx-auto flex ">
        <div  class="dark:bg-gray-200 bg-[#454b50] rounded w-full mx-auto " style="padding: 2px;">
    <div class="relative flex items-center">

      <!-- tab dividers -->
      <div class="absolute w-full">
        <div class="w-1/3 flex justify-between m-auto">
          <div class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out" :class="{ 'opacity-100': selectedTab === 'excluded'}"></div>
          <div class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out" :class="{ 'opacity-100': selectedTab === 'pending'}"></div>
          <div class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out" :class="{ 'opacity-100': selectedTab === 'tenants'}"></div>
        </div>
      </div>

      <!-- white sliding tab block -->
      <div class="absolute left-0 inset-y-0 w-1/4 flex dark:bg-white bg-[#171818]  transition-all ease-in-out duration-200 transform rounded shadow" :class="{'translate-x-0': selectedTab === 'requests', 'translate-x-full': selectedTab === 'completed','translate-x-[200%]': selectedTab === 'pending', 'translate-x-[300%]': selectedTab === 'rejected'}"></div>

      <!-- clickable buttons -->
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'requests'"><font-awesome-icon class="mr-1" icon="scroll" /> Requests</div>
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'completed'"><font-awesome-icon class="mr-1" icon="check-to-slot" /> Completed Requests</div>
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'pending'"><font-awesome-icon class="mr-1" icon="hourglass" /> Pending</div>
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'rejected'"><font-awesome-icon class="mr-1" icon="file-circle-xmark" /> Rejected Requests</div>

    </div>
  </div>
    </div>
    <div class="h-screen w-full">
    <div v-scrollanimation v-if="selectedTab === 'requests'" class="translate-y-24  duration-900 dark:bg-white bg-[#171818] m-2 my-4 w-full mx-auto shadow-xl rounded">
            <header class="px-5 py-4 border-b dark:border-gray-100 flex justify-between border-gray-800">
              <div class="flex">
                <h2 class="font-bood font-bold my-auto dark:text-[#171818] uppercase text-xl text-white">Rental Requests</h2> 
              </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-body uppercase text-gray-400 dark:bg-white">
                            <tr v-scrollanimation class="translate-y-24 duration-900">
                              <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">No:</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">UserName</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Tel</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Age</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Spent</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Vehicle</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Pick-up Date</div>
                                  </th>
                                  <th class="p-2 whitespace-nowrap">
                                      <div class="font-body text-left">Return Date</div>
                                  </th>
                                  <th class="p-2 whitespace-nowrap">
                                      <div class="font-body text-left">Pick-up Adrees</div>
                                  </th>
                                  <th class="p-2 whitespace-nowrap">
                                      <div class="font-body text-left">Return Adrees</div>
                                  </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">Account Status</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y dark:divide-gray-100 divide-gray-800">
                            <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">01</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Alex Shatov</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">0775320145</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">19</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">$ 520</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">TAYOTA Revo</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">15-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">Activated</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button class="flex ml-auto rounded-md dark:bg-gray-100 bg-gray-700 py-2 px-1 text-white 
                                     transition-all duration-150 ease-in-out dark:hover:bg-gray-200 hover:bg-gray-900">
                                       <svg class="fill-gray-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                         version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                         <path
                                           d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                                         </svg>
                                     </button>
                                </td>
                            </tr>
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">02</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Philip Harbach</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">0775320145</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">21</div>
                                </td>
                                 <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">$ 1200</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">JEEP Wrangler</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">12-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">14-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">Eloued</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">Eloued</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#fb5757] bg-red-600 rounded-full text-red-800  text-center">Inactivated</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button class="flex ml-auto rounded-md dark:bg-gray-100 bg-gray-700 py-2 px-1 text-white 
                                     transition-all duration-150 ease-in-out dark:hover:bg-gray-200 hover:bg-gray-900">
                                       <svg class="fill-gray-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                         version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                         <path
                                           d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                                         </svg>
                                     </button>
                                </td>
                            </tr>
                            <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">03</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Mirko Fisuk</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">0775320145</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">32</div>
                                </td>
                                 <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">$ 742</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">BMW 2 Series</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">12-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">14-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">Mila</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">Eloued</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#fef0b8] bg-yellow-200 rounded-full text-yellow-800  text-center">Under Review</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button class="flex ml-auto rounded-md dark:bg-gray-100 bg-gray-700 py-2 px-1 text-white 
                                     transition-all duration-150 ease-in-out dark:hover:bg-gray-200 hover:bg-gray-900">
                                       <svg class="fill-gray-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                         version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                         <path
                                           d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                                         </svg>
                                     </button>
                                </td>
                            </tr>
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">04</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Olga Semklo</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">0775320145</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">23</div>
                                </td>
                                 <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">$ 580</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">BMW 3 Series</div>
                                </td>
                                 <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">12-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">14-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">Mila</div>
                                </td>
                                
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#fef0b8] bg-yellow-200 rounded-full text-yellow-800  text-center">Under Review</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button class="flex ml-auto rounded-md dark:bg-gray-100 bg-gray-700 py-2 px-1 text-white 
                                     transition-all duration-150 ease-in-out dark:hover:bg-gray-200 hover:bg-gray-900">
                                       <svg class="fill-gray-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                         version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                         <path
                                           d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                                         </svg>
                                     </button>
                                </td>
                            </tr>
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
                               <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white text-left dark:text-gray-800">05</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-body text-white dark:text-gray-800">Burak Long</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">0775320145</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">19</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">$ 120</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">TAYOTA Revo</div>
                                </td>
                                 <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">12-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">14-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">Mila</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-gray-400 ">Eloued</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#fef0b8] bg-yellow-200 rounded-full text-yellow-800  text-center">Under Review</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button class="flex ml-auto rounded-md dark:bg-gray-100 bg-gray-700 py-2 px-1 text-white 
                                     transition-all duration-150 ease-in-out dark:hover:bg-gray-200 hover:bg-gray-900">
                                       <svg class="fill-gray-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                         version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                         <path
                                           d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                                         </svg>
                                     </button>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div v-scrollanimation v-if="selectedTab === 'completed'" class="translate-y-24 duration-900 dark:bg-white bg-[#171818] m-2 my-4 w-full mx-auto shadow-xl rounded">
            <header class="px-5 py-4 border-b dark:border-gray-100 flex justify-between border-gray-800">
              <div class="flex">
                <h2 class="font-bood font-bold my-auto dark:text-[#171818] uppercase text-xl text-white">Rental Requests</h2> 
              </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-body uppercase text-gray-400 dark:bg-white">
                            <tr v-scrollanimation class="translate-y-24 duration-900">
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
                            <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                            <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
        <div v-scrollanimation v-if="selectedTab === 'pending'" class="translate-y-24 duration-900 dark:bg-white bg-[#171818] m-2 my-4 w-full mx-auto shadow-xl rounded">
            <header class="px-5 py-4 border-b dark:border-gray-100 flex justify-between border-gray-800">
              <div class="flex">
                <h2 class="font-bood font-bold my-auto dark:text-[#171818] uppercase text-xl text-white">Rental Requests</h2> 
              </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-body uppercase text-gray-400 dark:bg-white">
                            <tr v-scrollanimation class="translate-y-24 duration-900">
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
                            <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                            <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
         <div v-scrollanimation v-if="selectedTab === 'rejected'" class="translate-y-24 duration-900 dark:bg-white bg-[#171818] m-2 my-4 w-full mx-auto shadow-xl rounded">
            <header class="px-5 py-4 border-b dark:border-gray-100 flex justify-between border-gray-800">
              <div class="flex">
                <h2 class="font-bood font-bold my-auto dark:text-[#171818] uppercase text-xl text-white">Rental Requests</h2> 
              </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-body uppercase text-gray-400 dark:bg-white">
                            <tr v-scrollanimation class="translate-y-24 duration-900">
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
                            <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                            <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                            <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
                             <tr v-scrollanimation class="translate-y-24 duration-900 hover:bg-gray-800 hover:dark:bg-gray-300">
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
</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

import { sidebarWidth } from '../SideBar/sideBar';
import Nav from '../components/Nav.vue';
import SideBar from '../components/Sidebar.vue';

export default {
  name: 'Orders-',
  components: {
    Nav,
    SideBar,
  },
  setup() {
    return { sidebarWidth };
  },
  data() {
    return {
      selectedTab: 'requests',
      chartDonut: {
        chart: {
          id: "vuechartDonut",
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 0,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: 'bottom',
          offsetY: -100,
        },
        // fill: {
        //   type: 'gradient',
        // },
        // legend: {
        //   formatter: function (val, opts) {
        //     return val + " - " + opts.w.globals.series[opts.seriesIndex];
        //   },
        // },
        labels: ["BMW", "TAYOTA", "JEEP", "HONDAY"],
        colors: ['#ffff3f', '#dddf00', '#55a630', '#2b9348'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        }],
      },
      series1: [44, 55, 41, 17],
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
  },
  methods: {
    ...mapMutations(['tiggleIsDark']),
  },
};
</script>

<style  scoped>

.before-enter{
  opacity: 0;
  /* transform: translateY(100px); */
}
.enter{
opacity: 1;
transform: translateY(0px);
}
</style>
