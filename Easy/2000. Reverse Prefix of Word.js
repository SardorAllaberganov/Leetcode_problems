const word = "abcdefd",
    ch = "d";

var reversePrefix = function (word, ch) {
    let index = word.indexOf(ch);
    let newWord = word.slice(0, index + 1);
    let remainingWord = word.slice(index + 1, word.length);
    return newWord.split("").reverse().join("") + remainingWord;
};

console.log(reversePrefix(word, ch));
