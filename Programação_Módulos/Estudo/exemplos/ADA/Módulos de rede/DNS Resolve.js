import dns, { Resolver } from 'node:dns';

const searchUrl = 'google.com'; //Aponta o DNS padrão que deve ser pesquisado

// dns.resolve4(urlPesquise, (err, addresses) => {
//     if (err) {
//         console.log('url não encontrada');
//         return
//     };
//
//     console.log(addresses)
// });

async function bootStrap() {
    console.time('pesquisando DNS por Url padrão')
    const addresses = await dns.promises.resolve4(searchUrl);
    console.timeEnd('pesquisando DNS por Url padrão')
    console.log(addresses); //Printa o ip do Url pesquisado

    const nameServers = await dns.promises.resolveNs(searchUrl);
    console.log(nameServers); //Printa o servidor de nome do Url pesquisado
    const ipNs = await dns.promises.resolve4(nameServers[1])
    const resolver = new dns.Resolver();
    resolver.setServers(ipNs);
    
    console.time('pesquisando url por DNS específico')
    resolver.resolve4(searchUrl, (error, addresses) => {
        if (error) {
            console.error('url não encontrada');
            return
        };  
        console.timeEnd('pesquisando url por DNS específico')
        console.log(addresses);
    });
};

bootStrap();