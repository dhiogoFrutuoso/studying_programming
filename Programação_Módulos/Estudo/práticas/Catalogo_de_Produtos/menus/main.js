import { isCancel, outro, select } from "@clack/prompts";
import { addProduct } from "./create.js";
import { listProducts } from "./list.js";
import { searchProduct } from "./search.js";

export async function selecting() {
    const option = await select({
        message: "Escolha oque deseja fazer: ",
        options: [
            {value: "add", label: "Adicionar novo produto"},
            {value: "list", label: "Listar produtos"},
            {value: "search", label: "Buscar produto"},
            {value: "exit", label: "Sair"}
        ]
    });

    if (isCancel(option)) return;

    switch (option) {
        case "add": {
            addProduct();
            return
        }
        case "list": {
            listProducts()
            return
        }
        case "search": {
            searchProduct()
            return
        }
        default: {
            outro("Fim do programa!");
        }
    };
};