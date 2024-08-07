<template>
    <form @submit.prevent="">
        <div class="col-span-full">
            <div class="mt-2 flex flex-col gap-5 md:mx-20 lg:mx-40">
                <div class="text-2xl">Upload a product</div>
                <div class="text-sm">All fields with * is required</div>
                <input
                    type="text"
                    placeholder="Product name*"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-gray-400 focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                    required
                />

                <input
                    type="text"
                    placeholder="Description*"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-gray-400 focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                    required
                />

                <input
                    type="text"
                    placeholder="Price*"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-gray-400 focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                    required
                />

                <div class="col-span-2 lg:col-span-1">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="passport">Upload product image* <span class="text-gray-400">(Max. size is 2mb)</span></label>
                    <input class="block p-2.5 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="passport" type="file">
                </div>

                <!-- <div
                                v-if="feedback"
                                id="toast-simple"
                                class="col-span-2 flex items-center w-full p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
                                role="alert"
                            >
                                <div class="flex items-center w-4/5">
                                    <div>
                                        <svg
                                            v-if="
                                                feedback.status == '500' ||
                                                feedback.status == '400'
                                            "
                                            class="w-5 h-5 text-red-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
                                            />
                                        </svg>
                                        <svg
                                            v-else
                                            class="w-5 h-5 text-green-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                            />
                                        </svg>
                                    </div>

                                    <div>
                                        <div
                                            v-if="
                                                feedback.status == '500' ||
                                                feedback.status == '400'
                                            "
                                            class="ps-4 text-sm font-normal"
                                        >
                                            {{ feedback.msg }}
                                        </div>
                                        <div
                                            v-else
                                            class="ps-4 text-sm font-normal"
                                        >
                                            {{ feedback.msg }}.
                                        </div>
                                    </div>
                                </div>

                                <div class="flex justify-end w-1/5">
                                    <span
                                        @click="feedback = null"
                                        class="hover:cursor-pointer"
                                    >
                                        <i
                                            class="fa-regular fa-circle-xmark"
                                        ></i>
                                    </span>
                                </div>
                            </div> -->

                <button type="submit">
                                <PrimaryButton class="flex items-center w-fit">
                                    <!-- <SmallLoader class="mb-1 me-2" v-if="loading" /> -->
                                    Upload product
                                    <i
                                        class="fa-solid fa-paper-plane fa-rotate-by ms-2"
                                        style="--fa-rotate-angle: 15deg"
                                    ></i>
                                </PrimaryButton>
                            </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
</script>

<style scoped>
input {
    background-color: #111827;
    color: white;
}
</style>
