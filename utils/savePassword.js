const path = require("path");
const fs = require("fs");
const os = require("os");
const chalk = require("chalk");
// SAVE PASSWORD
const savePassword = (password) => {
	fs.open(path.join(__dirname, "../", "p@55w0rd5.txt"), "a", (e, id) => {
		// USE OS END OF LINE TO INSERT NEW LINE AT OS LEVEL
		fs.write(id, password + os.EOL, null, "utf-8", () => {
			// CLOSE THE FILE
			fs.close(id, () => {
				console.log(chalk.green("Password saved to passwords file"));
			});
		});
	});
};
module.exports = savePassword;
