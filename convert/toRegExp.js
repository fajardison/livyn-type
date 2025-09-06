import escapeRegExp from '../utils/escapeRegExp.js';

/**
 * Converts a value into a RegExp object.
 *
 * Handles various input types:
 *   - RegExp: returned as-is
 *   - string: escaped or parsed if in /pattern/flags format
 *   - number, bigint, boolean, symbol, function: converted to string and escaped
 *   - array: elements joined as string and escaped
 *   - Date: converted to ISO string and escaped
 *   - Map: converted to JSON object string and escaped
 *   - Set: converted to JSON array string and escaped
 *   - object: converted to string and escaped
 *   - null or undefined: empty pattern
 *
 * @param {*} value - The value to convert into a RegExp.
 * @param {Object} [options] - Optional flags configuration.
 * @param {boolean} [options.global=true] - Include the 'g' flag.
 * @param {boolean} [options.ignoreCase=true] - Include the 'i' flag.
 * @param {boolean} [options.multiline=false] - Include the 'm' flag.
 * @returns {RegExp} The resulting RegExp object. If invalid, returns /^$/.
 *
 * Examples:
 *   toRegExp("hello") => /hello/i
 *   toRegExp("/test/g") => /test/g
 *   toRegExp([1,2,3]) => /123/i
 *   toRegExp(new Date("2025-09-06")) => /2025-09-06T00:00:00.000Z/i
 */
export default function toRegExp(value, options = { global: true, ignoreCase: true, multiline: false }) {
  if (value instanceof RegExp) return value;

  let pattern = '';
  let flags = '';

  const handlers = {
    string: v => {
      const match = v.match(/^\/(.+)\/([gimsuy]*)$/);
      return match ? { pattern: match[1], flags: match[2] } : { pattern: escapeRegExp(v), flags: '' };
    },
    number: v => ({ pattern: escapeRegExp(String(v)), flags: '' }),
    bigint: v => ({ pattern: escapeRegExp(String(v)), flags: '' }),
    boolean: v => ({ pattern: escapeRegExp(String(v)), flags: '' }),
    symbol: v => ({ pattern: escapeRegExp(String(v)), flags: '' }),
    function: v => ({ pattern: escapeRegExp(String(v)), flags: '' }),
    object: v => {
      if (v == null) return { pattern: '', flags: '' };
      if (Array.isArray(v)) return { pattern: escapeRegExp(v.map(String).join('')), flags: '' };
      if (v instanceof Date) return { pattern: escapeRegExp(v.toISOString()), flags: '' };
      if (v instanceof Map) return { pattern: escapeRegExp(JSON.stringify(Object.fromEntries(v.entries()))), flags: '' };
      if (v instanceof Set) return { pattern: escapeRegExp(JSON.stringify(Array.from(v))), flags: '' };
      if (v instanceof RegExp || v instanceof Promise) return { pattern: escapeRegExp(String(v)), flags: '' };
      return { pattern: escapeRegExp(String(v)), flags: '' };
    }
  };

  const type = typeof value;
  const handler = handlers[type] || handlers.object;
  const result = handler(value);

  pattern = result.pattern;
  flags = result.flags;

  if (!flags) {
    if (options.global) flags += 'g';
    if (options.ignoreCase) flags += 'i';
    if (options.multiline) flags += 'm';
  }

  try {
    return new RegExp(pattern, flags);
  } catch {
    return /^$/;
  }
                                                   }
