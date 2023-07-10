/*
Use cyclic sort

We have to get a pointer to keep track of last unique element
Let it iterate through the array through another pointer called j
Compare them, if they're not equal we increment i and update current element at i
We would return i + 1 because i is an index that shows how many unique elements we have and we want the count hence + 1
*/

function removeDuplicates(nums) {
    if (nums.length < 1) {
        return 0;
    }

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

module.exports = removeDuplicates;