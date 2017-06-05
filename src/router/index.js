import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import ES6 from '@/pages/ES6'
import test from '@/pages/test'
import angular1 from '@/pages/angular1'
import notes from '@/pages/notes'

Vue.use(Router)
// name为页面跳转后的页面标题
const router = new Router({
  routes: [
    {
      path: '/path',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/es6',
      name: 'es6',
      component: ES6	
    },
    {
      path: '/test',
      name: 'test',
      component: test 
    },
    {
      path: '/angular',
      name: 'angular1',
      component: angular1 
    },
    {
      path: '/notes',
      name: 'notes',
      component: notes 
    },
    {
      path: '*',
      name: 'Hello',
      redirect: '/path'
    },
  ]
})
// 页面跳转后修改网页title
router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})
export default router;
