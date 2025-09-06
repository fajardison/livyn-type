/**
 * Converts a value to a boolean.
 *
 * Treats the following as false:
 *   false, 0, -0, "0", "", " ", "false", "-", null, undefined, NaN, -Infinity,
 *   and any negative number.
 * All other values are treated as true.
 *
 * @param {*} value - The input value to convert to boolean.
 * @returns {boolean} The resulting boolean value.
 *
 * Examples:
 *   toBoolean(false) => false
 *   toBoolean(0) => false
 *   toBoolean(-5) => false
 *   toBoolean("false") => false
 *   toBoolean("hello") => true
 *   toBoolean(42) => true
 */
export default function toBoolean(value) {
  const falseValues = [false, 0, -0, "0", "", " ", "false", "-", null, undefined, NaN, -Infinity];

  return falseValues.includes(value) || (typeof value === "number" && value < 0) ? false : true;
}
