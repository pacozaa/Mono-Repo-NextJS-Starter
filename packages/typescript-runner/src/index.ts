import { Command } from "commander";

const program = new Command();

program
  .name("my-cli")
  .description("CLI application built with TypeScript and Commander.js")
  .version("1.0.0");

// Example command
program
  .command("greet")
  .description("Greet someone")
  .argument("<name>", "name of the person to greet")
  .option("-c, --capitalize", "capitalize the name")
  .action((name: string, options: { capitalize?: boolean }) => {
    const greeting = options.capitalize
      ? `Hello, ${name.toUpperCase()}!`
      : `Hello, ${name}!`;
    console.log(greeting);
  });

program.parse();
