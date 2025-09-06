import { toType, dataType } from '@livyn/type';


console.log(toType("123abc", "number")); // 123
console.log(toType("123abc", "bigint")); // 123n
console.log(toType("false", "boolean")); // false
console.log(toType({a:1,b:2}, "string")); // "{a: 1, b: 2}"

console.log(toType('abcd123'));
