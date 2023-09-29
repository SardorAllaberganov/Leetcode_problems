const nums = [1, 2, 3];
// const nums = [1, 2, 3, 4];
// const nums = [-1, -2, -3];

var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    return Math.max(
        nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3],
        nums[0] * nums[1] * nums[nums.length - 1]
    );
};

console.log(maximumProduct(nums));
