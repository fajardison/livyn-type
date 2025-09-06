/**
 * Escapes a string for use in a regular expression.
 *
 * Replaces special regex characters, whitespace, and commas:
 *   - Special characters (.*+?^${}()|[\]\) are escaped
 *   - Spaces are replaced with \s+
 *   - Commas are made optional (',?')
 *
 * @param {string} str - The string to escapeRegExp.
 * @returns {string} The escaped string suitable for RegExp.
 *
 * Examples:
 *   escapeRegExp("a.b") => "a\.b"
 *   escapeRegExp("hello world") => "hello\s+world"
 *   escapeRegExp("1,2,3") => "1,?2,?3"
 */
export default function escapeRegExp(str) {
  if (!str) return '';
  return str
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\s+/g, '\\s+')
    .replace(/,/g, ',?');
}
