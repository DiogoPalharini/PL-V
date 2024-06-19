"use strict";
// src/routes/compraProduto.routes.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compra_produto_model_1 = require("../database/models/compra_produto.model");
const cliente_model_1 = require("../database/models/cliente.model"); // Se necessário, importe o modelo de Cliente
const produto_model_1 = require("../database/models/produto.model"); // Importe o modelo de Produto
const router = express_1.default.Router();
// Rota para listar todas as compras de produtos
router.get('/compras/produtos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comprasProdutos = yield compra_produto_model_1.CompraProduto.findAll({
            include: [
                { model: cliente_model_1.Cliente, attributes: ['cpf', 'nome'] }, // Se desejar incluir informações do cliente
                { model: produto_model_1.Produto, attributes: ['id', 'nome', 'preco'] }
            ]
        });
        res.json(comprasProdutos);
    }
    catch (error) {
        console.error('Erro ao buscar compras de produtos:', error);
        res.status(500).send('Erro ao buscar compras de produtos.');
    }
}));
exports.default = router;
