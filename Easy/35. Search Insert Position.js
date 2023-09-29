const nums = [1, 3, 5, 6],
    target = 5;
// const nums = [1, 3, 5, 6],
//     target = 2;
// const nums = [1, 3, 5, 6],
//     target = 7;

var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return start;
};

console.log(searchInsert(nums, target));
