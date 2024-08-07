import express from "express";
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import visitorRoutes from './routes/visitor.routes.js'

import checkAuth from "./middleware/checkAuth.js";

configDotenv()

const app = express()

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

// app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/product', productRoutes)
app.use('/api', visitorRoutes)

// validate token

// app.post('/api/validate-token', checkAuth, (req, res) => {
// 	return res.status(200).json({ valid: true })
// })

mongoose.connect(process.env.DB_URI)
    .then(app.listen(PORT, () => {
        console.log(`server running in port ${PORT}`)
    }))