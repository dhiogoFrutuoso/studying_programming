import { isCancel, outro, select } from "@clack/prompts";
import { createTaskMenu } from "./create.js";
import { listTasksMenu } from "./list.js";

export async function selecting() {
    const option = await select({
        message: "Escolha oque deseja fazer: ",
        options: [ 
            { value: "create", label: "Criar nova tarefa"},
            { value: "list", label: "Listar tarefas"},
            { value: "exit", label: "Sair"}
    ]});
    
    if (isCancel(option)) return;

    switch (option) {
        case "create": {
            createTaskMenu();
            return;
        }
        case "list": {
            listTasksMenu()
            return;
        }
        default: {
            outro("Fim do programa!");
        }
    }
};