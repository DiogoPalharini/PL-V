// src/components/Login.tsx

import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            // Enviar dados de login para o backend
            const response = await axios.post('http://localhost:5000/api/login', formData);
            console.log('Login realizado:', response.data);

            // Limpar o formulário após o login (opcional)
            setFormData({
                email: '',
                senha: ''
            });

            
            window.location.href = '/produtos-servicos';
        } catch (error) {
            console.error('Erro ao realizar login:', error);
            // Exibir mensagem de erro para o usuário
            alert('Erro ao realizar login. Verifique suas credenciais.');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default Login;
