const nums = [3, 2, 3];
// const nums = [2, 2, 1, 1, 1, 2, 2];

var majorityElement = function (nums) {
    return nums.sort()[Math.floor(nums.length / 2)];
};

console.log(majorityElement(nums));
