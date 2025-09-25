import { Sequelize } from "sequelize";

//MySQL database connection
    const sequelize = new Sequelize('posts', 'root', 'dhidhi.4321', {
    host: 'localhost',
    dialect: 'mysql'
    });

export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}; //Importando as funções.