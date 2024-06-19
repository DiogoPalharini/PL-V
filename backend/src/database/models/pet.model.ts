import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Cliente } from './cliente.model';

@Table({
    tableName: 'pets',
})
export class Pet extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    nome!: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    especie!: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: true,
    })
    raca?: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    idade?: number;

    @ForeignKey(() => Cliente)
    @Column({
        type: DataType.STRING(11),
        allowNull: true,
    })
    cliente_cpf?: string;
}
