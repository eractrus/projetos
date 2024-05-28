import { Request, Response } from "express";
import loginService from "../../service/Auth/loginService";

export default class loginController {

    async callService(req: Request, res: Response) {

        const { email, password } = req.body

        if (!email || !password) {
            res.status(401).json('Credentials not found')
        }
        try {
            const service = await new loginService().execute({ email, password })

            res.status(200).json({service})
            
        } catch (error) {
            res.status(500).json(`Error internal | ERROR: ${error}`)
        }

    }
}