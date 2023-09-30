const command = "G()(al)";

var interpret = function (command) {
	command = command.replaceAll("()", "o").replaceAll("(al)", "al");
	return command;
};

console.log(interpret(command));
