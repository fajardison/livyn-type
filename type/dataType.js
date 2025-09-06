/**
 * Detects the precise data type of a value.
 *
 * Handles built-in types and some special cases:
 *   - null => "null"
 *   - undefined => "undefined"
 *   - string, number, boolean, array, date, regexp, map, set, promise, etc.
 *   - custom objects return their constructor name in lowercase
 *   - function types:
 *       - regular function => "function"
 *       - async function => "asyncfunction"
 *       - generator function => "generatorfunction"
 *
 * @param {*} value - The value to detect.
 * @returns {string} The detected type as a lowercase string.
 *
 * @throws {Error} If more than one argument is provided.
 *
 * Examples:
 *   dataType(123) => "number"
 *   dataType("hello") => "string"
 *   dataType([1,2,3]) => "array"
 *   dataType(new Map()) => "map"
 *   dataType(async () => {}) => "asyncfunction"
 *   dataType(function*() {}) => "generatorfunction"
 *   dataType(null) => "null"
 *   dataType(undefined) => "undefined"
 */
export default function dataType(value) {
  if (arguments.length > 1) {
    throw new Error("dataType only accepts 1 argument");
  }

  if (value === null) return "null";
  if (value === undefined) return "undefined";

  let detected = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

  if (detected === "object" && value.constructor && typeof value.constructor.name === "string" && value.constructor.name !== "Object") {
    detected = value.constructor.name.toLowerCase();
  }

  if (detected === "function") {
    if (value.constructor && value.constructor.name === "AsyncFunction") detected = "asyncfunction";
    else if (value.constructor && value.constructor.name === "GeneratorFunction") detected = "generatorfunction";
  }

  return detected;
        }
