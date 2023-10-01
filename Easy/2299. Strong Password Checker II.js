const password = "IloveLe3tcode!";

var strongPasswordCheckerII = function (password) {
	return /^(?=.*[0-9])(?!.*(.)\1+)(?=.*[!-\/:-@[-`{-~])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z\d!-\/:-@[-`{-~]{8,}/g.test(
		password
	);
};

console.log(strongPasswordCheckerII(password));
