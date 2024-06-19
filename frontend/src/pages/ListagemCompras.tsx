// src/pages/ListagemCompras.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListagemCompras: React.FC = () => {
    const [compras, setCompras] = useState<any[]>([]);

    useEffect(() => {
        async function fetchCompras() {
            try {
                const responseProdutos = await axios.get('/api/compras/produtos');
                const responseServicos = await axios.get('/api/compras/servicos');
                
                const comprasProdutos = responseProdutos.data.map((compra: any) => ({
                    tipo: 'Produto',
                    nome: compra.produto.nome,
                    cliente: compra.cliente.nome,
                    data: new Date(compra.data_compra).toLocaleDateString(),
                }));

                const comprasServicos = responseServicos.data.map((compra: any) => ({
                    tipo: 'Serviço',
                    nome: compra.servico.nome,
                    cliente: compra.cliente.nome,
                    data: new Date(compra.data_servico).toLocaleDateString(),
                }));

                const todasCompras = [...comprasProdutos, ...comprasServicos];
                setCompras(todasCompras);
            } catch (error) {
                console.error('Erro ao buscar compras:', error);
            }
        }

        fetchCompras();
    }, []);

    return (
        <div className="container">
            <h2>Listagem de Compras</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Nome</th>
                        <th>Cliente</th>
                        <th>Data da Compra</th>
                    </tr>
                </thead>
                <tbody>
                    {compras.map((compra, index) => (
                        <tr key={index}>
                            <td>{compra.tipo}</td>
                            <td>{compra.nome}</td>
                            <td>{compra.cliente}</td>
                            <td>{compra.data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListagemCompras;
