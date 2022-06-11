import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import ControlPanel from '../views/ControlPanel.vue';
import Dashboard from '../views/Dashboard.vue';
import Orders from '../views/Orders.vue';
import Analysis from '../views/Analysis.vue';
import Customers from '../views/Customers.vue';
import Staffs from '../views/Staffs.vue';
import Vehicles from '../views/Vehicles.vue';
import Examine from '../views/Examine.vue';
import testSignature from '../views/testPdf.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/controlPanel',
    name: 'ControlPanel',
    component: ControlPanel,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/Analysis',
    name: 'Analysis',
    component: Analysis,
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
  },
  {
    path: '/staffs',
    name: 'Staffs',
    component: Staffs,
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: Vehicles,
  },
  {
    path: '/examine',
    name: 'Examine',
    component: Examine,
  },
  {
    path: '/test',
    name: 'testSignature',
    component: testSignature,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
