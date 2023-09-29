const strs = ["flower", "flow", "flight"];
// const strs = ["dog", "racecar", "car"];

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    console.log(prefix);
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(strs));
