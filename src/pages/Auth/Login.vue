<script setup>

    import { ref } from 'vue'
    import { useQuasar } from 'quasar'
    import { api } from 'src/boot/axios'

    const $q = useQuasar()
    const showPassword = ref(false)
    const form = ref({
        email: '',
        password: ''
    })

    async function getToken() {
        await api.get('/sanctum/csrf-cookie')
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    function onSubmit() {
        getToken()
        api.post('/login', form.value)
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
                <div class="text-h6 q-mb-lg">Login to Taytayan Camp Hub</div>
                <q-input
                    filled
                    v-model="form.email"
                    label="Email Address"
                    lazy-rules
                    type="email"
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-input 
                    v-model="form.password" 
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
                <p class="text-right q-mt-md">
                    <router-link 
                        to="/forgot-password" 
                        class="text-primary" 
                        style="text-decoration: none"
                    >
                        Forgot your password?
                    </router-link>
                </p>

                <q-btn label="Log in" no-caps type="submit" class="full-width" color="primary"/>
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