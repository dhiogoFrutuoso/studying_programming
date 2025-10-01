//Criando uma database (teste), depois criando uma model para 
//as collections e definindo uma collection com a model.

import mongoose from 'mongoose'

//Se conecta em uma database do mongo com o nome teste, caso não existir, ela é criada.
mongoose.Promise  = global.Promise; //Usado para evitar erros!
mongoose.connect("mongodb://localhost/teste", {
    useNewUrlParser: true //Usado para evitar erros!
}).then(function() {
    console.log("Connected succesful")
}).catch(function(error) {
    console.log("ERROR: " + error)
});


//Model
//Types: String | Object | Number | Date

//Cria uma model em JSON com os campos name, age e email para o user.
const userSchema = mongoose.Schema({

    name: {
        type: String,
        require: true //Obriga que o campo name seja preenchido.
    },
    age: {
        type: Number,
        require: true //Obriga que o campo age seja preenchido.
    },
    email: {
        type: String,
        require: true //Obriga que o campo email seja preenchido.
    },
    country: {
        type: String,
        require: true
    }

});

mongoose.model('users', userSchema); //Cria a collection definitivamente com o nome users.

//Cria uma collection com os campos em formato de objeto para o JSON. O user é criado pelo .save()
const User = mongoose.model('users')

new User({
    name: "Débora",
    age: 15,
    email: "deboraricarte67@gmail.com",
    country: "Brazil"
}).save().then(() => {
    console.log("Collection created succesful")
}).catch(error => {
    console.log("Collection created error: " + error)
});