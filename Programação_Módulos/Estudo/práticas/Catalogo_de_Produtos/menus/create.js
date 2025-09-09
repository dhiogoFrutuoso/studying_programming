import { text, isCancel, outro } from "@clack/prompts";
import { selecting } from "./main.js";
import chalk from "chalk";

export const catalogo = [{
    id: 1,
    name: "Notebook",
    price: 5000,
    category: "Eletrônicos"
}];

export async function addProduct() {
    let id;
    for (let i = 1; i <= catalogo.length; i++) {
        id = i + 1;
    }
    const name = await text({
        message: "Nome do produto: "
    });
    if (isCancel(name)) {
        outro("Operação cancelada!");
        return;
    }
    const price = await text({
        message: "Preço do produto: "
    });
    if (isCancel(price)) {
        outro("Operação cancelada!");
        return;
    }
    const category = await text({
        message: "Categoria do produto: "
    });
    if (isCancel(category)) {
        outro("Operação cancelada!");
        return;
    }
    console.log(chalk.yellow.underline("\nProduto adicionado com sucesso!\n"));
    catalogo.push({id, name, price, category});

    setTimeout(() => {
        selecting();
    }, 500);
};