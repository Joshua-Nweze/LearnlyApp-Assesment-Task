import { defineStore } from "pinia";
import { useAuthStore } from "./useAuth";
import { storeToRefs } from "pinia";
import { ref } from "vue";


export const useProductsStore = defineStore("products", {
    state: () => ({
        products: null,
        myProducts: null,
        page: 0,
        otherBlogs: null,
        allRetrieved: false
    }),

    actions: {
        async getProducts() {
            try {
                const req = await fetch(`${import.meta.env.VITE_API_HOST}/api/get-products?p=${this.page}`);
                const res = await req.json();

                if (!this.products) {
                    this.products = res.message
                } else {
                    (res.message).forEach(newProduct => {
                        if (!this.products.find(product => product.id === newProduct.id)) {
                            this.products.push(newProduct);
                        }
                    });
                }
                
                this.page++;

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },

        async getProduct(id) {
            let req = await fetch(`${import.meta.env.VITE_API_HOST}/api/get-product?id=${id}`);
            let res = await req.json();

            return res.message
        },

        //     async getUserBlogs() {
        //         let authStore = useAuthStore()
        //         let { user } = storeToRefs(authStore)

        //         let req = await fetch(`${import.meta.env.VITE_API_HOST}/api/blog/my-blogs?id=${user.value?._id}`);
        //         let res = await req.json();

        //         this.page++

        //         this.myBlogs = res.message
        //     },


        //     async postBlog(blogData) {

        //         let req = await fetch(`${import.meta.env.VITE_API_HOST}/api/blog/create`, {
        //             method: 'POST',
        //             body: blogData
        //         });

        //         let res = await req.json()

        //         await this.getBlogs()

        //         return {
        //             message: res.message,
        //             status: req.status
        //         }

        //     },

        //     async deleteBlog(blogId) {
        //         let authStore = useAuthStore()
        //         let { user } = storeToRefs(authStore)

        //         let req = await fetch(`${import.meta.env.VITE_API_HOST}/api/blog/delete`, {
        //             method: 'DELETE',
        //             headers: { 'Content-type': 'application/json' },
        //             body: JSON.stringify({
        //                 blogId,
        //                 id: user.value?._id
        //             })
        //         });

        //         let res = await req.json()

        //         return {
        //             message: res.message,
        //             status: req.status
        //         }
        //     },

        //     async editBlog(data) {
        //         let req = await fetch(`${import.meta.env.VITE_API_HOST}/api/blog/edit`, {
        //             method: 'PATCH',
        //             body: data
        //         });
        //         let res = await req.json()

        //         return {
        //             message: res.message,
        //             status: req.status
        //         }
        //     }
    },
});