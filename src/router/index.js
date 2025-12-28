import { createRouter, createWebHistory } from "vue-router";
import dashbord from "../pages/dashbord.vue";
import login from "../pages/login.vue"
import website from "../pages/website/website.vue";
import newWebsite from "@/pages/website/newWebsite.vue";
import newUser from "@/pages/website/newUser.vue";
import newRole from "@/pages/website/newRole.vue";
import usermangment from "@/pages/usermanagement/usermangment.vue";
import usermangmentnewuser from "@/pages/usermanagement/usernew.vue";
import usermangmentnewusernewrole from "@/pages/usermanagement/userrole.vue";
import userRoles from "@/pages/usermanagement/userRoles.vue";
import newuserrole from "@/pages/usermanagement/newuserrole.vue";
import pages from "@/pages/pages/pages.vue";
import newpage from "@/pages/pages/newpage.vue";
import addpage from "@/pages/pages/addpage.vue";
import addpage2 from "@/pages/pages/addpage2.vue";
import pagecomponent from "@/pages/pages/pagecomponent.vue";
import addnewpage from "@/pages/pages/addnewpage.vue";
import media from "@/pages/Media Library/media.vue";
import newmedia from "@/pages/Media Library/newmedia.vue";
import catgorey from "@/pages/catgorey and tags/catgorey.vue";
import newcat from "@/pages/catgorey and tags/newcat.vue";
import tags from "@/pages/catgorey and tags/tags.vue";
import catnewtag from "@/pages/catgorey and tags/catnewtag.vue";
import form from "@/pages/forms/form.vue";
import contactform from "@/pages/forms/contactform.vue";
import newform from "@/pages/forms/newform.vue";
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
      component: dashbord ,
     
    },
    {
      path: "/website",
      name:"",
      component: website,
    },
    {
      path:"/website/newebsit",
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
    },
    {
      path:"/Media",
      name:"",
      component: media ,
    },
    {
      path:"/media/newmedia",
      name:"",
      component: newmedia ,
    },
    {
      path:"/Categories&Tags",
      name:"",
      component: catgorey,
    },
    {
      path:"/Categories/newcat",
      name:"",
      component: newcat ,
    },
    {
      path:"/Categories/tags",
      name:"",
      component: tags ,
    },
    {
      path:"/Categories/tags/new",
      name:"",
      component: catnewtag ,
    },
    {
      path:"/Forms",
      name:"",
      component: form ,
    },
    {
      path:"/form/contactform",
      name:"",
      component: contactform,
    },
    {
      path:"/form/newform",
      name:"",
      component: newform,
    },
  ],
  history:createWebHistory()
})
export default router