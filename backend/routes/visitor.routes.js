import express from "express"
import visitorController from "../controller/visitor.controller.js"

let { getProduct, getProducts, search } = visitorController
let router = express.Router()

router.get('/get-product', getProduct)
router.get('/get-products', getProducts)
router.get('/search', search)

export default router