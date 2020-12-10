import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('../views/index.vue') },
  { path: '/blog', component: () => import('../views/blog.vue') },
  { path: '/article/:id', component: () => import('../views/article.vue') },
  { path: '/about', component: () => import('../views/about.vue') },
  { path: '/login', component: () => import('../views/login.vue') },
  { path: '/register', component: () => import('../views/register.vue') },
  {
    path: '/message', component: () => import('../views/message.vue'),
    beforeEnter: (to, from, next) => {
      if (window.localStorage.getItem('login')) {
        next();
      } else {
        const flag = window.confirm('登录之后才能留言,是否去登录');
        if (flag) {
          next('/login');
        }
      }
      // console.log(typeof(this.$store.state.User))
      // if (typeof (this.$store.state.User) === '{}') {

      // }
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
