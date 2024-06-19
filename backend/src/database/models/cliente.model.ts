// src/database/models/cliente.model.ts

import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'clientes',
    timestamps: true, // Se desejado
})
export class Cliente extends Model<Cliente> {
    @Column({
        type: DataType.STRING(11),
        primaryKey: true,
        allowNull: false,
    })
    cpf!: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    nome!: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    email!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    senha!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    telefone?: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    endereco?: string;
}
