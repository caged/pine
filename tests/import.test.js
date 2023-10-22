const { grammar, gcd, mixedFraction, feet, fraction } = require("../index.js");

test("should import grammar", () => {
  expect(grammar).toBeTruthy();
});

test("should import utilities", () => {
  expect(gcd).toBeTruthy();
  expect(mixedFraction).toBeTruthy();
  expect(fraction).toBeTruthy();
  expect(feet).toBeTruthy();
});
