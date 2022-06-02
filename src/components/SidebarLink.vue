<template>
<!-- eslint-disable -->
<div :class=" isDark ? 'dark transition-all ' : 'transition-all ' ">
   <router-link :to="to" class="text-white font-body font-bold   m-2 dark:text-[#212529] link" :class="{ active: isActive} , collapsed ? 'mx-3' : 'mx-4' " >
    <!-- <font-awesome-icon  class="   text-xl mx-4 text-right mr-2" :class="icon, !collapsed ? 'pl-4' : '' " icon="moon" /> -->
    <i class="icon text-xl   " :class="icon" />
    <transition class="font-body font-bold" name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</div>
 
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { collapsed } from '../SideBar/sideBar';

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  /* margin: 0.1em 0; */
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;
  text-decoration: none;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  background-color: var(--sidebar-item-active);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
