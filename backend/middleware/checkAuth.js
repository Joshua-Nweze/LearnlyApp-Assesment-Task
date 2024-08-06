import jwt from "jsonwebtoken";
import Users from "../model/user.model.js";
// import { Request, Response, NextFunction } from 'express'

function splitString(string) {
	return string.split(' ')
}

export default function checkAuth(req, res, next) {
	if (!req.headers.authorization) {
		return res.status(401).json({ message: "Authentification Failed, no auth header" })
	} else {
		const [tokenType, token] = splitString(req.headers.authorization)

		if (token && tokenType === 'Bearer') {
			const secret = process.env.JWT_SECRET
			jwt.verify(token, secret, async (err, decodedToken) => {
				if (err) {
					return res
						.status(401)
						.json({ message: "Authentification Failed, try logging in again" })
				} else {
                    let user = await Users.findOne({ email: decodedToken.id })
                    res.locals.user = {
                        id: user._id,
                        email: user.email
                    }
					next()
				}
			})
		}
	}
}