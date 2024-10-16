import { createRouter, createWebHistory } from 'vue-router';
import BodyComp from '../components/BodyComp.vue';
import LoginComp from '../components/LoginComp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BodyComp,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComp,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
