import express from 'express';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/html/index1.html');
});

app.get('/world', function(req, res) {
    res.sendFile(__dirname + '/html/index2.html');
})

app.get('/about', function(req, res) {
    res.send('About page');
})

app.get('/ola/:nome/:cargo', function (req, res) {
    res.send(`Ola ${req.params.nome} seu cargo é ${req.params.cargo}, seja bem-vindo!`);
})

app.listen(3000, function() {
    console.log('Server running at http://localhost:3000/');
}); //Tem sempre que ser a última linha do código.
