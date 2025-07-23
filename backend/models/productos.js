import { DataTypes } from "sequelize";
import sequelize from "../database/bd.js";

const ProductosAtributos = sequelize.define('Productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,     
    },
    nombre: {
        type: DataTypes.STRING,

    },
    proveedor: {
        type: DataTypes.STRING,

    },
    precio: {
        type: DataTypes.INTEGER,
        allownull : false,
        validate: {
            isNumeric: true,
            min: 0
        }
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categorias',
            key: 'id'
        }
    },
}, 
{
    timestamps: true,
    createdAt: 'fechaCreacion',
    updatedAt: 'fechaActualizacion',
})


export default ProductosAtributos;