const sentence = "i love eating burger",
	searchWord = "burg";

var isPrefixOfWord = function (sentence, searchWord) {
	let l = sentence.split(" ");
	for (let i of l) {
		if (i.startsWith(searchWord)) return l.indexOf(i) + 1;
	}
	return -1;
};

console.log(isPrefixOfWord(sentence, searchWord));
