import Products from "../model/product.model.js";
import validator from "validator";
import fs from "fs"

async function add(req, res) {
    try {
        let { name, description, price, createdBy } = req.body
        let file = req.file

        if (file) {
            let imagePath = file.path

            const imageBuffer = fs.readFileSync(imagePath);
            // Encode the image buffer as a Base64 string
            const imageBase64 = imageBuffer.toString('base64');

            file = imageBase64
        }

        if (!name || !description || !price || !createdBy) {
            res.status(400).json({ message: "All input is required" })
            return
        }

        if (!validator.isNumeric(price)) {
            res.status(400).json({ message: "Price must be a number" })
        }

        let newProduct = new Products({
            name,
            description,
            price,
            createdBy,
            imageUrl: file
        })

        let createProduct = await newProduct.save()

        if (!createProduct) {
            res.status(500).json({ message: "Something went wrong, try again later." })
            return
        } else {
            res.status(200).json({ message: "Product added" })
        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong, try again later." })
    }
}

async function edit(req, res) {
    try {
        let { id, name, description, price, createdBy } = req.body

        // if(createdBy != res.locals.user.id) {
        //     res.status(401).json({ message: "You are not authorized to perform this action." })
        //     return
        // }

        if (!name || !description || !price || !createdBy) {
            res.status(400).json({ message: "All input is required" })
            return
        }

        if (!validator.isNumeric(price)) {
            res.status(400).json({ message: "Price must be a number" })
        }

        let updateProduct = await Products.findByIdAndUpdate(
            id,
            {
                name,
                description,
                price
            },
            { new: true }
        )

        if (!updateProduct) {
            res.status(500).json({ message: "Something went wrong, try again later." })
            return
        } else {
            res.status(200).json({ message: "Product updated." })
            return
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong, try again later." })
    }
}

async function deleteProduct(req, res) {
    try {
        let { id, createdBy } = req.body

        if (!id || !createdBy) {
            res.status(500).json({ message: "Something went wrong, try again later." })
            return
        }

        // if(createdBy != res.locals.user.id) {
        //     res.status(401).json({ message: "You are not authorized to perform this action." })
        //     return
        // }

        let product = await Products.findById(id)

        if (product) {
            // delete product image
            fs.unlinkSync(product.imageUrl)

            await Products.findByIdAndDelete(id)

            res.status(200).json({ message: "Product deleted" })
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, try again later." })
    }
}
// get all user products
async function myProducts(req, res) {
    try {
        let { createdBy, p } = req.query

        // if(createdBy != res.locals.user.id) {
        //     res.status(401).json({ message: "You are not authorized to perform this action." })
        //     return
        // }

        // pagination
        p = parseInt(p) || 0;
        let productsPerSet = 6;
        let userHasProducts;

        let myProducts = await Products.find({ createdBy })
            .sort({ createdAt: -1 })
            .skip(p * productsPerSet)
            .limit(productsPerSet);

        if (myProducts) {
            userHasProducts = true
        } else {
            userHasProducts = false
        }

        // checking if user has products
        // if user has no product, return "You don't have any products."
        //  else paginate and return user products until all products are returned 
        if (userHasProducts) {
            if (myProducts.length === 0) {
                res.status(200).json({
                    message: "You've caught up with all your products.",
                    allRetrieved: true,
                });
            } else {
                res.status(200).json({ message: myProducts, allRetrieved: false });
            }
        } else {
            res.status(200).json({
                message: "You don't have any products.",
                allRetrieved: true,
            });
        }



    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong, try again later." })
    }
}

export default {
    add,
    edit,
    deleteProduct,
    myProducts
}