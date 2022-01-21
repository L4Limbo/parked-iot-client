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
        component: Login
    },

    {
        path: '/register',
        component: Register
    },

    {
        path: '/profile',
        component: Profile
    },

    {
        path: '/parked',
        component: Parked
    },

];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});