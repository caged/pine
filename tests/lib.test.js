const { convert, fraction, gcd } = require("../src/lib.js");

test("should convert whole number", () => {
  expect(convert(1)).toBe(1);
});

test("should convert a fraction", () => {
  expect(convert(0.125)).toBe("1/8");
});

test("should convert a fraction to the nearest 1/16th", () => {
  expect(convert(0.00001)).toBe("1/16");
});

test("should convert a whole and fraction", () => {
  expect(convert(1.25)).toBe("1 1/4");
});

test("should simplify fraction", () => {
  expect(convert(2 / 16.0)).toBe("1/8");
});
