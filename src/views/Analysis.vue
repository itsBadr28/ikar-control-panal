<template>
    <!-- eslint-disable -->
<SideBar />
<div  class=" transition-all " :style="{ 'margin-left': sidebarWidth }" :class=" isDark ? 'dark' : '' ">
  <Nav />
  <Test />
</div>
</template>

<script>
import { mapMutations } from 'vuex';
import { sidebarWidth } from '../SideBar/sideBar';
import Test from '../components/test.vue';
import Nav from '../components/Nav.vue';
import SideBar from '../components/Sidebar.vue';

export default {
  name: 'Analysis-',
  components: {
    Test,
    SideBar,
    Nav,
  },
  setup() {
    return { sidebarWidth };
  },
};
</script>
