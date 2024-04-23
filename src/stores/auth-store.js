import { defineStore } from "pinia"
import { api } from 'src/boot/axios.js'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
        authErrors: {},
        authStatus: {}
    }),
    persist: true,
    getters: {
        getAuthUser: (state) => state.authUser,
        isAuthenticated: (state) => state.authUser ? true : false
    },
    actions: {
        async fetchToken() {
            await api.get('../sanctum/csrf-cookie')
        },
        async fetchUser() {
            const response = await api.get('/user')
            if(response.status === 200) {
                this.authUser = response.data
            }
        },
        async handleLogin(credentials) {
            try {
                this.authErrors = {}
                await this.fetchToken()
                const response = await api.post('/login', credentials)
                return response
            } catch (error) {
                console.error(error)
                this.authErrors = error.response.data.errors
                return error
            }
        },
        async handleRegister(credentials) {
            try {
                this.authErrors = {}
                await this.fetchToken()
                const response = await api.post('/register', credentials)
                return response 
            } catch (error) {
                this.authErrors = error.response.data.errors
                throw error
            }
        },
        async handleForgotPassword(email) {
            try {
                this.authStatus = {}
                this.authErrors = {}
                await this.fetchToken()
                const response = await api.post('/forgot-password', { email })
                this.authStatus = response.data
                return response 
            } catch (error) {
                this.authErrors = error.response.data.errors
                throw error
            }
        },
        async handleResetPassword(credentials) {
            try {
                this.authErrors = {}
                await this.fetchToken()
                const response = await api.post('/reset-password', credentials)
                return response 
            } catch (error) {
                this.authStatus = error.response.data
                this.authErrors = error.response.data.errors
                throw error
            }
        },
        async handleLogout() {
            try {
                const response = await api.post('/logout')
                console.log(response)
                if(response.status === 204) {
                    localStorage.removeItem('auth')
                    this.authUser = null
                }
                return response 
            } catch (error) {
                throw error
            }
        }
    }
})