// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/produtos-servicos">
                    Minha Loja
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/produtos-servicos">
                                Produtos/Serviços
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cadastro-cliente">
                                Cadastro Cliente
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cadastro-produto">
                                Cadastro Produto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cadastro-servico">
                                Cadastro Serviço
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/listagem-compras">
                                Listagem de Compras
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
