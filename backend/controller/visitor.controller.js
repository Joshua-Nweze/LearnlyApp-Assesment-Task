// controller functions for users not authenticated and users authenticated
import Products from "../model/product.model.js";

async function getProducts(req, res) {
    try {
        let { p } = req.query

        // pagination
        p = parseInt(p) || 0;
        let productsPerSet = 6;
        let availableProducts;

        let myProducts = await Products.find()
            .sort({ createdAt: -1 })
            .skip(p * productsPerSet)
            .limit(productsPerSet);

        if (myProducts) {
            availableProducts = true
        } else {
            availableProducts = false
        }

        // checking if there are products to show
        // if no product, return "No products to see."
        // else paginate and return products until all products are returned 
        if (availableProducts) {
            if (myProducts.length === 0) {
                res.status(200).json({
                    message: "You've caught up with all products.",
                    allRetrieved: true,
                });
            } else {
                res.status(200).json({ message: myProducts, allRetrieved: myProducts.length >= 6 });
            }
        } else {
            res.status(200).json({
                message: "No products to see.",
                allRetrieved: true,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong, try again later." })
    }
}
// get single product
async function getProduct(req, res) {
    try {
        let { id } = req.query

        let product = await Products.findById(id)

        if (!product) {
            res.status(404).json({ message: "Product not found." })
            return
        } else {
            res.status(200).json({ message: product })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong, try again later." })
    }
}

async function search(req, res) {
    try {
        let { q } = req.query

        let product = await Products.find({
            name: { $regex: new RegExp(q, 'i') }
          })

        if (product.length < 1) {
            res.status(404).json({ message: "Product not found." })
            return
        } else {
            res.status(200).json({ message: product })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong, try again later." })
    }
}

export default {
    getProducts,
    getProduct,
    search
}