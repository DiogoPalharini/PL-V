// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroCliente from './pages/CadastroCliente';
import Login from './pages/login';
import ListagemProdutosServicos from './pages/ListagemProdutosServicos';
import CadastroProduto from './pages/CadastroProduto';
import CadastroServico from './pages/CadastroServico';
import ListagemCompras from './pages/ListagemCompras'; // Importe o componente ListagemCompras
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/cadastro-cliente" element={<CadastroCliente />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/produtos-servicos" element={<ListagemProdutosServicos />} />
                    <Route path="/cadastro-produto" element={<CadastroProduto />} />
                    <Route path="/cadastro-servico" element={<CadastroServico />} />
                    <Route path="/listagem-compras" element={<ListagemCompras />} /> {/* Rota para ListagemCompras */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
