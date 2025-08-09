let current;
let times = 0;
const expected= 8;

while (current !== expected) {
    current = Math.floor(Math.random() * (50+1))
    console.log(`[${current}]`);
    times++;
}

console.log(`O número ${expected} foi encontrado após ${times} tentativas.`);
