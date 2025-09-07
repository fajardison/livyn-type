import { assertType } from '@livyn/type';

console.log(assertType("hello", "string"));   // ✅ "hello"
console.log(assertType(123, "number"));       // ✅ 123
console.log(assertType([1,2,3], "array"));    // ✅ [1,2,3]

// ❌ Contoh gagal
try {
  assertType(123, "string");
} catch (err) {
  console.error("Error:", err.message);
  // Output: Error: Invalid type: expected string, got number
}

// ✅ Negasi
console.log(assertType("abc", "!number")); // ✅ karena bukan number

try {
  assertType(123, "!number"); // ❌ harusnya bukan number
} catch (err) {
  console.error("Error:", err.message);
}
