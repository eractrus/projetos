import { Request, Response } from "express";
import updateUserService from "../../service/user/updateUserService";

export default class updateUserController {
    async callService(req: Request, res: Response) {

        const { email, password } = req.body

        if (!email) {
            res.status(400).json('Email not found')
        }

        try {
            const service = await new updateUserService().execute({ email, password })

            res.status(200).send(service)
        } catch (error) {
            res.status(500).json(`Error internal | ERROR : ${error}`)
        }
    }
}