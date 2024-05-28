import { Request, Response } from 'express';
import CreateUserService from '../../service/user/createUserService';
import { PropsData } from '../../types/user'

export default class CreateUserController {

    async callService(req: Request, res: Response): Promise<void> {

        const { name, email, password }: PropsData = req.body;

        const createUserService = new CreateUserService();

        if (!name || !email || !password) {
            res.status(401).json({
                mesage: 'Crendetials to required'
            })
        }

        try {
            const user = await createUserService.execute({ name, email, password });
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error });
            console.error(`Error when trying to conect: ${error}`)
        }
    }
}
