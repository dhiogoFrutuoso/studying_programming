//objetos:

const myPc = {
    Name: "Acer nitro 5",
    VideoCard: "Nvidia GTX 1650",
    Process: "AMD Ryzen 7 4800H",
    Color: { //Lista de objetos dentro de um objeto
        Primary: "Black",
        Secondary: "Red"
    },
    RamMemory: [ //Array de objetos
        {
            Name: "HyperX Fury",
            Capacity: "16GB"
        },
        {
            Name: "HyperX Fury",
            Capacity: "16GB"
        }
    ],
    process() { //função/método dentro de um objeto
        start = ligando
    }
}

myPc.Status = "On";//Adicionar uma propriedade ao objeto

console.log("Informações do meu PC: ");
console.log("Modelo: ", myPc.Name);
console.log("Placa de vídeo: ", myPc.VideoCard);
console.log("Processador: ", myPc.Process);
console.log("Cor: ", myPc.Color.Primary, " e ", myPc.Color.Secondary);
for (const ram in myPc.RamMemory) {
    console.log("Memória RAM: ", myPc.RamMemory[ram].Name, " - ", myPc.RamMemory[ram].Capacity);
};
console.log("Memória RAM: ", myPc.RamMemory[1].Name, " - ", myPc.RamMemory[1].Capacity)//puxando um valor de uma array de um objeto




