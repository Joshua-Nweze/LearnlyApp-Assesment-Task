<template>
    <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <img alt="ecommerce" class="w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400">
                <div class="w-full mt-6 md:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">PRODUCT</h2>
                    <h1 class="text-white text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                    <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
                    <div class="flex">
                        <span class="title-font font-medium text-2xl text-white">₦58</span>
                        <PrimaryButton class="flex ml-auto py-2 px-6 cursor-not-allowed">Add to cart</PrimaryButton>
                        <button class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 cursor-not-allowed">
                            <i class="bi bi-heart-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
</script>