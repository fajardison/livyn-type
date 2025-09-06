import converters from '../utils/converters.js';


/**
 * Converts a value to a specified type or to all available types.
 *
 * If a `type` is provided, it uses the corresponding converter:
 *   - "number", "bigint", "boolean", "string", "array", "date", "object", "regexp"
 *   - Throws an error if the type is unknown.
 *
 * If no `type` is provided, it converts the value to **all types** and returns
 * an object with keys for each type.
 *
 * @param {*} value - The value to convert.
 * @param {string} [type] - Optional target type for conversion.
 * @returns {*} The converted value, or an object of all conversions if type is not specified.
 *
 * Examples:
 *   toType("123", "number") => 123
 *   toType("true", "boolean") => true
 *   toType("2025-09-06") => {
 *     number: 20250906,
 *     bigint: 20250906n,
 *     boolean: true,
 *     string: "2025-09-06",
 *     array: ["2025-09-06"],
 *     date: Date("2025-09-06"),
 *     object: {0: "2025-09-06"},
 *     regexp: /2025-09-06/i
 *   }
 */
export default function toType(value, type) {
  if (type) {
    const converter = converters[type];
    if (!converter) throw new Error(`Unknown type "${type}"`);
    return converter(value);
  }

  const result = {};
  for (const [t, converter] of Object.entries(converters)) {
    result[t] = converter(value);
  }
  return result;
      }
