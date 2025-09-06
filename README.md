![npm](https://img.shields.io/npm/v/@livyn/type)
![License](https://img.shields.io/npm/l/@livyn/type)
![ESM](https://img.shields.io/badge/javascript-ESM-orange)
![Node](https://img.shields.io/badge/node-%3E=18.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

# @livyn/type

A comprehensive JavaScript/Node.js utility library for **type detection** and **type conversion** — made for simplicity, performance, and accuracy.

---

## ✨ Key Features

- 🧩 **Type Detection** – Detect the precise type of any value (`dataType`)
- 🔐 **Type Assertion** – Assert value types with optional negation (`assertType`)
- ✅ **Type Checking** – Check if a value matches a specific type (`isType`)
- 🔄 **Type Conversion** – Convert values to a specific type or all types (`toType`)
- 💡 **Supports:**
  - Primitives: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`
  - Built-in objects: `Array`, `Date`, `RegExp`, `Map`, `Set`, `Promise`
  - Functions: regular, async, generator
  - Custom classes

---

## 📦 Installation

```bash
npm install @livyn/type
```
---

## 📘 Usage

### Importing

```js
import typeUtils from '@livyn/type';

// or named imports
import { dataType, isType, toType, assertType } from '@livyn/type';
```

---

### `dataType`

Detects the precise type of a value.

```js
console.log(dataType(123));                  // "number"
console.log(dataType("hello"));              // "string"
console.log(dataType(null));                 // "null"
console.log(dataType([]));                   // "array"
console.log(dataType(async () => {}));       // "asyncfunction"
console.log(dataType(class User {}));        // "class"
```

---

### `isType`

Checks if a value matches an expected type.

```js
console.log(isType(123, "number"));          // true
console.log(isType("hello", "string"));      // true
console.log(isType([], "array"));            // true
console.log(isType(class User {}, "class")); // true
```

---

### `assertType`

Asserts that a value matches (or does not match) a type. Throws `TypeError` if invalid.

```js
assertType(123, "number");       // returns 123
assertType("hello", "!number");  // returns "hello"

try {
  assertType("abc", "!string");  // throws TypeError
} catch (e) {
  console.log(e.message);        // "Invalid type: expected not string, got string"
}
```

---

### `toType`

Converts a value to a specified type or all types.

```js
console.log(toType("123abc", "number")); // 123
console.log(toType("123abc", "bigint")); // 123n
console.log(toType("false", "boolean")); // false
console.log(toType({a:1,b:2}, "string")); // "{a: 1, b: 2}"

console.log(toType("abcd123")); // returns object with all type conversions
```

---

## Supported Types

- `number`, `bigint`, `boolean`, `string`, `array`, `date`, `object`, `regexp`

---

## 👤 Author

**[Dimas Fajar](https://github.com/fajardison)**

---

## ⚖️ License

This project is licensed under the **MIT License** – see the [LICENSE](https://raw.githubusercontent.com/fajardison/artiq-stylize/refs/heads/main/LICENSE) file for details.
