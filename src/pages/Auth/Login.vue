<script setup>

    import { ref } from 'vue'
    import { useAuthStore } from 'src/stores/auth-store'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const authStore = useAuthStore()
    const showPassword = ref(false)
    const loginBtn = ref(false)
    const form = ref({
        email: '',
        password: ''
    })

    async function onSubmit() {
        try {
            loginBtn.value = true
            const response = await authStore.handleLogin(form.value)
            if(response.status === 204) {
                await authStore.fetchUser()
                router.push('/')
            }
            loginBtn.value = false
        } catch (error) {
            loginBtn.value = false
            console.error(error)
        }
    }

</script>

<template>
    <q-form @submit="onSubmit()">
        <q-card class="q-pa-xl" flat>
            {{ authStore.authErrors }}
            <q-card-section>
                <div class="text-h6 q-mb-lg">Login to Taytayan Camp Hub</div>
                <q-input
                    filled
                    v-model="form.email"
                    label="Email Address"
                    lazy-rules
                    :error="authStore.authErrors?.email ? true : false"
                    :error-message="authStore.authErrors?.email ? authStore.authErrors.email[0] : ''"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-input 
                    v-model="form.password" 
                    filled 
                    :type="!showPassword ? 'password' : 'text'" 
                    label="Password"
                    :error="authStore.authErrors?.password ? true : false"
                    :error-message="authStore.authErrors?.password ? authStore.authErrors.password[0] : ''"
                >
                    <template v-slot:append>
                        <q-icon
                            :name="showPassword ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="showPassword = !showPassword"
                        />
                    </template>
                </q-input>
                <p class="text-right q-mt-md">
                    <router-link 
                        to="/forgot-password" 
                        class="text-primary" 
                        style="text-decoration: none"
                    >
                        Forgot your password?
                    </router-link>
                </p>

                <q-btn label="Log in" :loading="loginBtn" no-caps type="submit" class="full-width" color="primary"/>
            </q-card-section>

            <q-card-section>
                <p class="text-center">
                    Don't have an account? 
                    <router-link 
                        to="/register"  
                        class="text-primary" 
                        style="text-decoration: none"
                    >
                        Sign up here for free
                    </router-link>
                </p>
            </q-card-section>

        </q-card>
    </q-form>
</template>