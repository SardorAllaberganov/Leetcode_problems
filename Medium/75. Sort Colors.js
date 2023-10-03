const nums = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                min = nums[j];
                nums[j] = nums[i];
                nums[i] = min;
            }
        }
    }
    return nums;
};

console.log(sortColors(nums));
