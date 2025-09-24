import Sequelize, { INTEGER } from 'sequelize';

const sequelize = new Sequelize('teste', 'root', 'dhidhi.4321', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
     console.log('Conectado com sucesso!');
}).catch(function(erro) {
    console.log('Falha ao se conectar: ' + erro);
}) //Conecta ao banco de dados

const studentsTable = sequelize.define('students', {
    name: {
        type: Sequelize.STRING //Têm limite de tamanho (255 caracteres)
    },
    favoriteBook: {
        type: Sequelize.TEXT //Não têm limite de tamanho
    },
    age: {
        type: INTEGER
    },
    grade: {
        type: INTEGER
    }
}); //Define como será a tabela

// studentsTable.sync({force: true}); //Cria a tabela no banco de dados (force: true) recria a tabela toda vez que o código é executado, apagando os dados anteriores
studentsTable.create({
    name: 'Dhiogo',
    favoriteBook: 'Harry Potter',
    age: 17,
    grade: 3
}); //Cria um registro para colocar na tabela

const usersTable = sequelize.define('Users', {
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}); //Outra tabela

// usersTable.sync({force: true}); //Cria a tabela
usersTable.create({
    username: 'Dhiogo',
    email: 'dhiogofrutuoso294@gmail.com',
    password: '1234'
}); //Cria um registro