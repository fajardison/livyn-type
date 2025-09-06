/**
 * Converts any value to a string representation.
 *
 * Handles various types:
 *   - null => "null"
 *   - undefined => "undefined"
 *   - string, number, boolean => converted to string
 *   - symbol => symbol.toString()
 *   - array => recursively converts elements and joins with ", " inside brackets
 *   - Date => ISO string
 *   - RegExp => regExp.toString()
 *   - Map => "Map {key1 => value1, key2 => value2}"
 *   - Set => "Set {value1, value2}"
 *   - Promise => "Promise { <pending> }"
 *   - function => function.toString()
 *   - object => recursively converts entries to "{key: value, ...}"
 *
 * @param {*} value - The value to convert to string.
 * @returns {string} The string representation of the value.
 *
 * Examples:
 *   toString(null) => "null"
 *   toString([1, 2, 3]) => "[1, 2, 3]"
 *   toString(new Date("2025-09-06")) => "2025-09-06T00:00:00.000Z"
 *   toString({a:1, b:2}) => "{a: 1, b: 2}"
 *   toString(new Map([["x", 1]])) => "Map {x => 1}"
 */
function toString(value) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";

  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (typeof value === "symbol") return value.toString();

  if (Array.isArray(value)) {
    return `[${value.map(toString).join(", ")}]`;
  }

  if (value instanceof Date) return value.toISOString();
  if (value instanceof RegExp) return value.toString();
  if (value instanceof Map) {
    const entries = Array.from(value.entries()).map(
      ([k, v]) => `${toString(k)} => ${toString(v)}`
    );
    return `Map {${entries.join(", ")}}`;
  }
  if (value instanceof Set) {
    const entries = Array.from(value.values()).map(toString);
    return `Set {${entries.join(", ")}}`;
  }
  if (value instanceof Promise) return "Promise { <pending> }";

  if (typeof value === "function") return value.toString();
  if (typeof value === "object") {
    const entries = Object.entries(value).map(
      ([k, v]) => `${k}: ${toString(v)}`
    );
    return `{${entries.join(", ")}}`;
  }

  return String(value);
}

export default toString;
