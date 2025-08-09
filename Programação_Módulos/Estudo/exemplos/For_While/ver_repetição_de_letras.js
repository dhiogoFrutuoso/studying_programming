const text = "Hello, World!";
const letter = "l";
let times = 0;

for (const char of text.toLowerCase()) {
    if (char === letter) {
        times++;
    }
}
console.log(times);