// src/components/ListagemProdutosServicos.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListagemProdutosServicos: React.FC = () => {
    const [produtos, setProdutos] = useState<any[]>([]);
    const [servicos, setServicos] = useState<any[]>([]);

    useEffect(() => {
        fetchProdutos();
        fetchServicos();
    }, []);

    const fetchProdutos = () => {
        axios.get('http://localhost:5000/api/produtos')
            .then(res => setProdutos(res.data))
            .catch(err => console.error('Erro ao buscar produtos:', err));
    };

    const fetchServicos = () => {
        axios.get('http://localhost:5000/api/servicos')
            .then(res => setServicos(res.data))
            .catch(err => console.error('Erro ao buscar serviços:', err));
    };

    const handleComprarProduto = (produtoId: number) => {
        axios.post(`http://localhost:5000/api/comprar/produtos/${produtoId}`)
            .then(res => {
                console.log('Produto comprado:', res.data);
                fetchProdutos(); // Atualiza a lista de produtos após a compra
            })
            .catch(err => console.error('Erro ao comprar produto:', err));
    };

    const handleComprarServico = (servicoId: number) => {
        axios.post(`http://localhost:5000/api/comprar/servicos/${servicoId}`)
            .then(res => {
                console.log('Serviço comprado:', res.data);
                fetchServicos(); // Atualiza a lista de serviços após a compra
            })
            .catch(err => console.error('Erro ao comprar serviço:', err));
    };

    return (
        <div className="container">
            <h2>Produtos</h2>
            <div className="row">
                {produtos.map((produto: any) => (
                    <div className="col-md-4" key={produto.id}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{produto.nome}</h5>
                                <p className="card-text">{produto.descricao}</p>
                                <p className="card-text">R$ {produto.preco}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleComprarProduto(produto.id)}
                                >
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Serviços</h2>
            <div className="row">
                {servicos.map((servico: any) => (
                    <div className="col-md-4" key={servico.id}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{servico.nome}</h5>
                                <p className="card-text">{servico.descricao}</p>
                                <p className="card-text">R$ {servico.preco}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleComprarServico(servico.id)}
                                >
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListagemProdutosServicos;
