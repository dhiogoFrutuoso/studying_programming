import { isCancel, outro, select } from "@clack/prompts";
import { catalogo } from "./create.js";
import { selecting } from "../main.js";
import chalk from "chalk";

export async function listProducts() {
    console.log("\n📋  LISTA DE PRODUTOS\n");
    for (let produto of catalogo) {
        console.log(chalk.green.underline("ID:"), produto.id);
        console.log(chalk.blue.underline("Produto:"), produto.name);
        console.log(chalk.yellow.underline("Preço:"), produto.price);
        console.log(chalk.red.underline("Categoria:"), produto.category);
    };

    const backToMenu = await select({
        message: "Voltar ao menu?",
        options: [
            { value: "yes", label: "Sim" },
            { value: "no", label: "Não (Encerrar programa)" }
        ]
    });
    if (isCancel(backToMenu)) {
        outro("Operação cancelada!");
        return;
    }
    switch (backToMenu) {
        case "yes": {
            selecting();
            return;
        }
        default: {
            outro("Fim do programa!");
        }
    }
};