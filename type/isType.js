import dataType from './dataType.js';


/**
 * Checks if a value matches an expected data type.
 *
 * Uses the `dataType` function to detect the value's type and compares
 * it with the expected type string (case-insensitive).
 *
 * @param {*} value - The value to check.
 * @param {string} expected - The expected type name (e.g., "string", "number", "array").
 * @returns {boolean} True if the value matches the expected type, false otherwise.
 *
 * @throws {Error} If the expected type is not a string.
 *
 * Examples:
 *   isType(123, "number") => true
 *   isType("hello", "string") => true
 *   isType([1,2,3], "array") => true
 *   isType(null, "null") => true
 *   isType(async () => {}, "asyncfunction") => true
 */
export default function isType(value, expected) {
  if (typeof expected !== "string") {
    throw new Error("Expected type must be a string");
  }
  return dataType(value) === expected.toLowerCase();
}
