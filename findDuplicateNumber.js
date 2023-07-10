/*
Make a pointer i to iterate through array, while traversing
calculate the correct index by subtaracting one from nums[i]
If current element is not equal to the one in correct index, we swap
If it is in position, we move to next element

We let j iterate through new array after swaps are made,
if element at j is not equal to j+1, then its a duplicate and return it
*/

function findDuplicate(nums) {

    if (nums.length < 1) {
        return 0;
    }


    let i = 0;

    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j + 1) {
            return nums[j];
        }
    }
    return 0;
}

module.exports = findDuplicate;