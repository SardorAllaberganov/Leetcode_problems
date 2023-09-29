const nums = [2,7,11,15], target = 9;
// const nums = [3,2,4], target = 6;
// const nums = [3,3], target = 6

var twoSum = function (nums, target) {
    const comp = {}
    for (var i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i]
        }
        comp[target - nums[i]] = i
    }
};

console.log(twoSum(nums));