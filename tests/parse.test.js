test("implicit inch", () => {
  expect(parse(`1`)).not.toThrowError();
});

test("explicit inch", () => {
  expect(parse(`1"`)).not.toThrowError();
});

test("explicit foot", () => {
  expect(parse(`2'`)).not.toThrowError();
});

test("implicit inch fraction", () => {
  expect(parse(`1/2`)).not.toThrowError();
});

test("explicit inch fraction", () => {
  expect(parse(`1/2"`)).not.toThrowError();
});
