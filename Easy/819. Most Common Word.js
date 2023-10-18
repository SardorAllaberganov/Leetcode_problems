const paragraph = "..Bob hit a ball, the hit BALL flew far after it was hit.",
    banned = ["hit"];

var mostCommonWord = function (paragraph, banned) {
    let words = paragraph.toLowerCase().split(/\W+/g);
    let map = {};
    for (let word of words) {
        map[word] = (map[word] || 0) + 1;
    }
    console.log(words);
    return Object.keys(map)
        .sort((a, b) => {
            return map[b] - map[a];
        })
        .filter((a) => !banned.includes(a) && a.length !== 0)[0];
};

console.log(mostCommonWord(paragraph, banned));
