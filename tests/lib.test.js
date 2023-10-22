const { mixedFraction, feet, fraction, gcd } = require("../src/lib.js");

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
  expect(mixedFraction(1)).toBe("1");
});

test("should convert a fraction", () => {
  expect(mixedFraction(0.125)).toBe("1/8");
});

test("should convert a whole and fraction", () => {
  expect(mixedFraction(1.25)).toBe("1 1/4");
});

test("should throw error on invalid input", () => {
  expect(() => mixedFraction("10 +")).toThrowError();
});

test("should convert inches to feet and inches", () => {
  expect(feet(10)).toBe(`10`);
  expect(feet(10.5)).toBe(`10 1/2`);
  expect(feet(24.5)).toBe(`2' 1/2`);
  expect(feet(24)).toBe(`2'`);
  expect(feet(12)).toBe(`1'`);
  expect(feet(0)).toBe(`0'`);
  expect(feet(0.5)).toBe(`1/2`);
  expect(feet(45.5)).toBe(`3' 9 1/2`);
});
