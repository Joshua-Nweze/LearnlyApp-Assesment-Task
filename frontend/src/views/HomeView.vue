<script setup>
import { onMounted } from 'vue';
import { useProductsStore } from '@/stores/useProducts.js';
import { storeToRefs } from 'pinia';
import ProductsCard from '@/components/ProductsCard.vue';

let productsStore = useProductsStore();
let { getProducts } = productsStore;
let { products } = storeToRefs(productsStore)

onMounted(async () => {
	await getProducts();
	console.log(products.value)
});
</script>

<template>
    <ProductsCard :products="products"/>
</template>
