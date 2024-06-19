import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Servico } from './servico.model';

@Table({
    tableName: 'compras_servicos',
})
export class CompraServico extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING(11),
        allowNull: true,
    })
    cliente_cpf?: string;

    @ForeignKey(() => Servico)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    servico_id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    pet_id?: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    data_servico!: Date;
}
