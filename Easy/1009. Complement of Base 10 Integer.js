const n = 5;
// const n = 7;
// const n = 10;

var bitwiseComplement = function (n) {
	let binary = n.toString(2).split("");
	binary = binary.map((a) => (a === "0" ? "1" : "0")).join("");
	return parseInt(binary, 2);
};

console.log(bitwiseComplement(n));
