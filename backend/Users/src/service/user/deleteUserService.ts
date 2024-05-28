import prismaClient from "../../prisma/prismaClient";

export default class deleteUserService {
    async execute(email: string) {

        const verifyEmail = await prismaClient.clients.findUnique(
            {
                where: {
                    email: email
                }, select: {
                    id: true
                }
            }
        )

        if (!verifyEmail) {
            throw new Error('Account not found')
        }

        await prismaClient.clients.delete(
            {
                where: verifyEmail
            }
        )

        return { message: 'Account deleted' }

    }
}