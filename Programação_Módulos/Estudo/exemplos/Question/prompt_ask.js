import readline from 'readline';

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const promptPromise = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question(pergunta, (resposta) => resolve(resposta));
        }
        catch (error) {
            reject(error);
        }
    }),
    close: () => prompt.close()
}

async function askUser() {
    const numero = await promptPromise.question('Digite um número: ');
    console.log(`Você digitou: ${numero}`);

    const cor = await promptPromise.question('Digite sua cor favorita: ');
    console.log(`Sua cor favorita é: ${cor}`);
    promptPromise.close();
}

askUser();