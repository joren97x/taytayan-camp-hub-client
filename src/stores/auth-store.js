import { defineStore } from "pinia"
import { api } from 'src/boot/axios.js'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null
    }),
    getters: {
        getAuth: (state) => state.authUser
    },
    actions: {
        async getToken() {
            await api.get('/sanctum/csrf-cookie')
        },
        async handleLogin() {
            await getToken()
            //chotto matte nee
        }
    }
})