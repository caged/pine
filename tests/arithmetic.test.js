test("implicit inch addition", () => {
  expect(() => {
    expect(parse(`1 + 1`)).toBe(2);
  }).not.toThrowError();
});

test("explicit inch addition", () => {
  expect(() => {
    expect(parse(`1" + 21"`)).toBe(22);
  }).not.toThrowError();
});

test("implicit inch plus explicit foot", () => {
  expect(() => {
    expect(parse(`1 + 2'`)).toBe(25);
  }).not.toThrowError();
});

test("explicit foot addition", () => {
  expect(() => {
    expect(parse(`1' + 2'`)).toBe(36);
  }).not.toThrowError();
});
