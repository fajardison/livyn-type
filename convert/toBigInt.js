/**
 * Converts various types of values into a BigInt.
 *
 * Handles null, undefined, boolean, number, bigint, string, array, Date, symbol, and objects.
 * For strings, symbols, arrays, and objects, it extracts numeric parts and concatenates them to form a BigInt.
 * For Date, it converts the date and time components into a numeric string in the format: YYYYMMDDHHMMSSSSS.
 *
 * @param {*} value - The input value to convert to BigInt.
 * @returns {bigint} The resulting BigInt. Returns 0n if conversion is not possible.
 *
 * Examples:
 *   toBigInt(null) => 0n
 *   toBigInt(true) => 1n
 *   toBigInt(123.45) => 123n
 *   toBigInt("abc123def") => 123n
 *   toBigInt([1, "2", 3]) => 123n
 *   toBigInt(new Date("2025-09-06T23:00:00.123Z")) => 20250906230000123n
 *   toBigInt(Symbol("sym123")) => 123n
 *   toBigInt({a:1, b:"2"}) => 12n
 */
export default function toBigInt(value) {
  if (value === null || value === undefined) return 0n;
  if (typeof value === "boolean") return value ? 1n : 0n;
  if (typeof value === "number") return BigInt(Math.floor(value));
  if (typeof value === "bigint") return value;
  if (typeof value === "string") {
    const match = value.match(/\d+/g);
    return match ? BigInt(match.join('')) : 0n;
  }
  if (Array.isArray(value)) {
    const nums = value.map(v => toBigInt(v));
    return nums.length ? BigInt(nums.join('')) : 0n;
  }
  if (value instanceof Date) {
    const d = value;
    const num = `${d.getFullYear()}${(d.getMonth()+1).toString().padStart(2,'0')}${d.getDate().toString().padStart(2,'0')}` +
                `${d.getHours().toString().padStart(2,'0')}${d.getMinutes().toString().padStart(2,'0')}${d.getSeconds().toString().padStart(2,'0')}` +
                `${d.getMilliseconds().toString().padStart(3,'0')}`;
    return BigInt(num);
  }
  if (typeof value === "symbol") {
    const desc = value.description;
    if (!desc) return 0n;
    const match = desc.match(/\d+/g);
    return match ? BigInt(match.join('')) : 0n;
  }
  if (typeof value === "object") {
    const nums = Object.values(value).map(v => toBigInt(v));
    return nums.length ? BigInt(nums.join('')) : 0n;
  }
  return 0n;
}
