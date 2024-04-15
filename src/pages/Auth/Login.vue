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
                <div class="text-h6 q-mb-lg">Login to Taytayan Camp Hub</div>
                <q-input
                    filled
                    v-model="email"
                    label="Email Address"
                    lazy-rules
                    type="email"
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
                <p class="text-right q-mt-md">
                    <router-link 
                        to="/auth/forgot-password" 
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
                        to="/auth/register"  
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