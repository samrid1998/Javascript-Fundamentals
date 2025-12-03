/*
Primitive Data Types
    String. A sequence of characters that represent a text value. For example: "Howdy".
    Number: An integer or floating point number. For example: 42 or 3.14159.
    Boolean: true and false.
    null: A special keyword denoting a null value.
    undefined: A top-level property whose value is not defined.
    BigInt: An integer with arbitrary precision. For example: 9007199254740992n.
    Symbol: A data type whose instances are unique and immutable.
*/

let name = "Samrid Dangol"; //String
let age = 28; //Number
let isStudent = true; //Boolean
let empty = null; //Null
let x1; //undefined
let bigInteger = 9007199254740992n; //BigInt
let id = Symbol("id"); //Symbol

console.log(typeof name); // logs "string"
console.log(typeof age); // logs "number"
console.log(typeof isStudent); // logs "boolean"
console.log(typeof empty); // logs "object"
console.log(typeof x1); // logs "undefined"
console.log(typeof bigInteger); // logs 'bigint'
console.log(typeof id); //logs "symbol"

/*
Non-primitive Data Types
    Object: Objects can be seen as a collection of properties. 
*/

const person = {
  firstName: "Samrid",
  age: 27,
};

console.log(typeof person); //logs "object"
