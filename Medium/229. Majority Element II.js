const nums = [1, 2, 3, 4, 3, 3, 3];

var majorityElement = function (nums) {
    let map = {}; //initializing new map object
    let result = []; //result array
    for (let i = 0; i < nums.length; i++) {
        //iterating over nums length
        // console.log(nums[i]);
        if (nums[i] in map) {
            //checking i-th number from nums array existence in our hashmap
            map[nums[i]] += 1; //if exists count up the element
        } else {
            map[nums[i]] = 1; //otherwise set it to 1
        }
    }

    for (let num in map) {
        //map is now {1: 1, 2: 1, 3: 4, 4: 1};
        // in this loop it iterates over map to count the majority number
        if (map[num] > Math.floor(nums.length / 3)) result.push(num); // checking the majority element that count is more than nums array length
        // nums = [1, 2, 3, 4, 3, 3, 3] this case the nums length is 7
    }
    return result; // result is ['3']
};

console.log(majorityElement(nums));
