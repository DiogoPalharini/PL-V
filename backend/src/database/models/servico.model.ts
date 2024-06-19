import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'servicos',
})
export class Servico extends Model {
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
}
