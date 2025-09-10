const bag = {
    item1: "Shield",
    item2: "Helmet"
}

function spread_rest (bag, newbag) {
    return { ...bag, ...newbag }; //Pega um objeto já existente ou cria um(...bag)
}

const newbag = spread_rest( bag, {
    item1: "Potion",
    item2: "Sword"
});

console.log(bag);

const list = [1, 2, 3, 4, 5];
const [first, second, ...rest] = list;

console.log(first, ...rest)

const list_2 = [5, 6, 7, 8, 9, 10]; //repete o cinco
const newlist = [...list, ...list_2];

console.log(newlist);

