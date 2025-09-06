import { isType } from '@livyn/type';

// primitives
console.log(isType(123, "number"));        // true
console.log(isType("hello", "string"));    // true
console.log(isType(true, "boolean"));      // true
console.log(isType(null, "null"));         // true
console.log(isType(undefined, "undefined"));// true
console.log(isType(10n, "bigint"));        // true
console.log(isType(Symbol("id"), "symbol"));// true

// object bawaan
console.log(isType({}, "object"));         // true
console.log(isType([], "array"));          // true
console.log(isType(new Date(), "date"));   // true
console.log(isType(/regexp/, "regexp"));   // true
console.log(isType(new Map(), "map"));     // true
console.log(isType(new Set(), "set"));     // true
console.log(isType(Promise.resolve(), "promise")); // true

// function
console.log(isType(() => {}, "function")); // true
function ff() {}
console.log(isType(ff, "function"));       // true
console.log(isType(async function f() {}, "asyncfunction")); // true
console.log(isType(function* g() {}, "generatorfunction")); // true

// custom class
class User {}
console.log(isType(User, "class"));        // true
