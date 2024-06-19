-- Banco de dados PetLovers
CREATE DATABASE PetLovers;
USE PetLovers;

-- Tabela de Clientes
CREATE TABLE clientes (
    cpf VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(15),
    endereco VARCHAR(255),
    INDEX(email)
);

-- Tabela de Pets
CREATE TABLE pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    raca VARCHAR(50),
    idade INT,
    cliente_cpf VARCHAR(11),
    FOREIGN KEY (cliente_cpf) REFERENCES clientes(cpf) ON DELETE CASCADE,
    INDEX(cliente_cpf)
);

-- Tabela de Produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL,
    INDEX(nome)
);

-- Tabela de Serviços
CREATE TABLE servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    INDEX(nome)
);

-- Tabela de Compras de Produtos
CREATE TABLE compras_produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_cpf VARCHAR(11),
    produto_id INT,
    quantidade INT NOT NULL,
    data_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_cpf) REFERENCES clientes(cpf) ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id),
    INDEX(cliente_cpf),
    INDEX(produto_id)
);

-- Tabela de Compras de Serviços
CREATE TABLE compras_servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_cpf VARCHAR(11),
    servico_id INT,
    pet_id INT,
    data_servico TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_cpf) REFERENCES clientes(cpf) ON DELETE CASCADE,
    FOREIGN KEY (servico_id) REFERENCES servicos(id),
    FOREIGN KEY (pet_id) REFERENCES pets(id),
    INDEX(cliente_cpf),
    INDEX(servico_id),
    INDEX(pet_id)
);

-- Tabela de Funcionários
CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE,
    senha VARCHAR(255) NOT NULL,
    INDEX(cpf)
);