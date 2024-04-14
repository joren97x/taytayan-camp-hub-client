<script setup>

    import { ref } from 'vue'
    import {useQuasar} from 'quasar'

    const $q = useQuasar()
    const email = ref('')
    const password = ref('')
    const showPassword = ref(false)

    function onSubmit() {
        $q.notify('go make a request')
    }

</script>

<template>
    <q-form @submit="onSubmit()">
        <q-card class="q-pa-xl" flat>
            <q-btn no-caps flat color="primary" to="/auth/login">
                <q-icon name="arrow_back" class="q-mr-sm"></q-icon>
                Go back to login
            </q-btn>
            <q-card-section>
                <div class="text-h6 q-mb-lg">Forgot Password</div>
                <p>Enter your email address and we will send you a reset password link.</p>
                <q-input
                    filled
                    v-model="email"
                    label="Email Address"
                    lazy-rules
                    type="email"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-btn label="Reset" no-caps type="submit" class="full-width" color="primary"/>
            </q-card-section>

        </q-card>
    </q-form>
</template>