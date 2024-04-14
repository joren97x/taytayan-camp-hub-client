
const adminRoutes = [
    {
        path: '/admin',
        component: () => import('src/layouts/AdminLayout.vue'),
        children: [
            { 
                path: 'dashboard', 
                component: () => import('pages/Admin/Dashboard.vue')
            },
            {
                path: 'register',
                component: () => import('pages/Admin/Register.vue')
            },
            {
                path: 'forgot-password',
                component: () => import('pages/Admin/ForgotPassword.vue')
            }
        ]
    }
]

export default adminRoutes
