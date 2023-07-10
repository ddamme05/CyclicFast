const findDuplicates = require('./findAllDuplicates');

describe('findDuplicates', () => {
  it('returns an empty array if input is empty', () => {
    expect(findDuplicates([])).toEqual([]);
  });

  it('returns an empty array if no duplicates are found', () => {
    const nums = [1];
    expect(findDuplicates(nums)).toEqual([]);
  });

  it('returns the correct result when duplicates are present', () => {
    const nums = [1, 1, 2];
    const expectedOutput = [1];
    expect(findDuplicates(nums)).toEqual(expectedOutput);
  });
});
