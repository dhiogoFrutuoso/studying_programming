import querystring from 'node:querystring';
import url from 'node:url';

const baseUrl = 'https://siteviagem.com.br'; //Cria uma url base

const uri = querystring.stringify({ //Cria um objeto com o querystring
    destino: 'RJ',
    periodo: 'Verao',
    horario: 'noite',
    ano: '2025'
});

const fullUrl = `${baseUrl}/${uri}`; //Junta a url base com o uri, fazendo o url completo

console.log(fullUrl); 

const parsedUrl = querystring.parse(uri); //Faz o processo inverso, transformando o uri em um objeto novamente
console.log(uri); //Printa a uri (destino=RJ&periodo=Verao&horario=noite&ano=2025)
console.log(parsedUrl); //Printa a mesma uri, mas em formato de objeto
console.log(parsedUrl.destino); //Printa o valor do destino (RJ)
console.log('fullUrl: ', url.parse(fullUrl)); //Printa a url completa em formato de objeto

const uri2 = querystring.escape('estado= são paulo&cidade= são mateus'); //cria uma uri escapada, escrevendo em formato de url
console.log(uri2); 
const unescapedUri2 = querystring.unescape(uri2); //Faz o processo inverso, transformando a uri escapada em uma uri normal
console.log(unescapedUri2);