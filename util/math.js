

module.exports = {
  decimalAdjust: decimalAdjust,
  round10: round10,
  floor10: floor10,
  ceil10: ceil10
};

function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

function round10 (value, exp) {
  return decimalAdjust('round', value, exp);
}

// Decimal round
if (!Math.round10) {
  Math.round10 = round10;
}

function floor10 (value, exp) {
  return decimalAdjust('floor', value, exp);
}

// Decimal floor
if (!Math.floor10) {
  Math.floor10 = floor10;
}

function ceil10 (value, exp) {
  return decimalAdjust('ceil', value, exp);
}

// Decimal ceil
if (!Math.ceil10) {
  Math.ciel10 = ceil10;
}
