const word = "USA";
// const word = "FlaG";

var detectCapitalUse = function (word) {
    return (
        word === word.toUpperCase() ||
        word.slice(1) === word.slice(1).toLowerCase()
    );
};

console.log(detectCapitalUse(word));
