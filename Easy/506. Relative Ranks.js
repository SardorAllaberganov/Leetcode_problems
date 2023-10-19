const score = [10, 3, 8, 9, 4];

var findRelativeRanks = function (score) {
    let ranks = score.slice(0).sort((a, b) => b - a);
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    return score.map((el, index) => {
        console.log(score.indexOf(el), ranks.indexOf(el), medals[index]);
        if (medals[index] === ranks.indexOf(el)) {
            return medals[index];
        } else return (ranks.indexOf(el) + 1).toString();
    });
};

console.log(findRelativeRanks(score));
