import { createRouter, createWebHistory } from "vue-router";
import dashbord from "../components/layout/sidebar.vue";
import login from "../pages/login.vue"
const router = createRouter ({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:"/",
      name:"",
      component: login,
    },
    {
      path: "/dashbord",
      name: "",
      component: dashbord
    },
   
  ]
})
export default router