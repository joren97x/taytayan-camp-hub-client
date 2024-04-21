<script setup>

    import { ref, onMounted } from 'vue'
    import { api } from 'src/boot/axios'
    import CompletedOrderItem from 'src/components/User/Milkteas/CompletedOrderItem.vue'
    import PendingOrderItem from 'src/components/User/Milkteas/PendingOrderItem.vue'
    import CancelledOrderItem from 'src/components/User/Milkteas/CancelledOrderItem.vue'

    const tab = ref('On Progress')

    onMounted(() => {
        api.get('/user')
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    })

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
                            <div v-if="tab == 'On Progress'">
                                <PendingOrderItem :status="'Pending'" :mode="'Delivery'" />
                                <PendingOrderItem :status="'Pending'" :mode="'Pickup'" />
                            </div>
                            <div v-if="tab == 'Completed'">
                                <CompletedOrderItem v-for="n in 3" :key="n" :status="'Completed'" />
                            </div>
                            <div v-if="tab == 'Cancelled'">
                                <CancelledOrderItem v-for="n in 3" :key="n" :status="'Cancelled'" />
                            </div>
                        </q-list>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>