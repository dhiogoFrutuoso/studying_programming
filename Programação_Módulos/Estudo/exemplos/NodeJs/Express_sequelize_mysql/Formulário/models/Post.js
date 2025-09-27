//Importa as funções sequelize e cria o Post com as propriedades definidas

import db from './db.js'

const Post = db.sequelize.define('post', {
    title: {
        type: db.Sequelize.STRING
    },
    content: {
        type: db.Sequelize.TEXT
    }
});

Post.sync({force: false}); //Já foi definido a tabela, false evita que a tabela seja sempre recriada quando o código for executado.
export default Post;