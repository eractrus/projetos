import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

interface payload{
    sub:string
}


function isAuth(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ")

    try {

        const {sub} = verify(
            token,
            process.env.JWT_SECRET
        ) as payload

        return next()

    } catch (error) {
        res.status(401).end()
        console.log(`No authorizated | ${error}`)
    }

}

export { isAuth }