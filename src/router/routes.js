
const routes = [
    {
        path: '/',
        component: () => import('src/layouts/UserLayout.vue'),
        children: [
            { path: '', component: () => import('pages/User/Homepage.vue') },
        ]
    },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
