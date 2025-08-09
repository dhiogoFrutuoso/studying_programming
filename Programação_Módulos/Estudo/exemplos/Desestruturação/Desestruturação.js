//DESESTRUTURAÇÃO

function main() {
    //VARIÁVEIS:

    //VARIÁVEL DUPLICADA PARA EXEMPLO DE DESESTRUTURAÇÃO (MAIS PARA FRENTE):

    const nickname1 = "Rickizx";


    //OBJETO E ARRAY PARA EXEMPLO DE DESESTRUTURAÇÃO:

    const player = {
        nickname: "Rickizx",
        level : 10,
        health: 100,
        alive: true,
        nickname1: "Rickizx",
        potions: [
            {Força: 10, Raridade: "Comum"},
            {Velocidade: 20, Raridade: "Raro"},
        ]
    }

    const colors = ["red", "blue", "green", "yellow"];


    //DESESTRUTURAÇÃO:

    const { nickname, level, health, alive } = player; // Extraindo propriedades do objeto player
    const [ firstColor, secondColor, thirdColor, fourthColor ] = colors; // Extraindo valores do array colors
            //Chamando cada propriedade da array através de sua posição!
    console.log(nickname, level, health, alive);
    console.log(firstColor, secondColor, thirdColor, fourthColor);


    //Existindo uma variável com o mesmo nome da propriedade, não é necessário usar o nome do objeto:
    
    const { nickname1: nick1 } = player; // Renomeando a propriedade nickname1 de dentro do objeto para nick1!!
    console.log(nickname, nick1); 
            //Primeira é o nickname variável, segundo é a variável do objeto!


    //DESESTRUTURAÇÃO DE ARRAY, PUXANDO PROPRIEDADES DO OBJETO DENTRO DO ARRAY:

    const [ { Força, Raridade }, { Velocidade, Raridade: Raridade_2 } ] = player.potions; // Extraindo objetos do array potions
    console.log(Força, Raridade, Velocidade, Raridade_2);
            //Primeira é a força e raridade do primeiro objeto!
            //Segunda é a força e raridade do segundo objeto renomeados!

    //DESESTRUTURANDO TUDO DE UMA VEZ:

    const { potions: [ , { Velocidade: Velocidade_1, Raridade: Raridade_1 }]}  = player;
    console.log(Velocidade_1, Raridade_1);
    //Puxando uma variável desde o inicio do objeto principal!

}
main();