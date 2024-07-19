
const routes = [

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }, { path: 'event', component: () => import('pages/Event.vue') }, { path: 'community', component: () => import('pages/Community.vue')}, { path: 'resources', component: () => import('pages/Resources.vue')}],

  },
  {
    path: '/nl',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NL/IndexPage.vue')}, { path: 'resources', component: () => import('pages/NL/Resources.vue')}, { path: 'community', component: () => import('pages/NL/Community.vue')}, { path: 'HQ', component: () => import('pages/NL/HQ.vue')}]
  },
  {
    path: '/HQ',
    component: () => import('layouts/HQLayout.vue'),
    children: [{ path: '/:id', name: 'step', component: () => import('pages/HQ.vue'), props:true }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
