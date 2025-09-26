import express from 'express';
import bodyParser from 'body-parser';
import { engine } from "express-handlebars"; //template engine
import Post from '../models/Post.js'

const app = express();

//Config
    //Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

//BodyParser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

//Routes
    app.get('/', function(req, res) {
        Post.findAll().then(function(posts) {
            res.render('home', {posts: posts}) //Renderiza o arquivo home.handlebars
        })
    });

    app.get('/cad', function(req, res) {
        res.render('form') //Renderiza o arquivo form.handlebars
    });

    app.post('/add', function(req, res) { //para enviar dados pelo post deve-se usar o app.post!
        
        Post.create({ //Cria o Post
            title: req.body.title,
            content: req.body.content
        }).then(function() {
            res.redirect('/') //Redireciona para a rota '/'
        }).catch(function(erro) {
            res.send(`${erro}`) //Printa o erro
        });
        // res.send(`Title: ${req.body.content}, Content: ${req.body.title}`); Printa content e title na web
    }); //Pega o conteúdo enviado dos names content e title em form.


app.listen(8081, function() {
    console.log('Server running at http://localhost:8081/cad');
}); //Tem sempre que ser a última linha do código.
