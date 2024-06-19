// src/routes/compraProduto.routes.ts

import express, { Request, Response } from 'express';
import { CompraProduto } from '../database/models/compra_produto.model';
import { Cliente } from '../database/models/cliente.model'; // Se necessário, importe o modelo de Cliente
import { Produto } from '../database/models/produto.model'; // Importe o modelo de Produto

const router = express.Router();

// Rota para listar todas as compras de produtos
router.get('/compras/produtos', async (req: Request, res: Response) => {
    try {
        const comprasProdutos = await CompraProduto.findAll({
            include: [
                { model: Cliente, attributes: ['cpf', 'nome'] }, // Se desejar incluir informações do cliente
                { model: Produto, attributes: ['id', 'nome', 'preco'] }
            ]
        });
        res.json(comprasProdutos);
    } catch (error) {
        console.error('Erro ao buscar compras de produtos:', error);
        res.status(500).send('Erro ao buscar compras de produtos.');
    }
});

export default router;
