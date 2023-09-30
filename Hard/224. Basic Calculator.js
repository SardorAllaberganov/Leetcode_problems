const s = "1 + 1";
// const s = " 2-1 + 2 ";
// const s = "(1+(4+5+2)-3)+(6+8)";

var calculate = function (s) {
	return new Function("return " + s)();
};

console.log(calculate(s));
