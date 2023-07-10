/*
Do the cyclic sort,
traverse array with i,
check if element at i is equal to i+1 
If not, add it to output array
*/

function findDisappearedNumbers(nums) {
    if(nums.length < 1 ){
        return [];
    }

    const output = [];

    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            output.push(i + 1);
        }
    }

    return output;
}

module.exports = findDisappearedNumbers;