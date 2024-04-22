<script setup>

    import { ref } from 'vue'
    import { useAuthStore } from 'src/stores/auth-store'

    const authStore = useAuthStore()
    const email = ref('')
    const forgotPasswordBtn = ref(false)

    async function onSubmit() {
        try {
            forgotPasswordBtn.value = true
            const response = await authStore.handleForgotPassword(email.value)
            forgotPasswordBtn.value = false
        } catch (error) {
            forgotPasswordBtn.value = false
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
                <div class="text-h6 q-mb-lg">Forgot Password</div>
                <p>Enter your email address and we will send you a reset password link.</p>
                <q-banner inline-actions class="text-white bg-positive q-mb-md" v-if="authStore.authStatus?.status ? true : false">
                    {{ authStore.authStatus.status }}
                </q-banner>
                <q-input
                    filled
                    v-model="email"
                    label="Email Address"
                    lazy-rules
                    :error="authStore.authErrors?.email ? true : false"
                    :error-message="authStore.authErrors?.email ? authStore.authErrors.email[0] : ''"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-btn label="Reset" :loading="forgotPasswordBtn" no-caps type="submit" class="full-width" color="primary"/>
            </q-card-section>

        </q-card>
    </q-form>
</template>