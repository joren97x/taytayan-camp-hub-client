<script setup>

    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { useAuthStore } from 'src/stores/auth-store'

    const showPassword = ref(false)
    const showPassword2 = ref(false)
    const resetBtn = ref(false)
    const authStore = useAuthStore()
    const route = useRoute()
    const form = ref({
        token: route.params.token,
        email: route.query.email,
        password: '',
        password_confirmation: ''
    })

    async function onSubmit() {
        try {
            resetBtn.value = true
            const response = await authStore.handleResetPassword(form.value)
            resetBtn.value = false
        } catch (error) {
            resetBtn.value = false
            console.error(error)
        }
    }

</script>

<template>
    <q-form @submit="onSubmit()">
        <q-card class="q-pa-xl" flat>
            <q-btn no-caps flat color="primary" to="/login">
                <q-icon name="arrow_back" class="q-mr-sm"></q-icon>
                Go back to login
            </q-btn>
            <q-card-section>
                <div class="text-h6 q-mb-lg">Password Reset</div>
                <q-banner inline-actions class="text-white bg-negative q-mb-md" v-if="authStore.authErrors?.email ? true : false">
                    {{ authStore.authErrors?.email ? authStore.authErrors.email[0] : '' }}
                </q-banner>
                <q-input
                    filled
                    v-model="form.password"
                    label="New Password"
                    :type="!showPassword ? 'password' : 'text'" 
                    lazy-rules
                    :error="authStore.authErrors?.password ? true : false"
                    :error-message="authStore.authErrors?.password ? authStore.authErrors.password[0] : ''"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
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
                    filled
                    v-model="form.password_confirmation"
                    label="Confirm Password"
                    lazy-rules
                    :type="!showPassword2 ? 'password' : 'text'" 
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                >
                    <template v-slot:append>
                        <q-icon
                            :name="showPassword2 ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="showPassword2 = !showPassword2"
                        />
                    </template>
                </q-input>
                <q-btn label="Reset" :loading="resetBtn" no-caps type="submit" class="full-width" color="primary"/>
            </q-card-section>

        </q-card>
    </q-form>
</template>