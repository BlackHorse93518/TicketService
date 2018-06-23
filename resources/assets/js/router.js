import VueRouter    from 'vue-router'

//Define route components
const home = require('./components/page-home');
const addsv = require('./components/page-addsv');
const addstaff = require('./components/page-addstaff');
const tickets = require('./components/page-tickets');
const review = require('./components/page-review');
const department = require('./components/page-department');
const setting = require('./components/page-setting');

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name:'home',component: home},
        { path: '/addsv', name:'addsv',component: addsv},
        { path: '/addstaff', name:'addstaff',component: addstaff},
       { path: '/tickets', name:'tickets',component: tickets},
       { path: '/review', name:'review',component: review},
       { path: '/department', name:'review',component: department},
       { path: '/settings', name:'settings',component: setting},
    ],
    
});