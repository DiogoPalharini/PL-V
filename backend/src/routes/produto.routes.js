"use strict";
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
const produto_model_1 = require("../database/models/produto.model"); // Verifique o caminho correto do modelo
const router = express_1.default.Router();
// Rota para listar todos os produtos
router.get('/produtos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produtos = yield produto_model_1.Produto.findAll();
        res.json(produtos);
    }
    catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).send('Erro ao buscar produtos.');
    }
}));
// Rota para comprar um produto específico
router.post('/comprar/produtos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // Verificar se o produto existe
        const produto = yield produto_model_1.Produto.findByPk(id);
        if (!produto) {
            return res.status(404).send('Produto não encontrado.');
        }
        res.json(produto);
    }
    catch (error) {
        console.error('Erro ao comprar produto:', error);
        res.status(500).send('Erro ao comprar produto.');
    }
}));
// Rota para cadastrar um produto
router.post('/produtos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const novoProduto = yield produto_model_1.Produto.create(req.body);
        res.status(201).json(novoProduto);
    }
    catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        res.status(500).send('Erro ao cadastrar produto.');
    }
}));
exports.default = router;
