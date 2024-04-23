<script setup>

    import { useAuthStore } from 'src/stores/auth-store'
    import { api } from 'src/boot/axios'
    import { ref } from 'vue'
    import { useQuasar } from 'quasar';

    const $q = useQuasar()
    const authStore = useAuthStore()
    const profileForm = ref({
        name: authStore.authUser.name,
        email: authStore.authUser.email
    })

    const passwordForm = ref({
        current_password: '',
        new_password: '',
        password_confirmation: ''
    })

    async function resendVerEmail() {
        api.post('/email/verification-notification')
        .then((res) => {
            $q.notify('Email verification sent. Please check your email.')
            console.log(res)
        })
        .catch((err) => {
            console.error(err)
        })
    }

</script>

<template>
    <div>
        <p class="q-my-xl text-negative text-center">not working right neow</p>
        <q-card>
            <q-card-section>
                <div class="text-h6 q-mb-sm">Profile Information</div>
                <div class="q-mb-lg">Update your account's profile information and email address.</div>
                <q-input
                    filled
                    v-model="profileForm.name"
                    label="Name"
                    lazy-rules
                    :error="authStore.authErrors?.name ? true : false"
                    :error-message="authStore.authErrors?.name ? authStore.authErrors.name[0] : ''"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-input
                    filled
                    v-model="profileForm.email"
                    label="Email Address"
                    lazy-rules
                    :hint="authStore.authUser.email_verified_at ? 'Verified' : ''"
                    :error="authStore.authErrors?.email ? true : false"
                    :error-message="authStore.authErrors?.email ? authStore.authErrors.email[0] : ''"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-banner :class="$q.dark.isActive ? 'bg-grey-8' : 'bg-grey-4'" v-if="!authStore.authUser.email_verified_at">
                    Your email has not been verified.
                    <q-btn outline no-caps @click="resendVerEmail()" color="blue" label="Resend Verification Email" />
                </q-banner>
                <q-btn label="Save" class="q-mt-sm" unelevated no-caps color="blue" />
            </q-card-section>
        </q-card>
        <q-card class="q-mt-xl">
            <q-card-section>
                <div class="text-h6 q-mb-sm">Update Password</div>
                <div class="q-mb-lg">Ensure your account is using a long, random password to stay secure.</div>
                <q-input
                    filled
                    v-model="passwordForm.current_password"
                    label="Current Password"
                    lazy-rules
                    :error="authStore.authErrors?.current_password ? true : false"
                    :error-message="authStore.authErrors?.current_password ? authStore.authErrors.current_password[0] : ''"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-input
                    filled
                    v-model="passwordForm.new_password"
                    label="New Password"
                    lazy-rules
                    :error="authStore.authErrors?.new_password ? true : false"
                    :error-message="authStore.authErrors?.new_password ? authStore.authErrors.new_password[0] : ''"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-input
                    filled
                    v-model="passwordForm.password_confirmation"
                    label="Confirm New Password"
                    lazy-rules
                    :error="authStore.authErrors?.password_confirmation ? true : false"
                    :error-message="authStore.authErrors?.password_confirmation ? authStore.authErrors.password_confirmation[0] : ''"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-btn label="Save" unelevated no-caps color="blue" />
            </q-card-section>
        </q-card>
    </div>
</template>