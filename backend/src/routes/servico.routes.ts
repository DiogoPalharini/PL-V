import express, { Request, Response } from 'express';
import { Servico } from '../database/models/servico.model'; // Verifique o caminho correto do modelo

const router = express.Router();

// Rota para listar todos os serviços
router.get('/servicos', async (req: Request, res: Response) => {
    try {
        const servicos = await Servico.findAll();
        res.json(servicos);
    } catch (error) {
        console.error('Erro ao buscar serviços:', error);
        res.status(500).send('Erro ao buscar serviços.');
    }
});

// Rota para comprar um serviço específico
router.post('/comprar/servicos/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const servico = await Servico.findByPk(id);
        if (!servico) {
            return res.status(404).send('Serviço não encontrado.');
        }

        // Lógica para processar a compra do serviço
        // Aqui você pode implementar a lógica específica para o serviço
        
        res.json(servico);
    } catch (error) {
        console.error('Erro ao comprar serviço:', error);
        res.status(500).send('Erro ao comprar serviço.');
    }
});

// Rota para cadastrar um serviço
router.post('/servicos', async (req: Request, res: Response) => {
    try {
        const novoServico = await Servico.create(req.body);
        res.status(201).json(novoServico);
    } catch (error) {
        console.error('Erro ao cadastrar serviço:', error);
        res.status(500).send('Erro ao cadastrar serviço.');
    }
});

export default router;
