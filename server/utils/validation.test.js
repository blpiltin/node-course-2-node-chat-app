const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    expect(isRealString(undefined)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('    ')).toBe(false);
  });
  
  it('should accept string with non-space characters', () => {
    expect(isRealString('Hello')).toBe(true);
  });
});