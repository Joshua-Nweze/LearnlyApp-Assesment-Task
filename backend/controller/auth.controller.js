import Users from "../model/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// create jwt
function createToken(id) {
    if (!process.env.JWT_SECRET) {
        throw new Error("DB_URI environment variable is not defined");
    }

    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 2 * 24 * 60 * 60 /* 2 days in seconds */,
    });
}

async function create(req, res) {
    try {
        let { username, email, password } = req.body

        let userWithUsernameExists = await Users.findOne({ username })
        if (userWithUsernameExists) {
            res.status(400).json({ message: "User with username exists." })
            return
        }

        let userWithEmailExists = await Users.findOne({ email })
        if (userWithEmailExists) {
            res.status(400).json({ message: "User with email exists." })
            return
        }

        password = await bcrypt.hash(password, 10)

        let newUser = new Users({
            username,
            email,
            password
        })

        let createUser = await newUser.save()

        if (createUser) {
            res.status(201).json({ message: "Account created successfully." });
            return;
        } else {
            res.status(500).json({ message: "Could not create account, try again later." });
            return;
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong, try again later." })
    }
}

async function login(req, res) {
    try {
        let { email, password } = req.body

        let user = await Users.findOne({ email })

        if (!user) {
            res.status(400).json({ message: "Incorrect email or password." })
            return
        } else {
            let isPasswordOk = await bcrypt.compare(password, user.password)

            if (!isPasswordOk) {
                res.status(400).json({ message: "Incorrect email or password." })
                return
            } else {
                const token = createToken(email);

                res.status(200).json({ message: "Login successful", token });
                return;
            }
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong, try again later." })
    }
}

export default {
    create,
    login
}