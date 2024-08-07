<script setup>
import Nav from "@/components/Nav.vue";
import ProductsCard from "./components/ProductsCard.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="px-6 lg:px-40 flex flex-col min-h-screen">
        <Nav />

        <div class="grow h-full mt-5 text-lg">
          <RouterView />
        </div>

        <Footer />
    </div>
</template>

<style scoped>
* {
    background-color: #111827;
}
</style>
