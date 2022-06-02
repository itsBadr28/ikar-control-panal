<template>
<!-- eslint-disable -->
<SideBar />
<div class=" transition-all " :style="{ 'margin-left': sidebarWidth }" :class=" isDark ? 'dark' : '' ">
<Nav />
<div class="dark:bg-[#F1F0FE] bg-[#212529]">
  <div class=" mx-auto">
    <div class="flex flex-wrap ">
         <div v-scrollanimation class="translate-y-24 duration-1100 mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
          <div v-scrollanimation class=" duration-400 relative flex flex-col min-w-0 break-words dark:bg-white bg-[#171818] rounded-lg mb-3 xl:mb-0 shadow-lg">
          <div class="flex-auto p-4">
        <div class="flex flex-wrap">
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-white dark:text-[#171818] uppercase font-body font-bold text-sm">Visits</h5>
            <span class="font-semibold text-xl text-white dark:text-[#171818]">1,202</span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                <i class="fas fa-chart-bar"></i>
            </div>
            </div>
        </div>
        <p class="text-sm text-blueGray-400 mt-4">
            <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 2,99% </span>
            <span class="whitespace-nowrap text-white dark:text-[#171818]"> Since yesterday </span></p>
          </div>
          </div>
        </div>
        <div v-scrollanimation class="translate-y-24 duration-1000 mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
           <div v-scrollanimation class=" duration-400 relative flex flex-col min-w-0 break-words dark:bg-white bg-[#171818] rounded-lg mb-4 xl:mb-0 shadow-lg">
        <div class="flex-auto p-4">
        <div class="flex flex-wrap">
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-white dark:text-[#171818] uppercase font-bold text-xs">New users</h5>
            <span class="font-semibold text-xl text-white dark:text-[#171818]">2,999</span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                <i class="fas fa-chart-pie"></i>
            </div>
            </div>
        </div>
        <p class="text-sm text-blueGray-400 mt-4">
            <span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 4,01%</span>
            <span class="whitespace-nowrap text-white dark:text-[#171818]"> Since last week </span></p>
        </div>
           </div>
        </div>
        <div v-scrollanimation class="translate-y-24 duration-900 mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
          <div v-scrollanimation class=" duration-400 relative flex flex-col min-w-0 break-words dark:bg-white bg-[#171818] rounded-lg mb-6 xl:mb-0 shadow-lg">
        <div class="flex-auto p-4">
        <div class="flex flex-wrap">
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-white dark:text-[#171818] uppercase font-body font-bold text-xs">Orders</h5>
            <span class="font-semibold text-xl text-white dark:text-[#171818]">901</span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-blue-500">
                <i class="fas fa-users"></i>
            </div>
            </div>
        </div>
        <p class="text-sm text-blueGray-400 mt-4">
            <span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 1,25% </span>
            <span class="whitespace-nowrap text-white dark:text-[#171818]"> Since yesterday </span></p>
        </div>
          </div>
        </div>
        <div v-scrollanimation class="translate-y-24 duration-800 mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">  
           <div v-scrollanimation class=" duration-400 relative flex flex-col min-w-0 break-words dark:bg-white bg-[#171818] rounded-lg mb-6 xl:mb-0 shadow-lg">
        <div class="flex-auto p-4">
        <div class="flex flex-wrap">
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 class="text-white dark:text-[#171818] uppercase font-bold text-xs">Performance</h5>
            <span class="font-semibold text-xl text-white dark:text-[#171818]">51.02% </span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
            <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                <i class="fas fa-percent"></i>
            </div>
            </div>
        </div>
        <p class="text-sm text-blueGray-400 mt-4">
            <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 12% </span>
            <span class="whitespace-nowrap text-white dark:text-[#171818]"> Since last mounth </span></p>
        </div>
           </div>
        </div>
   </div>
    <div v-scrollanimation class="translate-y-24 duration-1200 px-5 mx-auto flex-wrap flex">
      <div v-scrollanimation class="translate-y-24 duration-400 bg-[#171818] dark:bg-white m-2 mb-4 w-[100%] mx-auto h-50 rounded-lg shadow-lg">
        <div class="shadow-lg rounded-lg overflow-hidden">
           <header class="px-5 py-4 border-b dark:border-gray-100 border-gray-800">
                <h2 class="font-bood font-bold dark:text-[#171818] text-white">Vehicles</h2>
            </header>
           <div>
             <div>
              <apexchart
                width="100%"
                height="350"
                :options="chartOptions"
                :series="series">
              </apexchart>
  </div>
           </div>
    </div>
      </div>
     </div>
     <div v-scrollanimation class="translate-y-24 duration-1200 flex justify-between w-full   h-full px-5 flex-wrap">
         <div class="flex justify-between w-full">
            <div v-scrollanimation class="duration-400 dark:bg-white bg-[#171818]  mb-4 w-[70%]   shadow-lg rounded">
            <header class="px-5 py-4 border-b dark:border-gray-100 border-gray-800">
                <h2 class="font-bood font-bold dark:text-[#171818] text-white">Last 10 Rentals</h2>
            </header>
            <div v-scrollanimation class="translate-y-24 duration-900 p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-body uppercase text-gray-400 dark:bg-white">
                            <tr v-scrollanimation class="translate-y-24 duration-900">
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Name</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Email</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Spent</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Vehicle</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">Status</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Pick-up</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Return</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Province</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y dark:divide-gray-100 divide-gray-800">
                            <tr v-scrollanimation class="translate-y-24 duration-900">
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
                                    <div class="text-left font-body font-bold text-green-500">$2,890.66</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">CHEFROLET Camaro</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">10-12-22 09:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                            </tr>
                            <tr v-scrollanimation class="translate-y-24 duration-900">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach"></div>
                                        <div class="font-body text-white dark:text-gray-800">Philip Harbach</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800   ">philip.h@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-red-500">$2,767.04</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">MERCEDES G class</div>
                                </td>
                                 <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#FFE5E5] bg-red-400 rounded-full text-[#8C2D25]  text-center">Inactive</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">7-12-22 14:00</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Constantine</div>
                                </td>
                            </tr>
                            <tr v-scrollanimation class="translate-y-24 duration-900">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk"></div>
                                        <div class="font-medium font-body text-white dark:text-gray-800">Mirko Fisuk</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">mirkofisuk@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-green-500">$2,996.00</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">JEEP Wrangler</div>
                                </td>
                                 <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">07-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Guelma</div>
                                </td>
                            </tr>
                            <tr v-scrollanimation class="translate-y-24 duration-900">
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
                                    <div class="text-left font-body font-bold  text-green-500">$1,220.66</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class=" text-white font-body dark:text-gray-800 text-left">TAYOTA Revo</div>
                                </td>
                                 <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#FFEBD5] bg-[#f2d3b2] rounded-full text-[#7C4E4B]  text-center">Suspended</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">13-12-22 07:00</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Mila</div>
                                </td>
                            </tr>
                            <tr v-scrollanimation class="translate-y-24 duration-900">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long"></div>
                                        <div class=" font-body text-white dark:text-gray-800">Burak Long</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">longburak@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-green-500">$1,890.66</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">BMW 2 Series</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#FFEBD5] bg-[#f2d3b2] rounded-full text-[#7C4E4B]  text-center">Suspended</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Eloued</div>
                                </td>
                            </tr>
                            <tr v-scrollanimation class="translate-y-24 duration-900">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long"></div>
                                        <div class=" font-body text-white dark:text-gray-800">Burak Long</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">longburak@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-green-500">$1,890.66</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">BMW 2 Series</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#FFEBD5] bg-[#f2d3b2] rounded-full text-[#7C4E4B]  text-center">Suspended</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Eloued</div>
                                </td>
                            </tr>
                            <tr v-scrollanimation class="translate-y-24 duration-900">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long"></div>
                                        <div class=" font-body text-white dark:text-gray-800">Burak Long</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">longburak@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-green-500">$1,890.66</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">BMW 2 Series</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#FFEBD5] bg-[#f2d3b2] rounded-full text-[#7C4E4B]  text-center">Suspended</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Eloued</div>
                                </td>
                            </tr>
                             <tr v-scrollanimation class="translate-y-24 duration-900">
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
                                    <div class="text-left font-body font-bold text-green-500">$2,890.66</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">CHEFROLET Camaro</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">10-12-22 09:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                            </tr>
                            <tr v-scrollanimation class="translate-y-24 duration-900">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach"></div>
                                        <div class="font-body text-white dark:text-gray-800">Philip Harbach</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800   ">philip.h@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-red-500">$2,767.04</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">MERCEDES G class</div>
                                </td>
                                 <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#FFE5E5] bg-red-400 rounded-full text-[#8C2D25]  text-center">Inactive</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">7-12-22 14:00</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Constantine</div>
                                </td>
                            </tr>
                            <tr v-scrollanimation class="translate-y-24 duration-900">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk"></div>
                                        <div class="font-medium font-body text-white dark:text-gray-800">Mirko Fisuk</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body text-white dark:text-gray-800">mirkofisuk@gmail.com</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-green-500">$2,996.00</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">JEEP Wrangler</div>
                                </td>
                                 <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">active</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">07-12-22 12:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">12-12-22 08:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Guelma</div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div v-scrollanimation class="translate-y-24 duration-1200 w-[28%] h-full ">
          <div v-scrollanimation class="duration-400 dark:bg-white bg-[#171818] m-2 mb-4  mx-auto h-[47.5%] shadow-xl rounded">
          <header class="px-5 py-4  dark:border-gray-100 ">
              <h2 class="font-bood font-bold dark:text-[#171818] text-white">Vehicle</h2>
          </header>
          <div>
              <div>
                <apexchart
                  width="100%"
                  height="350"
                  :options="chartDonut"
                  :series="series1"
                ></apexchart>
  </div>
          </div>
          </div>
          <div v-scrollanimation class=" duration-400 dark:bg-white bg-[#171818] m-2 mb-4   mx-auto h-[47.5%] shadow-xl rounded">
          <header class="px-5 py-4  dark:border-gray-100 ">
              <h2 class="font-bood font-bold dark:text-[#171818] text-white">Vehicle</h2>
          </header>
          <div>
              <div>
                <apexchart
                  width="100%"
                  height="350"
                  :options="chartDonut"
                  :series="series1"
                ></apexchart>
  </div>
          </div>
          </div>
        </div>
         </div>
        
    </div>
  </div>
    
    
</div>

</div>

</template>

<script>
import { mapMutations } from 'vuex';
import 'chartjs-adapter-moment';
import ApexCharts from 'apexcharts';
import { sidebarWidth } from '../SideBar/sideBar';
import Nav from '../components/Nav.vue';
import SideBar from '../components/Sidebar.vue';

export default {
  name: 'Dashboard-',
  components: {
    Nav,
    SideBar,
  },
  setup() {
    return { sidebarWidth };
  },
  data() {
    return {
      chartOptions: {
        plotOptions: {
        //   bar: {
        //     horizontal: true,
        //   },
        },
        chart: {
          id: "vuechart-example",
          type: 'area',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        colors: ['#e71d36', '#ff9f1c'],
      },
      chartDonut: {
        chart: {
          id: "vuechartDonut",
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
        // fill: {
        //   type: 'gradient',
        // },
        legend: {
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
          position: 'bottom',
          offsetY: 0,
        },
        labels: ["BMW", "TAYOTA", "JEEP", "HONDAY", "MARSIDES"],
        colors: ['#e71d36', '#2ec4b6', '#ff9f1c', '#8d99ae', '#4a4e69'],
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
      series1: [44, 55, 41, 17, 15],
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
          type: 'bar',
        },
        {
          name: "series-2",
          data: [50, 30, 25, 70, 41, 90, 40, 61],
        },
      ],
      data: [{
        name: 'BMW',
        data: {
          '2017-01-01 00:00:00 -0800': 3,
          '2017-01-02 00:00:00 -0800': 4,
          '2017-01-03 00:00:00 -0800': 1,
          '2017-01-04 00:00:00 -0800': 7,
        },
      },
      {
        name: 'AUDI',
        data: {
          '2017-01-01 00:00:00 -0800': 5,
          '2017-01-02 00:00:00 -0800': 4,
          '2017-01-03 00:00:00 -0800': 9,
          '2017-01-04 00:00:00 -0800': 7,
        },
      },
      {
        name: 'TAYOTA',
        data: {
          '2017-01-01 00:00:00 -0800': 1,
          '2017-01-02 00:00:00 -0800': 3,
          '2017-01-03 00:00:00 -0800': 5,
          '2017-01-04 00:00:00 -0800': 9,
        },
      },
      {
        name: 'JEEP',
        data: {
          '2017-01-01 00:00:00 -0800': 7,
          '2017-01-02 00:00:00 -0800': 2,
          '2017-01-03 00:00:00 -0800': 5,
          '2017-01-04 00:00:00 -0800': 3,
        },
      },
      ],
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
      datasets: [{
        data: [20, 50, 30, 10, 40],
        backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
      }],
      option: {
        titie: {
          display: true,
          position: "bottom",
          text: "Fruits",
        },
      },
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
  watch: {
    tiggleIsDark(isDark) {
      localStorage.tiggleIsDark = isDark;
    },
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
