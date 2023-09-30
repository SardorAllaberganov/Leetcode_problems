const word1 = "abc",
	word2 = "pqr";

var mergeAlternately = function (word1, word2) {
	let maxLength = Math.max(word1.length, word2.length);
	let word = [];
	for (let i = 0; i < maxLength; i++) {
		if (word1[i]) word.push(word1[i]);
		if (word2[i]) word.push(word2[i]);
	}
	return word.join("");
};

console.log(mergeAlternately(word1, word2));
