test("implicit inch", () => {
  expect(parse(`1`)).not.toThrowError();
});

test("explicit inch", () => {
  expect(parse(`1"`)).not.toThrowError();
});

test("explicit foot", () => {
  expect(parse(`2'`)).not.toThrowError();
});

test("implicit fraction inch", () => {
  expect(parse(`1/2`)).not.toThrowError();
});

test("explicit fraction inch", () => {
  expect(parse(`1/2"`)).not.toThrowError();
});

test("implicit whole and fraction inch", () => {
  expect(parse(`3 1/2`)).not.toThrowError();
});

test("explicit whole and fraction inch", () => {
  expect(parse(`3 1/2"`)).not.toThrowError();
});

test("explicit whole and fraction foot", () => {
  expect(parse(`3 1/2'`)).not.toThrowError();
});

test("explicit whole foot and whole inch", () => {
  expect(parse(`3' 5"`)).not.toThrowError();
});

test("explicit whole foot and fraction inch", () => {
  expect(parse(`3' 1/2"`)).not.toThrowError();
});
