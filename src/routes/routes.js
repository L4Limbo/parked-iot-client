import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Profile from "@/pages/Profile"
import Parked from "@/pages/Parked"

Vue.use(VueRouter);


let routes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/login',
        component: Login,
        meta: { guest: true },
    },

    {
        path: '/register',
        component: Register,
        meta: { guest: true },
    },

    {
        path: '/profile',
        component: Profile,
        meta: {requiresAuth: true},
    },

    {
        path: '/parked',
        component: Parked
    },

];

const router =  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'is-active'
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
});

export default router;