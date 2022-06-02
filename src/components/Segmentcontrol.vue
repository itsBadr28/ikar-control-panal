<template>
<!-- eslint-disable  -->
<div :class=" isDark ? 'dark ' : '' ">
    <div  class="dark:bg-gray-200 bg-[#454b50] rounded w-[90%] mx-auto " style="padding: 2px;">
    <div class="relative flex items-center">

      <!-- tab dividers -->
      <div class="absolute w-full">
        <div class="w-1/3 flex justify-between m-auto">
          <div class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out" :class="{ 'opacity-100': selectedTab === 'owner'}"></div>
          <div class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out" :class="{ 'opacity-100': selectedTab === 'admin'}"></div>
        </div>
      </div>

      <!-- white sliding tab block -->
      <div class="absolute left-0 inset-y-0 w-1/3 flex dark:bg-white bg-[#171818]  transition-all ease-in-out duration-200 transform rounded shadow" :class="{'translate-x-0': selectedTab === 'admin', 'translate-x-full': selectedTab === 'secretary', 'translate-x-[200%]': selectedTab === 'owner'}"></div>

      <!-- clickable buttons -->
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'admin'">Admin</div>
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'secretary'">Secretary</div>
      <div class="relative flex-1 dark:text-[#171818] text-white flex text-sm font-semibold capitalize items-center justify-center cursor-pointer m-2 p-px" @click="selectedTab = 'owner'">Owner</div>

    </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Test-',
  data() {
    return {
      selectedTab: 'admin',
    };
  },
  computed: {
    isDark() {
      return this.$store.getters.Dark;
    },
  },
};
</script>
