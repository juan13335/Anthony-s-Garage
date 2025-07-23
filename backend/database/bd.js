import { Sequelize } from 'sequelize';  


const sequelize = new Sequelize (
    {
        dialect: 'sqlite',
        storage: './datos/basedatos.db',
    }
)

export default sequelize; 