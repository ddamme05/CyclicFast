const findErrorNums = require('./setMismatch');

describe('findErrorNums', () => {
  it('returns the correct result for a given input', () => {
    const nums = [1, 2, 2, 4];
    const expectedOutput = [2, 3];
    expect(findErrorNums(nums)).toEqual(expectedOutput);
  });

  it('returns the correct result for duplicate number 1', () => {
    const nums = [1, 1];
    const expectedOutput = [1, 2];
    expect(findErrorNums(nums)).toEqual(expectedOutput);
  });

  it('returns the correct result for duplicate number at the end', () => {
    const nums = [2, 1, 3, 4, 4];
    const expectedOutput = [4, 5];
    expect(findErrorNums(nums)).toEqual(expectedOutput);
  });
});
