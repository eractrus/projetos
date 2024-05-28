import { Request, Response } from "express";
import deleteUserService from "../../service/user/deleteUserService";

export default class deleteUserController {

    async callService(req: Request, res: Response) {

        try {
            const { email } = req.body

            if (!email) {
                res.status(400).json('Account not found')
            }

            const deleteUserController = await new deleteUserService().execute(email)

            res.status(200).json({ deleteUserController })

        } catch (error) {
            console.error(`Error delete user | ERROR: ${error}`)
            res.status(500).json({
                Message: error
            })
        }
    }
}