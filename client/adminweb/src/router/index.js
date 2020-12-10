import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: () => import('../views/index.vue'), children: [
      { path: 'admin', component: () => import('../components/admin/index.vue') },
      { path: 'addAdmin', component: () => import('../components/admin/addAdmin.vue') },
      { path: 'article', component: () => import('../components/article/index.vue') },
      { path: 'addarticle', component: () => import('../components/article/addarticle.vue') },
      { path: 'edit/:id', component: () => import('../components/article/edit.vue') },
      { path: 'list', component: () => import('../components/list/index.vue') },
      { path: 'listedit/:id', component: () => import('../components/list/edit.vue') },
      { path: 'addlist', component: () => import('../components/list/addlist.vue') },
      { path: 'message', component: () => import('../components/message/index.vue') },
      { path: 'addmessage', component: () => import('../components/message/addmessage.vue') },
      { path: 'label', component: () => import('../components/label/index.vue') },
      { path: 'addlabel', component: () => import('../components/label/addlabel.vue') },
      { path: 'user', component: () => import('../components/user/index.vue') },
      { path: 'adduser', component: () => import('../components/user/addUser.vue') },
    ], redirect: '/admin'
  },
  { path: '/login', component: () => import('../views/login.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
