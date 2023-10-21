const { convert, fraction, gcd } = require("../src/lib.js");

test("should find greatest common denominator", () => {
  expect(gcd(12, 16)).toBe(4);
});

test("should find greatest common denominator of zero", () => {
  expect(gcd(0, 1)).toBe(1);
});

test("should return a fraction given a decimal", () => {
  expect(fraction(0.125)).toBe("1/8");
});

test("should return a fraction given a decimal", () => {
  expect(fraction(0.25)).toBe("1/4");
});

test("should simplify fraction", () => {
  expect(fraction(2 / 16.0)).toBe("1/8");
});

test("should convert a fraction to the nearest 1/16th", () => {
  expect(fraction(0.00001)).toBe("1/16");
});

test("should convert larger numbers to fractions", () => {
  expect(fraction(1.5)).toBe("3/2");
});

test("should convert whole number", () => {
  expect(convert(1)).toBe(1);
});

test("should convert a fraction", () => {
  expect(convert(0.125)).toBe("1/8");
});

test("should convert a whole and fraction", () => {
  expect(convert(1.25)).toBe("1 1/4");
});

test("should convert", () => {
  expect(convert("10 +")).toBeNull();
});
