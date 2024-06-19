import express, { Request, Response } from 'express';
import { Produto } from '../database/models/produto.model'; // Verifique o caminho correto do modelo

const router = express.Router();

// Rota para listar todos os produtos
router.get('/produtos', async (req: Request, res: Response) => {
    try {
        const produtos = await Produto.findAll();
        res.json(produtos);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).send('Erro ao buscar produtos.');
    }
});

// Rota para comprar um produto específico
router.post('/comprar/produtos/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        // Verificar se o produto existe
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).send('Produto não encontrado.');
        }


        res.json(produto);
    } catch (error) {
        console.error('Erro ao comprar produto:', error);
        res.status(500).send('Erro ao comprar produto.');
    }
});

// Rota para cadastrar um produto
router.post('/produtos', async (req: Request, res: Response) => {
    try {
        const novoProduto = await Produto.create(req.body);
        res.status(201).json(novoProduto);
    } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        res.status(500).send('Erro ao cadastrar produto.');
    }
});

export default router;
