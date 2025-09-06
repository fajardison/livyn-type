import { dataType } from '@livyn/type';

// primitives
console.log(dataType(123));              // "number"
console.log(dataType("string"));          // string
console.log(dataType(true));             // "boolean"
console.log(dataType(null));             // "null"
console.log(dataType(undefined));        // "undefined"
console.log(dataType(10n));              // "bigint"
console.log(dataType(Symbol("id")));     // "symbol"

// object bawaan
console.log(dataType({}));               // "object"
console.log(dataType([]));               // "array"
console.log(dataType(new Date()));       // "date"
console.log(dataType(/regex/));          // "regexp"
console.log(dataType(new Map()));        // "map"
console.log(dataType(new Set()));        // "set"
console.log(dataType(Promise.resolve())); // "promise"

// function
console.log(dataType(() => {}));         // "function"
function ff() {}
console.log(dataType(ff));                // "function"


console.log(dataType(async function f() {}));                // "asyncfunction"

console.log(dataType(function* g() {}));                // "generatorfunction"

// custom class
console.log(dataType(class User {}))
