const nums = [5, 10, 1, 5, 2],
    k = 1;

var sumIndicesWithKSetBits = function (nums, k) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (i.toString(2).replaceAll("0", "").length === k) {
            arr.push(nums[i]);
        }
    }
    return arr.reduce((a, b) => a + b);
};

console.log(sumIndicesWithKSetBits(nums, k));
