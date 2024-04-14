<script setup>

    import { ref } from 'vue'

    const slide = ref(1)

</script>

<template>
    <q-card class="row" flat>
        <div class="col-6" style="margin-top: 5%;">
            <router-view></router-view>
        </div>
        <div class="col-6" style="margin-top: 5%;">
            <p class="text-center text-h3">Taytayan Camp Hub</p>
            <q-carousel
                animated
                v-model="slide"
                arrows
                swipeable
                infinite
                class="text-center"
            >
                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
                    <div class="absolute-bottom custom-caption">
                        <div class="text-h4">First stop</div>
                        <div class="text-subtitle1">Famous City</div>
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
                    <div class="absolute-bottom custom-caption">
                        <div class="text-h4">Second stop</div>
                        <div class="text-subtitle1">Famous City</div>
                    </div>    
                </q-carousel-slide>
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-bottom custom-caption">
                        <div class="text-h4">Third stop</div>
                        <div class="text-subtitle1">Famous City</div>
                    </div>    
                </q-carousel-slide>
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg">
                    <div class="absolute-bottom custom-caption">
                        <div class="text-h2">Fourth stop</div>
                        <div class="text-subtitle1">Famous City</div>
                    </div>    
                </q-carousel-slide>
            </q-carousel>
            <p class="text-center q-mt-xl">© Copyright 2024 Taytayan Camp Hub</p>
        </div>
    </q-card>
</template>