import { Request, Response } from "express";
import getDataAccountService from "../../service/user/getDataAccountService";

export default class getDataAccountController {
    async callservice(req: Request, res: Response) {

        const { email } = req.body

        if(!email){
            return res.status(400).end()
        }
        
        try {
            const service = await new getDataAccountService().execute(email)

            res.status(200).json(service)

        } catch (error) {
            res.status(500).json('Erro Iternal' + error).end()
        }

    }
}