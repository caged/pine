test("implicit inch", () => {
  expect(() => {
    expect(parse(`1 + 1`)).toBe(2);
  }).not.toThrowError();
});
