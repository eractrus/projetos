import prismaClient from "../../prisma/prismaClient";

export default class getDataAccountService {
    async execute(email:string) {

        const service = await prismaClient.clients.findUnique({
            where:{
                email:email
            },
            select:{
                id:true,
                name:true,
                email:true,
                createdAt:true
            }
        })
        return service
    }
}