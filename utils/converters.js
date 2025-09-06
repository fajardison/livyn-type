import toNumber from '../convert/toNumber.js';
import toBigInt from '../convert/toBigInt.js';
import toBoolean from '../convert/toBoolean.js';
import toString from '../convert/toString.js';
import toArray from '../convert/toArray.js';
import toDate from '../convert/toDate.js';
import toObject from '../convert/toObject.js';
import toRegExp from '../convert/toRegExp.js';


/**
 * Centralized collection of type conversion functions.
 *
 * Provides a unified interface to convert values to different types:
 *   - number: converts to Number
 *   - bigint: converts to BigInt
 *   - boolean: converts to Boolean
 *   - string: converts to String
 *   - array: converts to Array
 *   - date: converts to Date
 *   - object: converts to Object
 *   - regexp: converts to RegExp
 *
 * Each converter function handles multiple input types gracefully.
 *
 * Usage:
 *   import converters from './converters.js';
 *   const num = converters.number("123");      // 123
 *   const arr = converters.array("a, b, c");  // ["a", "b", "c"]
 *   const regex = converters.regexp("test");  // /test/i
 */
const converters = {
  number: toNumber,
  bigint: toBigInt,
  boolean: toBoolean,
  string: toString,
  array: toArray,
  date: toDate,
  object: toObject,
  regexp: toRegExp
};

export default converters;
