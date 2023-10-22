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

test("explicit foot, whole, fraction and fraction addition", () => {
  expect(() => {
    expect(parse(`5' 7 1/2" + 2`)).toBe(69.5);
  }).not.toThrowError();
});

test("explicit foot, whole, fraction and explicit whole, fraction addition", () => {
  expect(() => {
    expect(parse(`5' 7 1/2" + 2' 1/2"`)).toBe(92);
  }).not.toThrowError();
});

//////// Subtraction

test("implicit inch subtraction", () => {
  expect(() => {
    expect(parse(`1 - 1`)).toBe(0);
  }).not.toThrowError();
});

test("explicit inch subtraction", () => {
  expect(() => {
    expect(parse(`21" - 1"`)).toBe(20);
  }).not.toThrowError();
});

test("implicit foot minus explicit inch", () => {
  expect(() => {
    expect(parse(`2' - 12"`)).toBe(12);
  }).not.toThrowError();
});

/// Division

test("implicit inch division", () => {
  expect(() => {
    expect(parse(`1 / 1`)).toBe(1);
  }).not.toThrowError();
});

test("explicit foot division", () => {
  expect(() => {
    expect(parse(`2' / 3`)).toBe(8);
  }).not.toThrowError();
});

test("implicit fraction division", () => {
  expect(() => {
    expect(parse(`1/3 / 3`)).toBe(0.1111111111111111);
  }).not.toThrowError();
});

/// Multiplication

test("implicit inch multiplication", () => {
  expect(() => {
    expect(parse(`1 * 1`)).toBe(1);
  }).not.toThrowError();
});

test("explicit foot multiplication", () => {
  expect(() => {
    expect(parse(`2' * 3`)).toBe(72);
  }).not.toThrowError();
});

test("implicit fraction multiplication", () => {
  expect(() => {
    expect(parse(`1/4 * 4`)).toBe(1);
  }).not.toThrowError();
});

/// Parentheses

test("implicit inch parentheses", () => {
  expect(() => {
    expect(parse(`(1)`)).toBe(1);
  }).not.toThrowError();
});

test("explicit inch parentheses", () => {
  expect(() => {
    expect(parse(`(1")`)).toBe(1);
  }).not.toThrowError();
});

test("explicit foot parentheses", () => {
  expect(() => {
    expect(parse(`(2')`)).toBe(24);
  }).not.toThrowError();
});

test("implicit fraction parentheses", () => {
  expect(() => {
    expect(parse(`(1/2)`)).toBe(0.5);
  }).not.toThrowError();
});

test("parenthesis equation", () => {
  expect(() => {
    expect(parse(`(1/2" * 4) / 1`)).toBe(2);
  }).not.toThrowError();
});

test("ignores partial equation", () => {
  expect(parse(`5 + `)).toBeUndefined();
});
