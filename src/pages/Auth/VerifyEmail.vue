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
    <q-form class="q-pa-xl">
        <q-card class="q-pa-xl q-mt-xl">
            <q-card-section>
                <p class="text-h6 q-mb-lg">Email Verification</p>
                <p>
                    Thanks for signing up! Before getting started, could you verify your email address
                    by clicking on the link we just emailed to you? If you didn't receive the email,
                    we will gladly send you another.
                </p>
                <q-banner inline-actions class="text-white bg-positive q-mb-md" v-if="authStore.authStatus?.status ? true : false">
                    {{ authStore.authStatus.status }}
                </q-banner>
            </q-card-section>
            
            <q-card-actions align="between">
                <q-btn no-caps color="primary">Resend Verification Email</q-btn>
                <q-btn no-caps outline color="negative">Logout</q-btn>
            </q-card-actions>

        </q-card>
    </q-form>
</template>