<script setup>

    import { ref } from 'vue'
    import {useQuasar} from 'quasar'
    import { api } from 'src/boot/axios'

    const $q = useQuasar()
    const showPassword = ref(false)
    const form = ref({
        email: '',
        name: '',
        lastName: '',
        password: '',
        password_confirmation: ''
    })

    function onSubmit() {
        $q.notify('go make a request')
        api.post('/register', form.value)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

</script>

<template>
    <q-form @submit="onSubmit()">
        <q-card class="q-pa-xl" flat>

            <q-card-section>
                <div class="text-h6 q-mb-lg">Create your account</div>
                <q-input
                    filled
                    v-model="form.email"
                    label="Email Address"
                    lazy-rules
                    type="email"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <div class="row q-col-gutter-md">
                    <div class="col-6">
                        <q-input
                            filled
                            v-model="form.name"
                            label="First Name"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                    </div>
                    <div class="col-6">
                        <q-input
                            filled
                            v-model="form.lastName"
                            label="Last Name"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                    </div>
                </div>

                <!-- <q-input
                    filled
                    v-model="form.password"
                    label="Phone number"
                    lazy-rules
                    hint="e.g. +63917XXXXXX"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                /> -->

                <q-input 
                    v-model="form.password" 
                    filled 
                    :type="!showPassword ? 'password' : 'text'" 
                    label="Password"
                    class="q-mb-md"
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
                    :type="!showPassword ? 'password' : 'text'" 
                    label="Confirm Password"
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