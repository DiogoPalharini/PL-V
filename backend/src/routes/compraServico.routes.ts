// src/routes/compraServico.routes.ts

import express, { Request, Response } from 'express';
import { CompraServico } from '../database/models/compra_servico.model';
import { Cliente } from '../database/models/cliente.model'; // Se necessário, importe o modelo de Cliente
import { Servico } from '../database/models/servico.model'; // Importe o modelo de Servico
import { Pet } from '../database/models/pet.model'; // Se necessário, importe o modelo de Pet

const router = express.Router();

// Rota para listar todas as compras de serviços
router.get('/compras/servicos', async (req: Request, res: Response) => {
    try {
        const comprasServicos = await CompraServico.findAll({
            include: [
                { model: Cliente, attributes: ['cpf', 'nome'] }, // Se desejar incluir informações do cliente
                { model: Servico, attributes: ['id', 'nome', 'preco'] },
                { model: Pet, attributes: ['id', 'nome'] } // Se desejar incluir informações do pet
            ]
        });
        res.json(comprasServicos);
    } catch (error) {
        console.error('Erro ao buscar compras de serviços:', error);
        res.status(500).send('Erro ao buscar compras de serviços.');
    }
});

export default router;
