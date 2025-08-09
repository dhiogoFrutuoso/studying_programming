//Datas:

//const date = new Date(Year, Month(index), Day, Hours, Minute, Seconds);

const date = new Date()

console.log(date)

console.log(date.getDate()); //Pega o dia
console.log(date.getDay() + 1); //Pega o index do dia da semana, por isso soma mais um
console.log(date.getFullYear()); //Pega o ano
console.log(date.getHours()); //Pega a hora
console.log(date.getMinutes()); //Pega os minutos
console.log(date.getMonth() + 1); //Pega o index do mes, por isso soma mais um
console.log(date.getSeconds()); //Pega os segundos
console.log(date.getTime()); //Pega a data completa da variável



console.log(`\n=======================================================================================================\n`)
//==============================================================================================

//Setando uma data para uma tarefa

const date_1 = new Date();

//date.set(...): setando a data em uma variável, setHours, setSeconds e etc.

console.log(date.toString()) //Transformando a data em string para melhor compreenssão.

date.setHours(date.getHours() + 5) //Adicionando 5 horas em date

console.log(date.toString()) //Transformando a data em string para melhor compreenssão.
console.log(date.toDateString()) //Mostra a data de forma resumida.
console.log(date.toLocaleDateString()) //Mostra a data com barras.
console.log(date.toLocaleString()) //Mostra o horário da mesma forma do anteriro
console.log(date.toUTCString()) //Mostra a data pelo UTC.
console.log(date.toISOString())  //Para armazenar em algum lugar e utilizar novamente posteriormente
console.log(date.toTimeString()) //Mostra a hora



console.log(`\n=======================================================================================================\n`)
//=======================================================================================================

//Criando um armazenador de segundos da data atual

async function timer() {
        const timer = await setInterval(() => {
        const date_2 = new Date();
        console.log(date_2.getSeconds())
        if (date_2.getSeconds() === 60) {
            clearInterval(timer)
        }
    }, 1000);
};
//timer()



console.log(`\n=======================================================================================================\n`)
//=======================================================================================================

//Comparando datas:

const past = new Date(2024, 5, 17);
const present = new Date();
const future = new Date(2026, 11, 11);

console.log(past.toLocaleString());
console.log(present.toLocaleString());
console.log(future.toLocaleString());

if (future > present) {
    console.log("Já passou");
} else {
    console.log("Não passou")   
}



console.log(`\n=======================================================================================================\n`)
//=======================================================================================================

//Determinando uma data de entrega:

const date_3 = new Date();
const term = new Date(2025, 6, 28, 12);

console.log(`Data de entrega: ${date_3.toLocaleString()}.`);
console.log(`Prazo: ${term.toLocaleString()}.`);

if (date_3 > term) {
    console.log("Violou o prazo.");
} else {
    console.log("Entregou antes do prazo.")
}