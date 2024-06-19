import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Produto } from './produto.model';

@Table({
    tableName: 'compras_produtos',
})
export class CompraProduto extends Model {
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

    @ForeignKey(() => Produto)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    produto_id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    quantidade!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    data_compra!: Date;
}
