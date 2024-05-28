import prismaClient from "../../prisma/prismaClient";
import { PropsDataLogin } from '../../types/login'
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken'

export default class loginService {
    async execute(
        { email, password }: PropsDataLogin
    ) {

        const secretKey = process.env.JWT_SECRET as string

        const verifyEmail = await prismaClient.clients.findFirst(
            {
                where: {
                    email: email
                }
            }
        )

        if (verifyEmail !== null) {

            const verifyPassword = await compare(password, verifyEmail.password)

            const token = sign(
                {
                    name: verifyEmail.name,
                    email: verifyEmail.email
                },
                secretKey,
                {
                    subject: verifyEmail.id.toString(),
                    expiresIn: '30d'
                }

            )

            return {
                id: verifyEmail.id,
                name: verifyEmail.name,
                email: verifyEmail.email,
                token: token
            }


        } else {
            throw new Error(`Return can't be null`)
        }







    }
}