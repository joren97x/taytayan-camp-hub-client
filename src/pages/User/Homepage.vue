<script setup>

    import { ref } from 'vue'
    import SectionCard from 'src/components/User/SectionCard.vue'

    const slide = ref('style1')

</script>

<template>
    <div class="row q-col-gutter-xl">
        <div class="col-6">
        <div>
            <p class="text-start text-h3 q-mt-xl text-weight-medium">Lorem ipsum dolor emit ambatukam</p>
            <p class="text-start text-h6 text-weight-regular"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium, numquam porro, exercitationem quos debitis fugit ducimus </p>
            <q-btn size="lg" unelevated color="blue" no-caps> Create your account - it's free! </q-btn>
        </div>
    </div>
        <div class="col-6">
            <q-img src="https://cdn.quasar.dev/img/mountains.jpg"></q-img>
        </div>
    </div>
    <q-separator class="q-my-xl"/>

    <p class="text-center text-h3 text-weight-medium">Lorem ipsum dolor emit ambatukam</p>

    <div class="row q-col-gutter-xl q-mt-xl">
        <div class="col-6">
            <div>
                <p class="text-start text-h4 q-mt-xl text-weight-medium"> Milk Tea Delights </p>
                <p class="text-start text-h6 text-weight-regular"> Explore our wide range of refreshing milk tea flavors and customizable options </p>
                <q-btn size="lg" unelevated color="blue" no-caps> Order Milk Tea </q-btn>
            </div>
        </div>
        <div class="col-6">
            <q-img src="https://cdn.quasar.dev/img/mountains.jpg"></q-img>
        </div>
    </div>

    <div class="row q-col-gutter-xl q-mt-xl">
        <div class="col-6">
            <q-img src="https://cdn.quasar.dev/img/mountains.jpg"></q-img>
        </div>
        <div class="col-6">
            <div>
                <p class="text-start text-h4 q-mt-xl text-weight-medium"> Nature Retreats </p>
                <p class="text-start text-h6 text-weight-regular"> Plan your next outdoor adventure with our camp reservation system. Discover scenic campsites and book your stay hassle-free. </p>
                <q-btn size="lg" unelevated color="blue" no-caps> Reserve Campsite </q-btn>
            </div>
        </div>
    </div>

    <div class="row q-col-gutter-xl q-mt-xl">
        <div class="col-6">
            <div>
                <p class="text-start text-h4 q-mt-xl text-weight-medium"> Exciting Events </p>
                <p class="text-start text-h6 text-weight-regular"> Browse upcoming events and concerts. Secure your tickets and be part of unforgettable experiences. </p>
                <q-btn size="lg" unelevated color="blue" no-caps> Buy Event Tickets </q-btn>
            </div>
        </div>
        <div class="col-6">
            <q-img src="https://cdn.quasar.dev/img/mountains.jpg"></q-img>
        </div>
    </div>

    <p class="text-center text-h4 q-mt-xl text-weight-bold"> Here's what they have to say. </p>

    <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        navigation
        padding
        arrows
        :control-color="$q.dark.isActive ? 'white' : 'black'"
        height="300px"
        class="rounded-borders"
    >
        <template v-slot:navigation-icon="{ active, onClick }">
            <q-btn v-if="active" size="lg" icon="minimize" color="blue" flat round dense @click="onClick" />
            <q-btn v-else size="lg" icon="minimize" :color="$q.dark.isActive ? 'white' : 'black'" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide :name="`style${n}`" class="column no-wrap" v-for="n in 5" :key="n">
            <div class="row q-col-gutter-x-md">
                <div class="col-6">
                    <q-card class="q-pa-md">
                        <img style="height: 50px; width: 50px" src="https://assets-global.website-files.com/609cbadfde419c81adafa17b/609db59d8c7a879cbd837708_Quotation%20Mark.svg" alt="">
                        <div class="q-mt-md text-start">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, consectetur!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, consectetur!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, consectetur!
                            <br>
                            <br>
                            - John Doe
                        </div>
                    </q-card>
                </div>
                <div class="col-6">
                    <q-card class="q-pa-md">
                        <img style="height: 50px; width: 50px" src="https://assets-global.website-files.com/609cbadfde419c81adafa17b/609db59d8c7a879cbd837708_Quotation%20Mark.svg" alt="">
                        <div class="q-mt-md text-start">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, consectetur!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, consectetur!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, consectetur!
                            <br>
                            <br>
                            - John Doe
                        </div>
                    </q-card>
                </div>
            </div>
        </q-carousel-slide>
      
    </q-carousel>

</template>