//This:

// Funciona com alguma propriedade de dentro do objeto que ela esta
// Pode variar, (objeto, classe, função normal ou arrow function).
// É útil para acessar propriedades e métodos do próprio objeto ou instância atual.
// Permite maior flexibilidade e reutilização de código em módulos, objetos e classes.

class Person {
    name;
    age;
    gener;
    constructor(name, age, gener) {
        this.name = name;
        this.age = age;
        this.gener = gener;
    }
    print () {
        console.log(`Nome: ${ this.name }, Idade: ${ this.age }, Gênero: ${ this.gener }.`)
    }
}

const person = new Person("Dhiogo", 17, "Masculino");
person.print();



console.log(`\n===================================================================================================\n`)
//===================================================================================================

class Computer {
    Mark;
    RAM;
    videoCard;
    Processor;
    constructor(Mark, RAM, vídeoCard, Processor) {
        this.Mark = Mark;
        this.RAM = RAM;
        this.videoCard = vídeoCard;
        this.Processor = Processor;
    } 
    print () {
        const { Mark, RAM, videoCard, Processor } = this;
        return { Mark, RAM, videoCard, Processor }
    }
}

const Pc = new Computer("Acer", "16GB", "GTX1650", "RYZEN 7 4800H");
console.log(Pc.print());



console.log(`\n===================================================================================================\n`)
//===================================================================================================

const Person1 = {
    name: "Dhiogo",
    age: 17,
    gener: "Masc.",

    greet(){
        console.log(this.name, this.age, this.gener) //se não colocar o this, o programa não entende que deve 
        //puxar os valores do objeto, e não de dentro da função.
    }
}

Person1.greet()



console.log(`\n===================================================================================================\n`)
//===================================================================================================

//Prática do chatgpt, atualizando dados:

class Dates {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log("Dados: " + this.name + ", " + this.age);
    }
    update(newName, newAge) { //Redefininco this.name e this.age.
        this.name = newName;
        this.age = newAge;
    }
}

const person1 = new Dates("Dhiogo", 17);
person1.print();

person1.update("Débora", 16);
person1.print();