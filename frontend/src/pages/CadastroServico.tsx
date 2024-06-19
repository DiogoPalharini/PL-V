import React, { useState } from 'react';
import axios from 'axios';

const CadastroServico: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        preco: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/servicos', formData);
            console.log('Serviço cadastrado:', response.data);
            setFormData({
                nome: '',
                descricao: '',
                preco: '',
            });
            alert('Serviço cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar serviço:', error);
            alert('Erro ao cadastrar serviço. Por favor, tente novamente.');
        }
    };

    return (
        <div className="container">
            <h2>Cadastro de Serviço</h2>
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
                <button type="submit" className="btn btn-primary">Cadastrar Serviço</button>
            </form>
        </div>
    );
};

export default CadastroServico;
