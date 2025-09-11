class bag {
    static items = [];
    estojo
    notebook
    book
    constructor(estojo, notebook, book) {
        this.estojo = estojo;
        this.notebook = notebook;
        this.book = book;
        bag.items.push(this);
    }
}

const backpack = new bag("Estojo azul", "Caderno de matemàtica", "Livro de português");

console.log(backpack.book);

console.log(bag.items);


class Car {
    static cars = [];
    #car
    #color;
    #brand;
    #year;
    #price;
    constructor(car, color, brand, year, price) {
        this.#car = car;
        this.#color = color;
        this.#brand = brand;
        this.#year = year;
        this.#price = price;
        Car.cars.push(this);
    }
    getAll() {
        return `Carro: ${this.#car}, Cor: ${this.#color}, Marca: ${this.#brand}, Ano: ${this.#year}, Preço: ${this.#price}`
    }
    getCar() {
        return this.#car;
    }
    getColor() {
        return this.#color;
    }
    getBrand() {
        return this.#brand;
    }
    getYear() {
        return this.#year;
    }
    getPrice() {
        return this.#price;
    }
    setPrice(value) {
        return this.#price = value;
    }
};

const car1 = new Car("Hilux", "Branco", "Toyota", 2020, 250000);

console.log(car1.getAll()) //Pega todas as informações
car1.setPrice(260000) //Muda o preço do carro no objeto car1
console.log(car1.getPrice()) //Printa apenas o preço

console.log(car1.getCar()); //Printa todas as informações separadas
console.log(car1.getColor()); //Printa todas as informações separadas
console.log(car1.getBrand()); //Printa todas as informações separadas
console.log(car1.getYear()); //Printa todas as informações separadas