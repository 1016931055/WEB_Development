import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
//                  @表示src目录 ==>src/views/friend.vue
import friend from '@/views/friend'
import element from '@/views/element'
import MyTest from '@/views/myTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld  //找上面import的HelloWorld
    },

    {
      path: '/friend',
      name: 'haha',
      component: friend
    },

    {
      path: '/element',
      name: 'element',
      component: element
    },
    
    {
      path: '/myTest',
      name: 'myTest',
      component: MyTest
    }
  ]
})
