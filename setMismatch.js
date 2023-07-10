/*
Do cyclic sort,
Iterate through sorted with j,
If element at j is not = j + 1, it has wrong index,
therefore it is mismatch
Return mismatch array
*/


function findErrorNums(nums) {
    if (nums.length < 1) {
        return [];
    }

    let i = 0;
    let mismatch = [];

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
            mismatch.push(nums[j], j + 1);
        }
    }

    return mismatch;
}

module.exports = findErrorNums;

