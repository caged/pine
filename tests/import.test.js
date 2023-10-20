const { grammar, gcd, convert, fraction } = require("../index.js");

test("should import grammar", () => {
  expect(grammar).toBeTruthy();
});

test("should import utilities", () => {
  expect(gcd).toBeTruthy();
  expect(convert).toBeTruthy();
  expect(fraction).toBeTruthy();
});
