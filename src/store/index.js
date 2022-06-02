import { createStore } from 'vuex';

function getMode() {
  const mode = localStorage.getItem('mode');
  console.log('inside index');
  if (mode === 'true') {
    console.log(mode);
    return mode;
  } else {
    console.log(mode);
    return false;
  }
}
export default createStore({
  state: {
    Dark: getMode(),
    addStaffModalShow: false,
    staffProfileModalShow: false,
    tenantProfileModalShow: false,
  },
  getters: {
    Dark: (state) => state.Dark,
    addStaffModalShow: (state) => state.addStaffModalShow,
    staffProfileModalShow: (state) => state.staffProfileModalShow,
    tenantProfileModalShow: (state) => state.tenantProfileModalShow,
  },
  mutations: {
    tiggleIsDark: (state) => {
      state.Dark = !state.Dark;
      localStorage.setItem('mode', state.Dark);
      console.log(getMode());
    },
    toggleAddStaff: (state) => {
      state.addStaffModalShow = !state.addStaffModalShow;
    },
    togglestaffProfile: (state) => {
      state.staffProfileModalShow = !state.staffProfileModalShow;
      console.log(staffProfileModalShow);
    },
    toggletenantProfile: (state) => {
      state.tenantProfileModalShow = !state.tenantProfileModalShow;
      console.log(tenantProfileModalShow);
    },
  },
});
