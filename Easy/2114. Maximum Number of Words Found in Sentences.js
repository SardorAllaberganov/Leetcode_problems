const sentences = [
	"alice and bob love leetcode",
	"i think so too",
	"this is great thanks very much",
];

var mostWordsFound = function (sentences) {
	return Math.max(...sentences.map((item) => item.split(" ").length));
};

console.log(mostWordsFound(sentences));
