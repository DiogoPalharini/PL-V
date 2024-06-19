// src/routes/login.route.ts

import express, { Request, Response } from 'express';
import { Cliente } from '../database/models/cliente.model';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const { email, senha } = req.body;

    try {
        // Verificar se o cliente existe no banco de dados
        const cliente = await Cliente.findOne({ where: { email } });

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado.' });
        }

        // Verificar se a senha está correta
        if (cliente.senha !== senha) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        // Login bem-sucedido
        res.status(200).json({ message: 'Login realizado com sucesso.', cliente });
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        res.status(500).json({ message: 'Erro ao realizar login. Por favor, tente novamente.' });
    }
});

export default router;
