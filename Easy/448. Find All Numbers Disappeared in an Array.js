const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// const nums = [1, 1];

var findDisappearedNumbers = function (nums) {
    let array = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) array.push(i);
    }
    return array;
};

console.log(findDisappearedNumbers(nums));
