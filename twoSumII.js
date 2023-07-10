/*Use fast and slow pointers, make it so that one starts at the end and one starts at the beginning. 
While the slow one is smaller than the fast one, add them together and see if they are equal to target value
If they are, add 1 to each of their indices because we are utilizing 1-indexed array in this problem.
If not, return -1, -1]
*/

function twoSum(arr, target) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        const sum = arr[i] + arr[j];

        if (sum === target) {
            return [i + 1, j + 1];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
    return [-1, -1];
}

module.exports = twoSum;