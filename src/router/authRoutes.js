const authRoutes = [
    {
        path: '/',
        component: () => import('src/layouts/AuthLayout.vue'),
        children: [
            { 
                path: 'login', 
                name: 'Login',
                component: () => import('pages/Auth/Login.vue')
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import('pages/Auth/Register.vue')
            },
            {
                path: 'forgot-password',
                name: 'ForgotPassword',
                component: () => import('pages/Auth/ForgotPassword.vue')
            },
            {
                path: 'password-reset/:token',
                name: 'PasswordReset',
                component: () => import('pages/Auth/PasswordReset.vue')
            },
            {
                path: 'verify-email',
                name: 'VerifyEmail',
                component: () => import('pages/Auth/VerifyEmail.vue'),
                meta: { requiresAuth: true }
            }
        ]
    }
]

export default authRoutes
