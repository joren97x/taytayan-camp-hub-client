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

            <q-card-section>
                <div class="text-h6 q-mb-lg">Create your account</div>
                <q-input
                    filled
                    v-model="email"
                    label="Email address"
                    lazy-rules
                    type="email"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <div class="row q-col-gutter-md">
                    <div class="col-6">
                        <q-input
                            filled
                            v-model="email"
                            label="First name"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                    </div>
                    <div class="col-6">
                        <q-input
                            filled
                            v-model="email"
                            label="Last name"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                    </div>
                </div>

                <q-input
                    filled
                    v-model="email"
                    label="Phone number"
                    lazy-rules
                    hint="e.g. +63917XXXXXX"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <q-input 
                    v-model="password" 
                    filled 
                    :type="!showPassword ? 'password' : 'text'" 
                    label="Password"
                >
                    <template v-slot:append>
                    <q-icon
                        :name="showPassword ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="showPassword = !showPassword"
                    />
                    </template>
                </q-input>

                <q-btn label="Register" no-caps type="submit" class="full-width q-mt-lg" color="primary"/>
            </q-card-section>

            <q-card-section>
                <p class="text-center">
                    Already have an account? 
                    <router-link 
                        to="/auth/login"  
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