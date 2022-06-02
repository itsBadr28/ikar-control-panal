<template>
<div>
   <Welcome />
   <!-- <SideBar /> -->
  <router-view/>
</div>
</template>

<script>
import Welcome from '../components/Welcome.vue';
// import SideBar from '../components/Sidebar.vue';

export default {
  name: 'controlPanel',
  data() {
    return {
    };
  },
  components: {
    // SideBar,
    Welcome,
  },
  methods: {
    async created() {
      this.axios.get('controlPanel');
      const data = sessionStorage.getItem('userName');
      console.log(data);
      // this.name = data.axios.profil.userName;
    },
  },
};
</script>
