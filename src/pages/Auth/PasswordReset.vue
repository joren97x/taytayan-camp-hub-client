<script setup>

    import { ref } from 'vue'
    import {useQuasar} from 'quasar'
    import { api } from 'src/boot/axios'

    const $q = useQuasar()
    const form = ref({
        password: '',
        password_confirmation: ''
    })

    function onSubmit() {
        $q.notify('go make a request')
        api.post('/reset-password', form.value)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.error(err)
        })
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
                <p>Enter your email address and we will send you a reset password link.</p>
                <p class="text-positive">We have emailed your password reset link.</p>
                <q-input
                    filled
                    v-model="form.password"
                    label="New Password"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-input
                    filled
                    v-model="form.password_confirmation"
                    label="Confirm Password"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-btn label="Reset" no-caps type="submit" class="full-width" color="primary"/>
            </q-card-section>

        </q-card>
    </q-form>
</template>