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

test("implicit whole and fraction addition", () => {
  expect(() => {
    expect(parse(`1 + 1/2`)).toBe(1.5);
  }).not.toThrowError();
});

test("explicit whole and fraction addition", () => {
  expect(() => {
    expect(parse(`1" + 1/2"`)).toBe(1.5);
  }).not.toThrowError();
});

test("explicit whole and fraction foot addition", () => {
  expect(() => {
    expect(parse(`1' + 1/2"`)).toBe(12.5);
  }).not.toThrowError();
});
