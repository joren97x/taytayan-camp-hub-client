<script setup>

    import { api } from 'src/boot/axios'

    async function verify() {
        try {
            const res = await api.get('/verify-email/1/dbefad978ff6e2e8dfbcf3dd089de2d7a9fa0604?expires=1714038538&signature=bfeeca2d4092e19716f5d770dd0c2ee1af7a11353e5f2c765863450c851b8416')
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

    async function sample() {
        try {
            const res = await api.get('/sample')
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

</script>

<template>
    <div>
        <h1>Campsites page</h1>
        <q-btn @click="verify()">Verify</q-btn>
        <q-btn @click="sample()">Sample</q-btn>
    </div>
</template>