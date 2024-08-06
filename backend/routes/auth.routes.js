import express from "express";
import { body, validationResult } from "express-validator";
import authController from "../controller/auth.controller.js";

const { create, login } = authController;
const router = express.Router();

router.use(express.json());

router.post('/create', [
        body('username').trim().notEmpty().isString().withMessage('User name is required and must be a string.'),
        body('email').trim().notEmpty().isEmail().withMessage('Email is required and must be a valid email.'),
        body('password').trim().notEmpty().isLength({ min: 6 }).withMessage('Password is required and must be at least 6 characters long.')
    ], (req, res, next) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.errors[0].msg });
    }

    create(req, res, next);
});

router.get('/login', [
        body('email').trim().notEmpty().withMessage('Email is required.'),
        body('password').trim().notEmpty().withMessage('Password is required.')
    ], (req, res, next) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.errors[0].msg });
    }

    login(req, res, next);
});

export default router;
