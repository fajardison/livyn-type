/**
 * Converts a value to a Date object.
 *
 * Handles the following types:
 *   - Date: returns the same Date object
 *   - number or bigint: treated as a timestamp in milliseconds
 *   - boolean: true becomes 1ms, false becomes 0ms
 *   - string: parsed as a date string
 *   - null or undefined: returns null
 *
 * If the conversion fails (invalid number or string), returns null.
 *
 * @param {*} value - The value to convert to a Date.
 * @returns {Date|null} The resulting Date object or null if conversion fails.
 *
 * Examples:
 *   toDate(null) => null
 *   toDate(new Date("2025-09-06")) => Date object
 *   toDate(1694016000000) => Date object corresponding to the timestamp
 *   toDate(true) => Date corresponding to 1ms after epoch
 *   toDate("2025-09-06") => Date object
 *   toDate("invalid") => null
 */
function toDate(value) {
  if (value == null) return null;

  if (value instanceof Date) return value;

  if (typeof value === "number" || typeof value === "bigint") {
    const d = new Date(Number(value));
    return isNaN(d.getTime()) ? null : d;
  }

  if (typeof value === "boolean") {
    return new Date(value ? 1 : 0);
  }

  if (typeof value === "string") {
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }

  return null;
}

export default toDate;
