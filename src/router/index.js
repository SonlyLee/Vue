import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Tabs from '@/components/Tab'
import Animation from '@/components/Animation'
import User from '@/components/User'
import Counter from '@/components/Counter'

Vue.use(Router)

const UserProfile = {
  template: `
    <div>
      <h2>User {{ $route.params.id }}</h2>
      <p>UserProfile</p>
    </div>
  `
}

const UserPosts = {
  template: `
    <div>
      <h2>User {{ $route.params.id }}</h2>
      <p>UserPosts</p>
    </div>
  `
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
      children: [
        {
          // 当/user/:id/profile匹配成功
          // UserProfile会被渲染在User的<router-view>中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当/user/:id/posts匹配成功
          // UserPosts 会被渲染在 User 的<router-view>中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
