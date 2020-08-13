import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index'
import Movie from '@/components/page/movie'
import History from '@/components/page/history'
import Weather from '@/components/page/weather'
import Dream from '@/components/page/dream'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather
    },
    {
      path: '/dream',
      name: 'dream',
      component: Dream
    }
  ]
})
