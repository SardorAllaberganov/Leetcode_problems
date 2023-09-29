const jewels = "aA",
    stones = "aAAbbbb";
// const jewels = "z", stones = "ZZ";

var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    stones
        .split("")
        .forEach((a) =>
            jewels.split("").forEach((b) => (a === b ? count++ : 0))
        );
    return count;
};

console.log(numJewelsInStones(jewels, stones));
