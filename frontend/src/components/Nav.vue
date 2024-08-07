<template>
    <header class="text-gray-400 bg-gray-900 body-font border-b">
        <div class="p-5 grid grid-cols-2 md:grid-cols-3 flex items-center">
            <span class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <RouterLink to="/" class="ml-3 text-xl">iShop</RouterLink>
            </span>

            <div class="hidden md:block">
                <div class="relative mt-2 rounded-md shadow-sm flex gap-2">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" ></div>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Search item"
                    />
                    <PrimaryButton class="flex items-center w-fit">
                        <i class="bi bi-search"></i>
                    </PrimaryButton>
                </div>
            </div>

            <div class="flex justify-end">
                <!-- <div class="flex gap-3">
                    <button class="text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                    <button class="text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                </div> -->
                <div>
                    <button @click="showDropDown = !showDropDown" class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded-full">
                        <i class="bi bi-person"></i>
                    </button>

                    <div v-if="showDropDown" ref="dropdown">
                        <div class="absolute z-10 origin-top-right rounded-md mt-2 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">My products</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Add product</a>
                                <hr>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import PrimaryButton from './PrimaryButton.vue';

let showDropDown = ref(false)
const dropdown = ref(null);

// const handleDocumentClick = (event) => {
//     console.log(event)
//   if (showDropDown.value) {
//     showDropDown.value = false;
//   }
// };

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick);
});
</script>