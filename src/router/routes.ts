import {RouteRecordRaw} from 'vue-router';

const routesMeta = [
  {
    visible: true,
    path: '/',
    icon: 'fa-solid fa-inbox',
    name: '首页',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: () => import('pages/IndexPage.vue')}],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    visible: false,
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

const routes: RouteRecordRaw[] = []


for (let i = 0; i < routesMeta.length; i++) {
  routes[i] = {
    path: routesMeta[i].path,
    component: routesMeta[i].component,
    children: routesMeta[i].children
  }
}

export {routes, routesMeta};
