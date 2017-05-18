import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ES6 from '@/components/ES6'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/path',
      name: 'Hello',
      component: Hello
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
      path: '*',
      name: 'Hello',
      redirect: '/path'
    },
  ]
})
