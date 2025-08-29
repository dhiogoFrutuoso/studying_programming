import http from 'http'; // Importa o módulo HTTP
const sports = ['soccer', 'basketball', 'baseball', 'tennis', 'golf']; // Array de esportes

const server = http.createServer(async (request, response) => { // Cria o servidor HTTP
    const { url, statusCode, method } = request;

    const bodyPromise = new Promise((resolve, reject) => {
                let body

                request.on('data', data => {
                    body = JSON.parse(data);
                });

                request.on('end', data => {
                    resolve(body);
                })
            });

    if (url === '/') { // Escreve a resposta HTML para a rota principal
        response.write('<div><h1>damiao so de calcinha</h1> <p>ai safado</p></div>');
        response.end();
    } else if (url === '/api/sports') { // Retorna a array de esportes em formato JSON
        if (method === 'GET') { //Verifica se tem um esporte no array
        response.write(JSON.stringify(sports));
        response.end();
        return;
        };
    
        if (method === 'POST') { //Adiciona um esporte no array
            const body = await bodyPromise;

            const { name } = body;

            if (!sports.map(sport => sport.toLowerCase()).includes(name.toLowerCase())) {
                sports.push(name.toLowerCase());
            };

            response.write(name.toLowerCase());
            response.end();
            return
        };
    } else { // Se a rota não existir, retorna 404
        response.statusCode = 404;
        response.write('<h1>Page not found: error 404</h1>'); // Mensagem de erro
        response.end();
    }
});

server.listen(3000, 'localhost', () => { // Servidor ouvindo na porta 3000
    console.log('Server running at http://localhost:3000'); // Mensagem no console
});