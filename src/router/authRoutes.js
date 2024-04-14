
const authRoutes = [
    {
        path: '/auth',
        component: () => import('src/layouts/AuthLayout.vue'),
        children: [
            { 
                path: 'login', 
                component: () => import('pages/Auth/Login.vue')
            },
            {
                path: 'register',
                component: () => import('pages/Auth/Register.vue')
            },
            {
                path: 'forgot-password',
                component: () => import('pages/Auth/ForgotPassword.vue')
            }
        ]
    }
]

export default authRoutes
