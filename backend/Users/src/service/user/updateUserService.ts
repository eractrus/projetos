import prismaClient from "../../prisma/prismaClient";
import { PropsData } from '../../types/user'
import { hash} from "bcrypt";
export default class updateUserService {
    async execute({ email, password }: PropsData) {

        if(!password){
            throw new Error(`Request data password`)
        }

        const hashPassword = await hash(password,8)

        const service = await prismaClient.clients.update(
            {
                where: {
                    email: email
                },
                data: {
                    password: hashPassword
                }
            }
        )
        return {
            Message: "Password alter success !"
        }
    }
}