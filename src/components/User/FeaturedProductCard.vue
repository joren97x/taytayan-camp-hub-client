<script setup>

    import { ref } from 'vue'
    defineProps({ product: Object })

    const dialog = ref(false)

</script>

<template>

    <q-card class="col-3" flat>
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

        <q-card-section>
            <q-btn
                fab
                color="primary"
                icon="add"
                class="absolute"
                @click="dialog = true"
                style="top: 0; right: 12px; transform: translateY(-50%);"
            />

            <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                    Cafe Basilico
                </div>
            </div>
            <div class="text-caption text-grey">
                Small plates, salads & sandwiches in an intimate setting.
            </div>
        </q-card-section>
    </q-card>

    <q-dialog v-model="dialog" full-width>
        <q-card class="my-card q-px-md">
            <q-item>
                <q-item-section class="text-h6">
                    Food description
                </q-item-section>
                <q-item-section side>
                    <q-btn round icon="close" flat @click="dialog = false"></q-btn>
                </q-item-section>
            </q-item>
            <div class="row q-col-gutter-md">
                <div class="col-5">
                    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                </div>
                <div class="col-7">
                    <p>
                        <span class="text-h5">
                            Cafe Basilico
                        </span>
                        <br>
                        <span class="text-h6 text-weight-light">
                            P65.00
                        </span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, totam?
                    </p>
                    
                </div>
            </div>
            
        </q-card>
    </q-dialog>

</template>