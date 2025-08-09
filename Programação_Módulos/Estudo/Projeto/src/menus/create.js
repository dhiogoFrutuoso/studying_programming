import { isCancel, log, text } from "@clack/prompts";
import { taskManager } from "../manager/tasks.js";
import { selecting } from "./main.js";
import chalk from "chalk";

export async function createTaskMenu() {
    let name;

    do {
        name = await text({
            message: "Digite o nome da tarefa: "
        })

        if (taskManager.tasks.has(name)) {

            log.error("Já existe uma tarefa com esse nome!")
        }
        
    } while(taskManager.tasks.has(name));

    if (isCancel()) {
        selecting();
        return
    }

    const task = {
        name,
        status: `${chalk.bgYellow("em andamento")}`,
        createdAt: new Date().toISOString()
    }

    taskManager.create(task);

    log.success("Tarefa criada com sucesso!");
    
   setTimeout( () => {
        selecting()
   }, 1000);
}