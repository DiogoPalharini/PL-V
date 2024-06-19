import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'funcionarios',
})
export class Funcionario extends Model {
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
        type: DataType.STRING(11),
        allowNull: false,
        unique: true,
    })
    cpf!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    senha!: string;
}
