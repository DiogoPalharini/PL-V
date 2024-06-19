"use strict";
// src/routes/compraServico.routes.ts
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
const compra_servico_model_1 = require("../database/models/compra_servico.model");
const cliente_model_1 = require("../database/models/cliente.model"); // Se necessário, importe o modelo de Cliente
const servico_model_1 = require("../database/models/servico.model"); // Importe o modelo de Servico
const pet_model_1 = require("../database/models/pet.model"); // Se necessário, importe o modelo de Pet
const router = express_1.default.Router();
// Rota para listar todas as compras de serviços
router.get('/compras/servicos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comprasServicos = yield compra_servico_model_1.CompraServico.findAll({
            include: [
                { model: cliente_model_1.Cliente, attributes: ['cpf', 'nome'] }, // Se desejar incluir informações do cliente
                { model: servico_model_1.Servico, attributes: ['id', 'nome', 'preco'] },
                { model: pet_model_1.Pet, attributes: ['id', 'nome'] } // Se desejar incluir informações do pet
            ]
        });
        res.json(comprasServicos);
    }
    catch (error) {
        console.error('Erro ao buscar compras de serviços:', error);
        res.status(500).send('Erro ao buscar compras de serviços.');
    }
}));
exports.default = router;
