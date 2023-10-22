const NEAREST = 16.0;

// Given two numbers, find the greatest common denominator
//
// Example:
//   gcd(12, 16) => 4
//   gcd(0, 1) => 1
//
// Returns: number
function gcd(a, b) {
  if (b < 1 / NEAREST) return a;

  return gcd(b, Math.floor(a % b));
}

// Given a decimal, convert to the nearest 1/16th fraction.
//
// Example:
//   fraction(0.125) => "1/8"
//   fraction(0.25) => "1/4"
//   fraction(2 / 16.0) => "1/8"
//   fraction(0.00001) => "1/16"
//   fraction(1.5) => "3/2"
//
// Returns: string
function fraction(decimal) {
  const number = (Math.round(decimal * NEAREST) / NEAREST).toFixed(NEAREST / 2);
  const len = number.toString().length - 2;

  if (number <= 0) return `1/${Math.trunc(NEAREST)}`;

  let denominator = Math.pow(10, len);
  let numerator = number * denominator;

  const divisor = gcd(numerator, denominator);

  return `${Math.floor(numerator / divisor)}/${Math.floor(
    denominator / divisor
  )}`;
}

// Given a float or integer, convert to a whole and fraction
//
// Example:
//   mixedFraction(1) => 1
//   mixedFraction(0.125) => "1/8"
//   mixedFraction(1.25) => "1 1/4"
//
// Returns: string
function mixedFraction(number) {
  if (isNaN(number)) throw new Error("Invalid input. Must be a number.");
  if (Number.isInteger(number)) return String(number);

  const whole = Math.floor(number);
  const decimal = number % 1;

  return `${whole === 0 ? "" : whole + " "}${fraction(decimal)}`;
}

module.exports = { gcd, fraction, mixedFraction };
