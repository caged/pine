const NEAREST = 16.0;

function gcd(a, b) {
  if (b < 1 / NEAREST) return a;

  return gcd(b, Math.floor(a % b));
}

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

function convert(number) {
  if (isNaN(number)) return null;
  if (Number.isInteger(number)) return number;

  const whole = Math.floor(number);
  const decimal = number % 1;

  return `${whole === 0 ? "" : whole + " "}${fraction(decimal)}`;
}

module.exports = { gcd, fraction, convert };
