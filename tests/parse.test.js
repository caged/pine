test("implicit inch", () => {
  expect(() => {
    expect(parse(`1`)).toBe(1);
  }).not.toThrowError();
});

test("explicit inch", () => {
  expect(() => {
    expect(parse(`1"`)).toBe(1);
  }).not.toThrowError();
});

test("explicit foot", () => {
  expect(() => {
    expect(parse(`2'`)).toBe(24);
  }).not.toThrowError();
});

test("implicit fraction inch", () => {
  expect(() => {
    expect(parse(`1/2`)).toBe(0.5);
  }).not.toThrowError();
});

test("explicit fraction inch", () => {
  expect(() => {
    expect(parse(`1/2"`)).toBe(0.5);
  }).not.toThrowError();
});

test("implicit whole and fraction inch", () => {
  expect(() => {
    expect(parse(`3 1/2`)).toBe(3.5);
  }).not.toThrowError();
});

test("explicit whole and fraction inch", () => {
  expect(() => {
    expect(parse(`3 1/2"`)).toBe(3.5);
  }).not.toThrowError();
});

test("explicit whole and fraction foot", () => {
  expect(() => {
    expect(parse(`3 1/2'`)).toBe(42);
  }).not.toThrowError();
});

test("explicit whole foot and whole inch", () => {
  expect(() => {
    expect(parse(`3' 5`)).toBe(41);
  }).not.toThrowError();
});

test("explicit whole foot and fraction inch", () => {
  expect(() => {
    expect(parse(`3' 1/2"`)).toBe(36.5);
  }).not.toThrowError();
});

test("explicit whole foot and implicit inch and explicit fraction inch", () => {
  expect(() => {
    expect(parse(`3' 2 1/2`)).toBe(38.5);
  }).not.toThrowError();
});

test("explicit whole foot and implicit inch and explicit fraction inch", () => {
  expect(() => {
    expect(parse(`3' 2 1/2"`)).toBe(38.5);
  }).not.toThrowError();
});
