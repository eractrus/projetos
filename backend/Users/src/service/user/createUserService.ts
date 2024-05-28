import prismaClient from "../../prisma/prismaClient";
import { PropsData } from '../../types/user'
import { hash } from 'bcrypt'

export default class createUserService {
    async execute(
        { name, email, password }: PropsData
    ) {
        const hashPassword = await hash(password, 8)

        const service = prismaClient.clients.create(
            {
                data: {
                    name, email, password: hashPassword
                }, select: {
                    id: true,
                    name: true
                }
            }
        )
        return service
    }
}