/*
Initialize a pointer to go traverse array,
Cycle sort it to move them to their correct positions
If current element is within range and not in correct position, swap
After sorting, iterate once again to check if i is equal to i
If element at i is not equal to i, then its no good so return it
If all numbers are right from 0 to n, then n+1 is missing num so return it
*/

function missingNumber(nums) {
    if(nums.length < 1){
        return 0;
    }

    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i];
        if (nums[i] < nums.length && nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j) {
            return j;
        }
    }

    return nums.length;
}


module.exports = missingNumber;
