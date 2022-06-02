<template>
<div>
  <!-- <SideBar /> -->
  <div>
    <!-- <Nav class=" transition-all " :style="{ 'margin-left': sidebarWidth }" /> -->
    <router-view class=" transition-all " :style="{ 'margin-left': sidebarWidth }" />
  </div>
</div>
</template>

<script>
import SideBar from './components/Sidebar.vue';
import { sidebarWidth } from './SideBar/sideBar';
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    // SideBar,
    // Nav,
  },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style>
</style>
