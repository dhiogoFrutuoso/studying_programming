import express from 'express';
import bodyParser from 'body-parser';
import { engine } from "express-handlebars"; //template engine

const app = express();

//Config
    //Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

//BodyParser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

//Routes
    app.get('/cad', function(req, res) {
        res.render('form')
    });

    app.post('/add', function(req, res) { //para enviar dados pelo post deve-se usar o app.post!
        res.send(`Title: ${req.body.content}, Content: ${req.body.title}`);
    }); //Pega o conteúdo enviado dos names content e title em form.


app.listen(8081, function() {
    console.log('Server running at http://localhost:8081/cad');
}); //Tem sempre que ser a última linha do código.
