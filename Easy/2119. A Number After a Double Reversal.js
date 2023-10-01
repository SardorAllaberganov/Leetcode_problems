const num = 526;

var isSameAfterReversals = function (num) {
	let revNum = [...(num + "")].reverse().join("");
	let numRev = [...(+revNum + "")].reverse().join("");

	return num === +numRev ? true : false;
};

console.log(isSameAfterReversals(num));
