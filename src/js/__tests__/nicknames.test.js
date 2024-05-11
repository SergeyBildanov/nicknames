import Validator from '../nicknames';

test.each(
  [
    ["stat1-_t", true],
    ["stat1", false],
    ["1stat", false],
  ])("testing validation fucn for %s", (name, expected)=>{
    const result = Validator.validateUsername(name);
    expect(result).toEqual(expected);
  });

