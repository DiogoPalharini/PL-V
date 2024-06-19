// src/routes/clientes.routes.ts

import { Router } from 'express';
import { Cliente } from '../database/models/cliente.model';

const router = Router();

// Rota para cadastrar um novo cliente
router.post('/', async (req, res) => {
    console.log('Recebido pedido de cadastro de cliente:', req.body);
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
        res.status(500).json({ error: 'Erro ao cadastrar cliente' });
    }
});

export default router;
