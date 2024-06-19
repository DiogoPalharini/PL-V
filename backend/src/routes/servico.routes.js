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
const servico_model_1 = require("../database/models/servico.model"); // Verifique o caminho correto do modelo
const router = express_1.default.Router();
// Rota para listar todos os serviços
router.get('/servicos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const servicos = yield servico_model_1.Servico.findAll();
        res.json(servicos);
    }
    catch (error) {
        console.error('Erro ao buscar serviços:', error);
        res.status(500).send('Erro ao buscar serviços.');
    }
}));
// Rota para comprar um serviço específico
router.post('/comprar/servicos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const servico = yield servico_model_1.Servico.findByPk(id);
        if (!servico) {
            return res.status(404).send('Serviço não encontrado.');
        }
        // Lógica para processar a compra do serviço
        // Aqui você pode implementar a lógica específica para o serviço
        res.json(servico);
    }
    catch (error) {
        console.error('Erro ao comprar serviço:', error);
        res.status(500).send('Erro ao comprar serviço.');
    }
}));
// Rota para cadastrar um serviço
router.post('/servicos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const novoServico = yield servico_model_1.Servico.create(req.body);
        res.status(201).json(novoServico);
    }
    catch (error) {
        console.error('Erro ao cadastrar serviço:', error);
        res.status(500).send('Erro ao cadastrar serviço.');
    }
}));
exports.default = router;
