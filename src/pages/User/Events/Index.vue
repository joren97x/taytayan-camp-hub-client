<script setup>

    import { ref, onMounted } from 'vue'
    import { api } from 'src/boot/axios'

    const loading = ref(false)
    const result = ref('')
    onMounted(async () => {
        loading.value = true
        try {
            const res = await api.get('/hello')
            console.log(res)
            result.value = res.data
        } catch (error) {
            console.log(error)
            result.value = error.response.data.message
        }
        loading.value = false
    })

</script>

<template>
    <div>
        <h1>Events page</h1>
        {{ loading }}
        <p class="text-h1" v-if="loading">Checking if the email is verified...</p>
        <p class="text-h1" v-else>{{ result }}</p>
    </div>
</template>