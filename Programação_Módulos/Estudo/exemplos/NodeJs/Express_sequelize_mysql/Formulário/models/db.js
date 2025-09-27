//Se conecta no bando de dados e exporta as funções 
//sequelize para fazer isso no arquivo do Post

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