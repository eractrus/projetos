import { Request, Response, NextFunction } from 'express';
import prismaClient from '../prisma/prismaClient';

const verifyEmailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: 'Email is required' });
        return;
    }

    try {
        const existingUser = await prismaClient.clients.findUnique({
            where: { email },
        });

        if (existingUser) {
            res.status(400).json({ error: 'Email already registered' });
            return;
        }
        next();

    } catch (error) {
        console.error('Error verifying email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default verifyEmailMiddleware;
