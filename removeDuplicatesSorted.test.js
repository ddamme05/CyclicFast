const removeDuplicates = require('./removeDuplicatesSorted');

describe('removeDuplicates', () => {
  it('returns the correct number of unique elements and modifies the array correctly', () => {
    const nums = [1, 1, 2];
    const expectedNums = [1, 2];
    const expectedK = 2;
    const k = removeDuplicates(nums);
    expect(k).toEqual(expectedK);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it('returns the correct number of unique elements and modifies the array correctly', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expectedNums = [0, 1, 2, 3, 4];
    const expectedK = 5;
    const k = removeDuplicates(nums);
    expect(k).toEqual(expectedK);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });
});
