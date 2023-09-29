const nums = [1, 2, 3, 1],
    k = 3;
// const nums = [1,0,1,1], k = 1;
// const nums = [1,2,3,1,2,3], k = 2;

var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;
        }
    }
    return false;
};

console.log(containsNearbyDuplicate(nums, k));
