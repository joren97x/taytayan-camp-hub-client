<script setup>

    import { ref } from 'vue'

    const mode = ref('Delivery')
    const payment_method = ref('GCash')

    const payment_methods = [
        'GCash',
        'Credit/Debit Card',
        'GrabPay',
        'Maya'
    ]

</script>

<template>
    
    <div>
        <q-item clickable to="/milktea-menu">
            <q-item-section avatar>
                <q-btn round flat icon="arrow_back"></q-btn>
            </q-item-section>
            <q-item-section class="text-h6">Go back</q-item-section>
        </q-item>
        <div class="q-ma-xl">
            <div class="row q-col-gutter-xl">
                <div class="col-7">
                    <q-card>
                        <q-card-section>
                            <q-item>
                                <q-item-section class="text-h6">{{ mode }} Details</q-item-section>
                                <q-item-section side>
                                    <q-btn-toggle
                                        v-model="mode"
                                        no-caps
                                        rounded
                                        unelevated
                                        toggle-color="primary"
                                        color="white"
                                        text-color="primary"
                                        :options="[
                                            { label: 'Delivery', value: 'Delivery' },
                                            { label: 'Pickup', value: 'Pickup' }
                                        ]"
                                    />
                                </q-item-section>
                            </q-item>
                            <div class="full-width rounded-borders bg-grey q-mt-sm" style="height: 180px"></div>
                            <q-item>
                                <q-item-section avatar>
                                    <q-icon name="home"></q-icon>
                                </q-item-section>
                                <q-item-section class="text-h6">
                                    Store Location
                                    <q-item-label caption>Barangay San Vicente, Olango Island</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-separator class="q-my-md" />
                            <q-item>
                                <q-item-section class="text-h6">Pay with</q-item-section>
                                <q-item-section side>
                                    <q-chip :class="$q.dark.isActive ? 'bg-grey-9' : ''">Required</q-chip>
                                </q-item-section>
                            </q-item>
                            <q-list>
                                <q-item tag="label" v-ripple v-for="(pm, i) in payment_methods" :key="i">
                                    <q-item-section side top>
                                        <q-radio v-model="payment_method" :val="pm"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>{{ pm }}</q-item-label>
                                    </q-item-section>
                                    <q-item-section side>
                                        <q-avatar square>
                                            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                        </q-avatar>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                            <q-separator class="q-my-md" />
                            <q-item>
                                <q-item-section class="text-h6">Order Summary</q-item-section>
                                <q-item-section side>
                                    <q-chip :class="$q.dark.isActive ? 'bg-grey-9' : ''">3 items</q-chip>
                                </q-item-section>
                            </q-item>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-5">
                    <q-card>
                        price details
                    </q-card>
                </div>
            </div>
        </div>
    </div>

</template>