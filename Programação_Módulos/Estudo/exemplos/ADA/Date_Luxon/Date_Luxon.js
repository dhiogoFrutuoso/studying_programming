import { DateTime, Interval } from 'luxon';

const now = DateTime.now();
console.log(now.month); //Pega o mês atual
console.log(new Date().toLocaleString('en-US')); //Em EUA
console.log(new Date().toLocaleString()); //Normal

const AniversaryDate = DateTime.fromFormat('17/06/2008', 'dd/MM/yyyy'); //Faz uma data com o formato do luxon
console.log(AniversaryDate); //Printa o aniversário
console.log(AniversaryDate.day); //Printa o dia do aniversário
console.log(AniversaryDate.month); //O mês do aniversário

const idade = Interval.fromDateTimes(AniversaryDate, now).length('years'); //Faz a diferença entre duas datas em anos
console.log(Math.floor(idade)); //Printa a idade arredondada para baixo