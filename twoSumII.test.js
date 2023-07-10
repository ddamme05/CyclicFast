const twoSum = require('./twoSumII');

describe('twoSum', () => {
  it('returns the indices of the two numbers that add up to the target', () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    const expectedOutput = [1, 2];
    expect(twoSum(numbers, target)).toEqual(expectedOutput);
  });

  it('returns the indices of the two numbers that add up to the target', () => {
    const numbers = [2, 3, 4];
    const target = 6;
    const expectedOutput = [1, 3];
    expect(twoSum(numbers, target)).toEqual(expectedOutput);
  });

  it('returns the indices of the two numbers that add up to the target', () => {
    const numbers = [-1, 0];
    const target = -1;
    const expectedOutput = [1, 2];
    expect(twoSum(numbers, target)).toEqual(expectedOutput);
  });
});
