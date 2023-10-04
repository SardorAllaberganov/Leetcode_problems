const nums = [3, 2, 1, 4];

var findNonMinOrMax = function (nums) {
    if (nums.length <= 2) return -1;

    return nums.sort((a, b) => a - b)[1];
};

console.log(findNonMinOrMax(nums));
