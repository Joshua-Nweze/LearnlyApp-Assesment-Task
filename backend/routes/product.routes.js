import express from "express"
import productsController from "../controller/product.controller.js";
import multer from "multer";
import path from "path"
import { fileURLToPath } from "url"
import fs from "fs"

let { add, edit, deleteProduct, myProducts } = productsController
let router = express.Router()

// MULTER SETUP
// Ensure uploads directory exists
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(`${__dirname}`)

const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) {
    try {
        fs.mkdirSync(uploadDir, { recursive: true });
    } catch (err) {
        console.error('Error creating uploads directory:', err);
    }
}

// Multer setup for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const imageFileFilter = (req, file, cb) => {
    // Accept images only
    if (file.mimetype.startsWith('image')) {
        cb(null, true); // Accept the file
    } else {
        const error = new MulterError('File must be an image.', 400);
        console.log(error)
    }
};

const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // 2mb
});

let imgUpload = upload.single('imageUrl')

// ROUTES
router.post('/add', (req, res) => {
    imgUpload(req, res, function (err) {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: err.message })
        }
        
        add(req, res)
    })
})

router.patch('/edit', edit)
router.delete('/delete', deleteProduct)
router.get('/my-products', myProducts)

export default router