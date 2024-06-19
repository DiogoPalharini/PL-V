// src/components/CadastroProduto.tsx

import React, { useState } from 'react';
import axios from 'axios';

const CadastroProduto: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        preco: '',
        estoque: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/produtos', formData);
            console.log('Produto cadastrado:', response.data);
            // Limpar o formulário após o cadastro (opcional)
            setFormData({
                nome: '',
                descricao: '',
                preco: '',
                estoque: '',
            });
            alert('Produto cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            alert('Erro ao cadastrar produto. Por favor, tente novamente.');
        }
    };

    return (
        <div className="container">
            <h2>Cadastro de Produto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <textarea
                        className="form-control"
                        id="descricao"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="preco" className="form-label">Preço</label>
                    <input
                        type="text"
                        className="form-control"
                        id="preco"
                        name="preco"
                        value={formData.preco}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="estoque" className="form-label">Estoque</label>
                    <input
                        type="number"
                        className="form-control"
                        id="estoque"
                        name="estoque"
                        value={formData.estoque}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
            </form>
        </div>
    );
};

export default CadastroProduto;
