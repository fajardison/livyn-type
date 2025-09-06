/**
 * Converts a value into an object representation.
 *
 * Handles various types:
 *   - null or undefined: returns an empty object {}
 *   - object: returns as-is
 *   - array: converts to an object with indices as keys
 *   - Date: returns { value: ISOString }
 *   - Map: converts entries to object key-value pairs
 *   - Set: converts values to object with numeric keys
 *   - RegExp, Promise: returns { value: string representation }
 *   - other types (number, string, boolean, symbol, function): returns { value: ... }
 *
 * @param {*} value - The input value to convert to an object.
 * @returns {Object} The resulting object representation.
 *
 * Examples:
 *   toObject(null) => {}
 *   toObject([1,2]) => {0:1, 1:2}
 *   toObject(new Date("2025-09-06")) => { value: "2025-09-06T00:00:00.000Z" }
 *   toObject(new Map([["a",1]])) => { a:1 }
 *   toObject(new Set([1,2])) => {0:1, 1:2}
 *   toObject(/abc/) => { value: "/abc/" }
 *   toObject(42) => { value: 42 }
 */
function toObject(value) {
  if (value == null) return {};

  if (typeof value === "object") {
    if (Array.isArray(value)) {
      return value.reduce((acc, cur, idx) => {
        acc[idx] = cur;
        return acc;
      }, {});
    }

    if (value instanceof Date) return { value: value.toISOString() };
    if (value instanceof Map) {
      const obj = {};
      for (const [k, v] of value.entries()) {
        obj[k] = v;
      }
      return obj;
    }
    if (value instanceof Set) {
      const obj = {};
      let idx = 0;
      for (const v of value.values()) {
        obj[idx++] = v;
      }
      return obj;
    }
    if (value instanceof RegExp || value instanceof Promise) return { value: value.toString() };

    return value;
  }

  return { value };
}

export default toObject;
