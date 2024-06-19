// src/index.ts

import express from 'express';
import cors from 'cors';
import sequelize from './database/config';
import clienteRoutes from './routes/clientes.routes';
import loginRoute from './routes/login.route';
import produtosRoutes from './routes/produto.routes'; // Importe as rotas de produtos
import servicosRoutes from './routes/servico.routes'; // Importe as rotas de serviços
import compraProdutoRoutes from './routes/compraProduto.routes'; // Importe as rotas de compras de produtos
import compraServicoRoutes from './routes/compraServico.routes'; // Importe as rotas de compras de serviços

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Teste de conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conexão bem-sucedida com o banco de dados.');
    })
    .catch((err) => {
        console.error('Erro ao conectar-se ao banco de dados:', err);
        process.exit(1); // Encerra o processo Node em caso de erro de conexão
    });

// Sincronização dos modelos com o banco de dados
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados.');

        // Rotas
        app.use('/api/clientes', clienteRoutes);
        app.use('/api/login', loginRoute);
        app.use('/api', produtosRoutes); // Rota base para produtos
        app.use('/api', servicosRoutes); // Rota base para serviços
        app.use('/api', compraProdutoRoutes); // Rota para compras de produtos
        app.use('/api', compraServicoRoutes); // Rota para compras de serviços

        // Inicia o servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erro ao sincronizar modelos com o banco de dados:', err);
        process.exit(1); // Encerra o processo Node em caso de erro na sincronização
    });
