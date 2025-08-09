import chalk from "chalk";
import { intro } from "@clack/prompts";
import { selecting } from "./menus/main.js";

intro(chalk.bgGreen("📋  TAREFAS"))

selecting();
