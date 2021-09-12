const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "01234567890";
const symbols = "!@£$%^&*()";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
	let chars = alpha;
	hasNumbers ? (chars += numbers) : "";
	hasSymbols ? (chars += symbols) : "";
	return generatePassword(length, chars);
};
const generatePassword = (length, chars) => {
	let password = "";
	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return password;
};
module.exports = createPassword;
