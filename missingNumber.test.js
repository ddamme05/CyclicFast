const missingNumber = require('./missingNumber');

describe('missingNumber', () => {
  it('returns the correct missing number for a given input', () => {
    const nums = [3, 0, 1];
    const expectedOutput = 2;
    expect(missingNumber(nums)).toEqual(expectedOutput);
  });

  it('returns the correct missing number when 0 is missing', () => {
    const nums = [1, 2, 3];
    const expectedOutput = 0;
    expect(missingNumber(nums)).toEqual(expectedOutput);
  });

  it('returns the correct missing number when the maximum number is missing', () => {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const expectedOutput = 9;
    expect(missingNumber(nums)).toEqual(expectedOutput);
  });
});
