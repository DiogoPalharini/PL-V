// src/models/produto.model.ts

import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'produtos',
})
export class Produto extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    nome!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    descricao?: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    preco!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    estoque!: number;
}
