import { DataTypes } from "sequelize";
import sequelize from "../database/bd.js";

const CategoriasAtributos = sequelize.define('Categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, 
{
    timestamps: true,
    createdAt: 'fechaCreacion',
    updatedAt: 'fechaActualizacion',
})

export default CategoriasAtributos;