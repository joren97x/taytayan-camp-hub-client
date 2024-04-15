<script setup>

    import { ref } from 'vue'
    import Footer from 'src/components/User/Footer.vue'

    const rightDrawerOpen = ref(false)

</script>

<template>
    <q-layout view="hHh lpR lff">

        <q-header>
            <q-toolbar class="q-pa-md">
                <q-toolbar-title>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                </q-avatar>
                Taytayan Camp Hub
                </q-toolbar-title>
                <q-space />
                <q-btn flat no-caps class="bordered" bordered>Milktea Menu</q-btn>
                <q-btn flat no-caps>Explore Events</q-btn>
                <q-btn flat no-caps>Book Campsite</q-btn>
                <q-space />
                <q-btn flat no-caps to="/auth/register">Register</q-btn>
                <q-btn no-caps color="secondary" unelevated to="/auth/login">Login</q-btn>
                <q-btn flat icon="search" round></q-btn>
                <q-btn flat icon="notifications" round>
                    <q-badge color="red" floating>4</q-badge>
                    <q-menu fit>
                        <q-list style="min-width: 400px">
                            <q-item clickable>
                                <q-item-section>New tab</q-item-section>
                            </q-item>
                            <q-item clickable>
                                <q-item-section>New incognito tab</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
                <q-btn flat round icon="shopping_cart" @click="rightDrawerOpen = !rightDrawerOpen">
                    <q-badge color="red" floating>4</q-badge>
                </q-btn>
                <q-btn flat rounded :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'" @click="$q.dark.toggle()"/>
                <q-btn flat round>
                    <q-avatar size="42px">
                        <img src="https://pbs.twimg.com/profile_images/1642568071046119428/xtyyRarT_400x400.jpg">
                    </q-avatar>
                    <q-menu fit>
                        <q-list>
                            <q-item>
                                <q-item-section top avatar>
                                    <q-avatar color="primary" text-color="white">
                                        <img src="https://pbs.twimg.com/profile_images/1642568071046119428/xtyyRarT_400x400.jpg">
                                    </q-avatar>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>John Doe</q-item-label>
                                    <q-item-label caption lines="1">johndoe@email.com</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable>
                                <q-item-section avatar>
                                    <q-icon name="date_range" />
                                </q-item-section>
                                <q-item-section>Reservations</q-item-section>
                            </q-item>
                            <q-item clickable>
                                <q-item-section avatar>
                                    <q-icon name="confirmation_number" />
                                </q-item-section>
                                <q-item-section>Tickets</q-item-section>
                            </q-item>
                            <q-item clickable>
                                <q-item-section avatar>
                                    <q-icon name="receipt_long" />
                                </q-item-section>
                                <q-item-section>Orders</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable>
                                <q-item-section avatar>
                                    <q-icon name="manage_accounts" />
                                </q-item-section>
                                <q-item-section>Settings</q-item-section>
                            </q-item>
                            <q-item clickable>
                                <q-item-section avatar>
                                    <q-icon name="logout" />
                                </q-item-section>
                                <q-item-section>Logout</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="rightDrawerOpen" side="right" bordered overlay>
            <!-- drawer content -->
            should be the cart
        </q-drawer>

        <q-page-container class="q-ma-xl">
            <router-view />
        </q-page-container>
        <Footer/>
    </q-layout>
</template>
  

  