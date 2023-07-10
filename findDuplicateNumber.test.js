const findDuplicate = require('./findDuplicateNumber');

describe('findDuplicate', () => {
  it('returns the correct result for a given input', () => {
    const nums = [1, 3, 4, 2, 2];
    const expectedOutput = 2;
    expect(findDuplicate(nums)).toEqual(expectedOutput);
  });

  it('returns the correct result when duplicate is at the beginning', () => {
    const nums = [3, 1, 3, 4, 2];
    const expectedOutput = 3;
    expect(findDuplicate(nums)).toEqual(expectedOutput);
  });

  it('returns the correct result when duplicate is at the end', () => {
    const nums = [1, 2, 3, 4, 5, 6, 2];
    const expectedOutput = 2;
    expect(findDuplicate(nums)).toEqual(expectedOutput);
  });

  // Add more test cases here

});
