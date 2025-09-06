import { assertType } from '@livyn/type';

console.log(assertType(1, 'string'));   // 'abc'
console.log(assertType(123, 'number'));     // 123

console.log(assertType('abc', '!number'));  // 'abc'
console.log(assertType(123, '!string'));    // 123

console.log(assertType('abc', '!string'));  // Error: Invalid type: expected !string, got string
console.log(assertType(123, 'string'));     // Error: Invalid type: expected string, got number
