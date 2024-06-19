import React, { useState } from 'react';
import axios from 'axios';

const CadastroCliente: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cpf: '',
        senha: '' // Incluir o campo senha no estado inicial
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            // Enviar dados do cliente para o backend
            const response = await axios.post('http://localhost:5000/api/clientes', formData);
            console.log('Cliente cadastrado:', response.data);
            // Limpar o formulário após o cadastro
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                endereco: '',
                cpf: '',
                senha: '' // Limpar o campo senha após o cadastro
            });
            // Exibir mensagem de sucesso ou redirecionar o usuário
            alert('Cliente cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            // Exibir mensagem de erro para o usuário
            alert('Erro ao cadastrar cliente. Por favor, tente novamente.');
        }
    };

    return (
        <div className="container">
            <h2>Cadastro de Cliente</h2>
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
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="endereco" className="form-label">Endereço</label>
                    <input
                        type="text"
                        className="form-control"
                        id="endereco"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpf" className="form-label">CPF</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cpf"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        id="senha"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default CadastroCliente;
