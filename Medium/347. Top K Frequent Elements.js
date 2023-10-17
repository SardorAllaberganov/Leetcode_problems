const nums = [4, 1, -1, 2, -1, 2, 3],
    k = 2;

var topKFrequent = function (nums, k) {
    const map = {};
    const res = [];
    nums.forEach((num) => {
        if (map[num] === undefined) map[num] = 1;
        else map[num]++;
    });
    console.log(map);
    for (let key in map) {
        if (map[key] >= k) res.push(+key);
    }
    return res.sort();
};

console.log(topKFrequent(nums, k));
