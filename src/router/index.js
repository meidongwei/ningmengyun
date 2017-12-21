import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'
import DetailRuanPage from '../pages/detail/ruanjian'
import DetailYouPage from '../pages/detail/youxiang'
import DetailJiPage from '../pages/detail/jifen'
import DetailCunPage from '../pages/detail/cunchu'
import OrderListPage from '../pages/orderList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/ruanjian',
      children: [
        {
          path: 'ruanjian',
          component: DetailRuanPage
        },
        {
          path: 'youxiang',
          component: DetailYouPage
        },
        {
          path: 'jifen',
          component: DetailJiPage
        },
        {
          path: 'cunchu',
          component: DetailCunPage
        }
      ]
    }
  ]
})
