// src/routes/auth.routes.ts

import express, { Request, Response } from 'express';


const router = express.Router();

// Rota para verificar se o usuário está autenticado
router.get('/auth/verify', verifyToken, (req: Request, res: Response) => {
    // Se chegou até aqui, o token é válido e o usuário está autenticado
    res.status(200).json({ message: 'Usuário autenticado', user: req.user });
});

export default router;
