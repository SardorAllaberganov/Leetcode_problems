const allowed = "ab",
    words = ["ad", "bd", "aaab", "baa", "badab"];

var countConsistentStrings = function (allowed, words) {
    let count = 0;
    let regex = new RegExp(`^[${allowed}]+$`);
    for (let word of words) {
        if (word.match(regex)) count++;
    }
    return count;
};

console.log(countConsistentStrings(allowed, words));
