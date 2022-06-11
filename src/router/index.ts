/*
 * @Author: wlj
 * @Date: 2022-05-24 09:18:01
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-01 16:29:15
 * @Description: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Notepad from '@/views/notepad/index.vue'
import Home from '@/views/Home.vue'
import VModelSty from '@/views/V-ModelSty/index.vue'
import LowCode from '@/views/LowCode/index.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: "/notepad",
    name: "Notepad",
    component: Notepad,
  },
  {
    path: "/lowCode",
    name: "LowCode",
    component: LowCode,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:'/vue3/v-model',
    name:'vmodel',
    component:VModelSty
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
