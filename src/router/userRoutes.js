
const userRoutes = [
    {
        path: '/',
        component: () => import('src/layouts/UserLayout.vue'),
        children: [
            { 
                path: '', 
                component: () => import('pages/User/Homepage.vue')
            },
            { 
                path: 'about', 
                name: 'About',
                component: () => import('pages/User/About.vue')
            },
            { 
                path: 'milktea-menu', 
                name: 'Milktea Menu',
                component: () => import('pages/User/Milkteas/Index.vue')
            },
            {
                path: '/orders',
                name: 'Orders',
                component: () => import('pages/User/Milkteas/Orders.vue')
            },
            { 
                path: 'events', 
                name: 'Events',
                component: () => import('pages/User/Events/Index.vue')
            },
            { 
                path: 'campsites', 
                name: 'Campsites',
                component: () => import('pages/User/Campsites/Index.vue')
            },
        ],
    },
    {
        path: '/food-checkout',
        name: 'Food Checkout',
        component: () => import('pages/User/Milkteas/Checkout.vue')
    },
    
  // Always leave this as last one,
  // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
]

export default userRoutes
