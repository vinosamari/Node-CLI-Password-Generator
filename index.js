const { program } = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

// SET VERSION AND DESCRIPTION
program.version("1.0.0").description("Simple password generator");

// SET OPTIONS AND DEFAULTS
program
	.option("-l, --length <number>", "length of password", "8")
	.option("-s, --save", "save to P@55W0RD5.txt")
	.option("-nn, --no-numbers", "remove numbers")
	.option("-ns, --no-symbols", "remove symbols")
	.parse();

// GENERATE PASSWORD
const { length, save, numbers, symbols } = program.opts();
const generatedPassword = createPassword(length, numbers, symbols);

// CHECK FOR SAVE FLAG & SAVE PASSWORD TO FILE
if (save) {
	savePassword(generatedPassword);
}
// COPY PASSWORD TO CLIPBOARD
clipboardy.writeSync(generatedPassword);

// OUTPUT GENERATED PASSWORD
log(
	chalk.blueBright("✅  Generated Password: ") +
		chalk.blueBright(generatedPassword)
);
log(chalk.greenBright("📄  Copied to clipboard!"));
