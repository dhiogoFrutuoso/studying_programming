import chalk from 'chalk';
import { intro, text, outro } from '@clack/prompts';

async function main() {
    intro(chalk.blue('Bem vindo ao meu programa!'));
    const name = await text({ message: "Goze batman"} );

    outro(chalk.green(`Estou gozandoooo!`));
}
main()