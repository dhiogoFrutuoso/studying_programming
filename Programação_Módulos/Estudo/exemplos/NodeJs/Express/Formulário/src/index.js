import express from 'express';
import { engine } from "express-handlebars"; //template engine
import Sequelize from "sequelize";

const app = express();

//Config
    //Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

//MySQL database connection
    const sequelize = new Sequelize('teste', 'root', 'dhidhi.4321', {
    host: 'localhost',
    dialect: 'mysql'
    });

//Routes
    app.get('/cad', function(req, res) {
        res.render('form')
    });

app.listen(8081, function() {
    console.log('Server running at http://localhost:8081/cad');
}); //Tem sempre que ser a última linha do código.
