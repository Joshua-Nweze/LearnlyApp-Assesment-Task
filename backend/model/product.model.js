import mongoose, { Schema } from "mongoose";

let productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    }
}, {timestamps: true})

let Products = mongoose.model('Products', productSchema)

export default Products