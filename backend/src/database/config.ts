import { Sequelize } from 'sequelize-typescript';
import { Cliente } from './models/cliente.model';
import { Pet } from './models/pet.model';
import { Produto } from './models/produto.model';
import { Servico } from './models/servico.model';
import { CompraProduto } from './models/compra_produto.model';
import { CompraServico } from './models/compra_servico.model';


const sequelize = new Sequelize({
    database: 'petlovers',
    dialect: 'mysql',
    username: 'root',
    password: 'fatec',
    host: 'localhost',
    port: 3306,
    models: [Cliente, Pet, Produto, Servico, CompraProduto, CompraServico],
    logging: false,
});

export default sequelize;
