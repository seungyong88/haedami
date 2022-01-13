import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '@/pages/TabsPage.vue'
// import MemoriesPage from "../pages/MemoriesPage.vue";

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/pages/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/pages/Tab2Page.vue')
      },
      {
        path: 'testpage',
        component: () => import('@/pages/TestPage.vue')
      },
      {
        path: 'order',
        component: () => import('@/pages/OrderPage.vue'),
      },
      {
        path: 'order/:id',
        component: () => import('@/pages/MenuDetail.vue'),
      },
      {
        path: 'menu/add',
        component: () => import('@/pages/AddMemoryPage.vue'),
      },
    ]
  },
]

  // {
  //   path: '/memories/',
  //   component: () => import('@/pages/MemoriesPage.vue'),
  //   children: [
  //     {
  //       path: ':id',
  //       component: () => import('@/pages/MemoryDetail.vue')
  //     },
  //   ]
  // },

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
