"use strict";
// src/routes/clientes.routes.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_model_1 = require("../database/models/cliente.model");
const router = (0, express_1.Router)();
// Rota para cadastrar um novo cliente
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Recebido pedido de cadastro de cliente:', req.body);
    try {
        const cliente = yield cliente_model_1.Cliente.create(req.body);
        res.status(201).json(cliente);
    }
    catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
        res.status(500).json({ error: 'Erro ao cadastrar cliente' });
    }
}));
exports.default = router;
