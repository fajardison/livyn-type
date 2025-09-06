import dataType from './dataType.js';

/**
 * Asserts that a value matches (or does not match) a specified type.
 *
 * Throws a TypeError if the value does not match the expected type.
 * Supports negation by prefixing the type string with '!' (e.g., "!string").
 *
 * @param {*} value - The value to check.
 * @param {string} type - The expected type name (e.g., "string", "number", "array") or negated type (e.g., "!null").
 * @returns {*} The original value if it passes the type check.
 *
 * @throws {Error} If the number of arguments is not exactly 2.
 * @throws {TypeError} If the type is not a string or the value does not match the type.
 *
 * Examples:
 *   assertType(123, "number") => 123
 *   assertType("hello", "string") => "hello"
 *   assertType(null, "!null") => throws TypeError
 *   assertType([1,2,3], "array") => [1,2,3]
 */
export default function assertType(value, type) {
  if (arguments.length !== 2) throw new Error("assertType requires exactly 2 arguments");
  if (typeof type !== "string") throw new TypeError("type must be a string");

  const isNegation = type.startsWith("!");
  const expectedType = isNegation ? type.slice(1) : type;
  const displayExpected = isNegation ? `not ${expectedType}` : expectedType;

  const actualType = dataType(value);

  if ((isNegation && actualType === expectedType.toLowerCase()) ||
      (!isNegation && actualType !== expectedType.toLowerCase())) {
    throw new TypeError(`Invalid type: expected ${displayExpected}, got ${actualType}`);
  }

  return value;
        }
