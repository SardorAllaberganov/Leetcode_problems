const arr = [
    19, 12, 11, 14, 18, 8, 6, 6, 13, 9, 8, 3, 10, 10, 1, 10, 5, 12, 13, 13, 9,
];

var findLucky = function (arr) {
    let map = {};
    let res = [];
    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    for (let key in map) {
        res.push({ key: key, count: map[key] });
    }

    return res
        .sort((a, b) => b.count - a.count)
        .filter((a) => +a.key === a.count)
        .map((a) => a.key)[0];
};

console.log(findLucky(arr));
