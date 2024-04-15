<script setup>

    defineProps({ section: Object })

</script>

<template>
    <div class="row q-col-gutter-xl">
        <div class="col-6">
        <div>
            <p class="text-start text-h3 text-weight-bold"> {{ section.title }} </p>
            <p class="text-start text-h6"> {{ section.description }} </p>
            <q-btn size="lg" unelevated color="blue" no-caps> {{ section.button }} </q-btn>
        </div>
    </div>
        <div class="col-6">
            <q-img :src="section.image"></q-img>
        </div>
    </div>
</template>