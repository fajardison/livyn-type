/**
 * Converts various types of values into an array.
 *
 * @param {*} value - The value to convert into an array. Can be:
 *   string, number, bigint, boolean, symbol, function, array, Date,
 *   RegExp, Map, Set, or object.
 * @returns {Array} An array representation of the input value.
 *
 * Examples:
 *   toArray(null) => []
 *   toArray("a,b c") => ["a", "b", "c"]
 *   toArray(123) => [123]
 *   toArray(new Set([1,2])) => [1,2]
 *   toArray({a:1, b:2}) => [1,2]
 */
function toArray(value) {
  if (value == null) return [];
  
  if (typeof value === "string") {
    if (/[ ,]/.test(value)) {
      return value.split(/[ ,]+/).map(s => s.trim()).filter(Boolean);
    }
    return [value];
  }
  if (typeof value === "number" || typeof value === "bigint" || typeof value === "boolean") {
    return [value];
  }
  if (typeof value === "symbol") {
    return [String(value)];
  }
  if (typeof value === "function") {
    return [value.toString()];
  }
  
  if (Array.isArray(value)) return value;
  if (value instanceof Date) return [value.toISOString()];
  if (value instanceof RegExp) return [value.toString()];
  if (value instanceof Map) return Array.from(value.entries());
  if (value instanceof Set) return Array.from(value.values());
  if (typeof value === "object") return Object.values(value);

  return [value];
}

export default toArray;
