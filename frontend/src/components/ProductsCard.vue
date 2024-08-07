<template>
    <section class="text-gray-400 bg-gray-900 body-font">
        <div v-if="products">
            <div class="grid [max-360px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-3">
                <RouterLink :to="`/product/${product._id}`" v-for="product in products">
                    <a class="block relative h-48 rounded overflow-hidden">
                        <img
                            :alt="`${product.name} image`"
                            class="object-cover object-center w-full h-full block"
                            :src="`data:image/jpeg;base64,${product.imageUrl}`"
                        />
                    </a>
                    <div class="mt-4">
                        <h3
                            class="text-gray-500 text-xs tracking-widest title-font mb-1"
                        >
                            PRODUCT
                        </h3>
                        <h2 class="text-white title-font text-lg font-medium">
                            {{ product.name }}
                        </h2>
                        <p class="mt-1">₦{{ product.price }}</p>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div v-else>
            <SpinnerLoader />
        </div>
    </section>
</template>

<script setup>
import SpinnerLoader from './SpinnerLoader.vue';

defineProps(['products'])

let api = import.meta.env.VITE_API_HOST + '/public'
</script>
