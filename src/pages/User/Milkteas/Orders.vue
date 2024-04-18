<script setup>

    import { ref } from 'vue'
    import OrderItem from 'src/components/User/OrderItem.vue'

    const tab = ref('On Progress')

</script>

<template>
    <div>
        <div class="row q-col-gutter-xl">
            <div class="col-3">
                <q-card>
                    <q-card-section>
                        <q-list>
                            <q-item clickable @click="tab = 'On Progress'">
                                <q-item-section avatar>
                                    <q-icon name="schedule"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    On Progress
                                </q-item-section>
                            </q-item>
                            <q-item clickable @click="tab = 'Completed'">
                                <q-item-section avatar>
                                    <q-icon name="check"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    Completed
                                </q-item-section>
                            </q-item>
                            <q-item clickable @click="tab = 'Cancelled'">
                                <q-item-section avatar>
                                    <q-icon name="cancel"></q-icon>
                                </q-item-section>
                                <q-item-section>
                                    Cancelled
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-9">
                <q-card>
                    <q-card-section>
                        <q-item>
                            <q-item-section class="text-h6">{{ tab }}</q-item-section>
                        </q-item>
                        <q-list>
                            <OrderItem v-for="n in 3" :key="n" />
                        </q-list>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>