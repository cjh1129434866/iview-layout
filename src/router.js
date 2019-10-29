import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/app',
      name: 'app',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/App.vue')
    },
    {
      path: '/dev',
      name: 'dev',
      component: () => import(/* webpackChunkName: "about" */ './views/Dev.vue')
    },
    {
      path: '/push',
      name: 'push',
      component: () => import(/* webpackChunkName: "about" */ './views/Push.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import(/* webpackChunkName: "about" */ './views/Manage.vue')
    },
    {
      path: '/table1',
      name: 'table1',
      component: () => import(/* webpackChunkName: "about" */ './views/Table1.vue')
    },
    {
      path: '/table2',
      name: 'table2',
      component: () => import(/* webpackChunkName: "about" */ './views/Table2.vue')
    },
    {
      path: '/table3',
      name: 'table3',
      component: () => import(/* webpackChunkName: "about" */ './views/Table3.vue')
    },
    {
      path: '/table4',
      name: 'table4',
      component: () => import(/* webpackChunkName: "about" */ './views/Table4.vue')
    },
    {
      path: '/table5',
      name: 'table5',
      component: () => import(/* webpackChunkName: "about" */ './views/Table5.vue')
    },
    {
      path: '/table6',
      name: 'table6',
      component: () => import(/* webpackChunkName: "about" */ './views/Table6.vue')
    },
    {
      path: '/table7',
      name: 'table7',
      component: () => import(/* webpackChunkName: "about" */ './views/Table7.vue')
    },
    {
      path: '/table8',
      name: 'table8',
      component: () => import(/* webpackChunkName: "about" */ './views/Table8.vue')
    },
    {
      path: '/table9',
      name: 'table9',
      component: () => import(/* webpackChunkName: "about" */ './views/Table9.vue')
    },
    {
      path: '/table10',
      name: 'table10',
      component: () => import(/* webpackChunkName: "about" */ './views/Table10.vue')
    },
    {
      path: '/table11',
      name: 'table11',
      component: () => import(/* webpackChunkName: "about" */ './views/Table11.vue')
    },
    {
      path: '/form1',
      name: 'form1',
      component: () => import(/* webpackChunkName: "about" */ './views/Form1.vue')
    },
    {
      path: '/form2',
      name: 'form2',
      component: () => import(/* webpackChunkName: "about" */ './views/Form2.vue')
    },
    {
      path: '/form3',
      name: 'form3',
      component: () => import(/* webpackChunkName: "about" */ './views/Form3.vue')
    },
    {
      path: '/form4',
      name: 'form4',
      component: () => import(/* webpackChunkName: "about" */ './views/Form4.vue')
    },
    {
      path: '/form5',
      name: 'form5',
      component: () => import(/* webpackChunkName: "about" */ './views/Form5.vue')
    },
    {
      path: '/form6',
      name: 'form6',
      component: () => import(/* webpackChunkName: "about" */ './views/Form6.vue')
    },
    {
      path: '/form7',
      name: 'form7',
      component: () => import(/* webpackChunkName: "about" */ './views/Form7.vue')
    },
    {
      path: '/form8',
      name: 'form8',
      component: () => import(/* webpackChunkName: "about" */ './views/Form8.vue')
    }
  ]
})
