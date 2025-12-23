import { createRouter, createWebHistory } from "vue-router";
import dashbord from "../pages/dashbord.vue";
import login from "../pages/login.vue"
import website from "../pages/website.vue";
import newWebsite from "@/pages/newWebsite.vue";
import newUser from "@/pages/newUser.vue";
import newRole from "@/pages/newRole.vue";
import usermangment from "@/pages/usermangment.vue";
import usermangmentnewuser from "@/pages/usernew.vue";
import usermangmentnewusernewrole from "@/pages/userrole.vue";
import userRoles from "@/pages/userRoles.vue";
import newuserrole from "@/pages/newuserrole.vue";
import pages from "@/pages/pages/pages.vue";
import newpage from "@/pages/pages/newpage.vue";
import addpage from "@/pages/pages/addpage.vue";
import addpage2 from "@/pages/pages/addpage2.vue";
import pagecomponent from "@/pages/pages/pagecomponent.vue";
import addnewpage from "@/pages/pages/addnewpage.vue";
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
    {
      path: "/website",
      name:"",
      component: website,
    },
    {
      path:"/website/newwebsite",
      name:"",
      component: newWebsite ,
    },
    {
      path:"/website/newuser",
      name:"",
      component: newUser ,

    },
     {
      path:"/website/newuser/newrole",
      name:"",
      component: newRole ,
    },
     {
      path:"/UserMangment",
      name:"",
      component: usermangment ,

    },
     {
      path:"/Users Management/New User",
      name:"",
      component: usermangmentnewuser ,

    },
    {
      path:"/Users Management/New User/NewRole",
      name:"",
      component: usermangmentnewusernewrole ,

    },
      {
      path:"/Users Management/New User/NewRole/roles",
      name:"",
      component: userRoles ,

    },
    {
      path:"/Users Management/New User/NewRole/roles/r",
      name:"",
      component: newuserrole ,

    },
    {
      path:"/pages",
      name:"",
      component: pages ,

    },
    {
      path:"/pages/newpage",
      name:"",
      component: newpage ,

    },
    {
      path:"/pages/newpage/addpage",
      name:"",
      component: addpage ,
    },
    {
      path:"/pages/newpage/addpage/addpage2",
      name:"",
      component: addpage2 ,
    },
    {
      path:"/pages/newpage/addpage/addpage2/pagecomponent",
      name:"",
      component: pagecomponent ,
    },
    {
      path:"/pages/addnewpage",
      name:"",
      component: addnewpage ,
    }
   
  ]
})
export default router