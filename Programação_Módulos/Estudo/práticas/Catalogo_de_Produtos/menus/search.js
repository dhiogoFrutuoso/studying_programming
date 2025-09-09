import { selecting } from "./main.js";
import { select, text, isCancel, outro } from "@clack/prompts";
import chalk from "chalk";
import { catalogo } from "./create.js";

export async function searchProduct() {
    console.log(chalk.bgGreen("🔍  BUSCAR PRODUTO"))
    const search = await select({
        message: "Digite a forma que você deseja buscar o produto: ",
        options: [
            {value: "id", label: "Buscar por ID"},
            {value: "name", label: "Buscar por Nome"},
            {value: "price", label: "Buscar por Preço"},
            {value: "category", label: "Buscar por Categoria"},
            {value: "exit", label: "Voltar ao menu"}
        ]
    });
    if (isCancel(search)) {
        outro("Operação cancelada!");
        return;
    }

    async function searchId() {
        const id = await text({
            message: "Digite o ID do produto: "
        });
        if (isCancel(id)) {
            outro("Operação cancelada!");
            return;
        }
        let searched = 0;
        for (let produto of catalogo) {
            if (id == produto.id) {
                searched += 1;
                console.log(chalk.green.underline("ID:"), produto.id);
                console.log(chalk.blue.underline("Produto:"), produto.name);
                console.log(chalk.yellow.underline("Preço:"), produto.price);
                console.log(chalk.red.underline("Categoria:"), produto.category, "\n");
            }
        }
        if (searched < 1) {
            console.log(chalk.bgRed("Produto não encontrado!"));
        }
    }

    async function searchName() {
        const name = await text({
            message: "Digite o Nome do produto: "
        });
        if (isCancel(name)) {
            outro("Operação cancelada!");
            return;
        }
        let searched = 0;
        for (let produto of catalogo) {
            if (name == produto.name) {
                searched += 1;
                console.log(chalk.green.underline("ID:"), produto.id);
                console.log(chalk.blue.underline("Produto:"), produto.name);
                console.log(chalk.yellow.underline("Preço:"), produto.price);
                console.log(chalk.red.underline("Categoria:"), produto.category, "\n");
            }
        }
        if (searched < 1) {
            console.log(chalk.bgRed("Produto não encontrado!"));
        }
    }

    async function searchPrice() {
        const price = await text({
            message: "Digite o Preço do produto: "
        });
        if (isCancel(price)) {
            outro("Operação cancelada!");
            return;
        }
        let searched = 0;
        for (let produto of catalogo) {
            if (price >= produto.price) {
                searched += 1;
                console.log(chalk.green.underline("ID:"), produto.id);
                console.log(chalk.blue.underline("Produto:"), produto.name);
                console.log(chalk.yellow.underline("Preço:"), produto.price);
                console.log(chalk.red.underline("Categoria:"), produto.category, "\n");
            }
        }
        if (searched < 1) {
            console.log(chalk.bgRed("Produto não encontrado!"));
        }
    }

    async function searchCategory() {
        const category = await text({
            message: "Digite a Categoria do produto: "
        });
        if (isCancel(category)) {
            outro("Operação cancelada!");
            return;
        }
        let searched = 0;
        for (let produto of catalogo) {
            if (category == produto.category) {
                searched += 1;
                console.log(chalk.green.underline("ID:"), produto.id);
                console.log(chalk.blue.underline("Produto:"), produto.name);
                console.log(chalk.yellow.underline("Preço:"), produto.price);
                console.log(chalk.red.underline("Categoria:"), produto.category, "\n");
            }
        }
        if (searched < 1) {
            console.log(chalk.bgRed("Produto não encontrado!"));
        }
    }

    switch (search) {
        case "id":
            await searchId();
            return;
        case "name":
            await searchName();
            return;
        case "price":
            await searchPrice();
            return;
        case "category":
            await searchCategory();
            return;
        default:
            await selecting();
    }
}