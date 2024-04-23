<script setup>

    import { ref } from 'vue'
    import { useAuthStore } from 'src/stores/auth-store'
    import { useRouter } from 'vue-router'

    const authStore = useAuthStore()
    const router = useRouter()
    const showPassword = ref(false)
    const showPassword2 = ref(false)
    const form = ref({
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
    })
    const registerBtn = ref(false)

    async function onSubmit() {
        try {
            registerBtn.value = true
            const response = await authStore.handleRegister(form.value)
            if(response.status === 204) {
                await authStore.fetchUser()
                router.push('/')
            }
            registerBtn.value = false
        } catch (error) {
            registerBtn.value = false
            console.error(error)
        }
    }

</script>

<template>
    <q-form @submit="onSubmit()">
        <q-card class="q-pa-xl" flat>
            <q-card-section>
                <p class="text-h6 q-mb-lg">Create your account</p>
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
                    filled
                    v-model="form.name"
                    label="Full Name"
                    lazy-rules
                    :error="authStore.authErrors?.name ? true : false"
                    :error-message="authStore.authErrors?.name ? authStore.authErrors.name[0] : ''"
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

                <q-input 
                    v-model="form.password_confirmation" 
                    filled 
                    :type="!showPassword2 ? 'password' : 'text'" 
                    label="Confirm Password"
                >
                    <template v-slot:append>
                        <q-icon
                            :name="showPassword2 ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="showPassword2 = !showPassword2"
                        />
                    </template>
                </q-input>

                <q-btn label="Register" :loading="registerBtn" no-caps type="submit" class="full-width q-mt-lg" color="primary"/>
            </q-card-section>

            <q-card-section>
                <p class="text-center">
                    Already have an account? 
                    <router-link 
                        to="/login"  
                        class="text-primary" 
                        style="text-decoration: none"
                    >
                        Log in here
                    </router-link>
                </p>
            </q-card-section>

        </q-card>
    </q-form>
</template>