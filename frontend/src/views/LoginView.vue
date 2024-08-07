<template>
    <div class="grid">
        <div>
            <div class="flex min-h-full flex-col justify-center py-5 lg:px-8">
                <div class="">
    
                    <div class="bg-gray-100 mt-5 sm:mx-auto sm:w-full sm:max-w-sm rounded-xl p-5">
                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
                        </div>

                        <form class="space-y-4" @submit.prevent="">    
                            <div>
                                <input name="email" type="email" placeholder="Email" required class="block w-full text-base rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
                            </div>
    
                            <div>
                                <input name="password" type="password" placeholder="Password" required class="block w-full text-base rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
                            </div>

                            <div>
                                <button type="submit" class="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                            </div>
                            
                        </form>

                        <div class="text-center text-sm mt-5 text-black">
                            Don't have an account? <RouterLink to="/create-account" class="text-blue-600">Create account</RouterLink>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <Transition>
        <ToastNotification :feedback="feedback" v-if="feedback"/>
    </Transition> -->
</template>