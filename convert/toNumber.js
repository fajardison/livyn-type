/**
 * Converts a value to a number.
 *
 * Handles various types:
 *   - null: returns 0
 *   - undefined: returns NaN
 *   - boolean: true => 1, false => 0
 *   - number: returns as-is
 *   - bigint: converted to Number
 *   - string: extracts numeric parts and joins them
 *   - symbol: uses numeric parts of description
 *   - array: converts each element and joins numeric parts
 *   - Date: converts to numeric string YYYYMMDDHHMMSSSSS
 *   - Map/Set: returns size
 *   - object: converts values recursively and joins numeric parts
 *   - function, RegExp, Promise: returns NaN
 *
 * @param {*} value - The input value to convert to a number.
 * @returns {number} The resulting number, or NaN if conversion fails.
 *
 * Examples:
 *   toNumber(null) => 0
 *   toNumber(true) => 1
 *   toNumber("abc123def") => 123
 *   toNumber([1,"2",3]) => 123
 *   toNumber(new Date("2025-09-06T23:00:00.123Z")) => 20250906230000123
 *   toNumber(new Set([1,2])) => 2
 *   toNumber({a:1, b:"2"}) => 12
 *   toNumber(Symbol("sym123")) => 123
 */
export default function toNumber(value) {
  if (value === null) return 0;
  if (value === undefined) return NaN;
  if (typeof value === "boolean") return value ? 1 : 0;
  if (typeof value === "number") return value;
  if (typeof value === "bigint") return Number(value);

  if (typeof value === "string") {
    const match = value.match(/\d+/g);
    return match ? Number(match.join('')) : NaN;
  }

  if (typeof value === "symbol") {
    const desc = value.description;
    if (!desc) return NaN;
    const match = desc.match(/\d+/g);
    return match ? Number(match.join('')) : NaN;
  }

  if (typeof value === "function") return NaN;

  if (Array.isArray(value)) {
    const nums = value.map(v => toNumber(v)).filter(n => !isNaN(n));
    return nums.length ? Number(nums.join('')) : NaN;
  }

  if (value instanceof Date) {
    return Number(
      `${value.getFullYear()}${(value.getMonth()+1).toString().padStart(2,'0')}${value.getDate().toString().padStart(2,'0')}` +
      `${value.getHours().toString().padStart(2,'0')}${value.getMinutes().toString().padStart(2,'0')}${value.getSeconds().toString().padStart(2,'0')}` +
      `${value.getMilliseconds().toString().padStart(3,'0')}`
    );
  }

  if (value instanceof Map || value instanceof Set) return value.size;
  if (value instanceof RegExp) return NaN;
  if (value instanceof Promise) return NaN;

  if (typeof value === "object") {
    const nums = Object.values(value).map(v => toNumber(v)).filter(n => !isNaN(n));
    return nums.length ? Number(nums.join('')) : 0;
  }

  return NaN;
}
