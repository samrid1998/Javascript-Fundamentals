/*
Bitwise operators
    A bitwise operator treats their operands as a set of 32 bits (zeros and ones), 
    rather than as decimal, hexadecimal, or octal numbers. 
    For example, the decimal number nine has a binary representation of 1001. 
    Bitwise operators perform their operations on such binary representations, 
    but they return standard JavaScript numerical values.
    
    Types of bitwise operators:
        Bitwise logical operators
        Bitwise Shift operators
*/

/*
Bitwise logical operators
    The operands are converted to thirty-two-bit integers and expressed by a series of bits (zeros and ones). 
    Numbers with more than 32 bits get their most significant bits discarded.
    Types of bitwise logical operators:
        Bitwise AND (a & b) : Returns a one in each bit position for which the corresponding bits of both operands are ones.
        Bitwise OR (a | b) : Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
        Bitwise XOR (a ^ b) : Returns a zero in each bit position for which the corresponding bits are the same. 
            [Returns a one in each bit position for which the corresponding bits are different.]
        Bitwise NOT (~a) : Inverts the bits of its operand.
*/

const num1 = 15;
const num2 = 9;

console.log(num1 & num2); // logs "9" - binary description -> 1111 & 1001 = 1001
console.log(num1 | num2); // logs "15" - binary description -> 1111 | 1001 = 1111
console.log(num1 ^ num2); // logs "6" - binary description -> 1111 ^ 1001 = 0110

console.log(~num1); // logs "-16" - binary description -> ~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000
console.log(~num2); // logs "-10" - binary description -> ~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110

/*
Note that all 32 bits are inverted using the Bitwise NOT operator, 
and that values with the most significant (left-most) bit set to 1 represent negative numbers 
(two's-complement representation). ~x evaluates to the same value that -x - 1 evaluates to.
*/

/*
Bitwise shift operators
    The bitwise shift operators take two operands: the first is a quantity to be shifted, 
    and the second specifies the number of bit positions by which the first operand is to be shifted. 
    The direction of the shift operation is controlled by the operator used.
    Types of bitwise shift operators:
        Left shift (<<) : This operator shifts the first operand the specified number of bits to the left. 
            Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.
        Sign-propagating right shift (>>) : This operator shifts the first operand the specified number of bits to the right. 
            Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left.
        Zero-fill right shift (>>>) : This operator shifts the first operand the specified number of bits to the right. 
            Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left.
*/

const numToShift = 9;
const numToShiftBy = 2;

console.log(numToShift << numToShiftBy); // logs "36" - because 9 i.e 1001 shifted 2 bits to the left becomes 100100, which is 36.
console.log(numToShift >> numToShiftBy);
/*
logs "2" - because 9 i.e 1001 shifted 2 bits to the right becomes 10,
which is 2. Likewise, -9>>2 yields -3, because the sign is preserved.
*/
console.log(numToShift >>> numToShiftBy); // logs "2" - because 1001 shifted 2 bits to the right becomes 10, which is 2.

// Note : For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result.

/*
Logical operators
    Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.
    However, the &&, ||, and ?? operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value. 
    As such, they are more adequately called "value selection operators".
    Types of Logical operators:
        Logical AND (expr1 && expr2)
        Logical OR (expr1 || expr2)
        Logical NOT (!expr)
        Nullish coalescing operator (expr1 ?? expr2)
*/

/*
Note
    Examples of expressions that can be converted to false are those that evaluate to null, 0, 0n, NaN, the empty string (""), 
    or undefined.
*/

/*
Logical AND (expr1 && expr2) : Returns expr1 if it can be converted to false; otherwise, returns expr2. 
Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
Following are the examples of Logical AND (&&) operator:
*/

const a1 = true && true; // true && true returns true
const a2 = true && false; // true && false returns false
const a3 = false && true; // false && true returns false
const a4 = false && 3 === 4; // false && falses returns false
const a5 = "Cat" && "Dog"; // true && true returns Dog
const a6 = false && "Cat"; // false && true returns false
const a7 = "Cat" && false; // true && false returns false
console.log(a1, a2, a3, a4, a5, a6, a7); // logs "true false false false 'Dog' false false"

/*
Logical OR (expr1 || expr2) : Returns expr1 if it can be converted to true; otherwise, returns expr2. 
Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
Following are the examples of Logical OR (||) operator:
*/

const o1 = true || true; // true || true returns true
const o2 = false || true; // false || true returns true
const o3 = true || false; // true || false returns true
const o4 = false || 3 === 4; // false || false returns false
const o5 = "Cat" || "Dog"; // true || true returns Cat
const o6 = false || "Cat"; // false || true returns Cat
const o7 = "Cat" || false; // true || false returns Cat
console.log(o1, o2, o3, o4, o5, o6, o7); // logs "true true true false 'Cat' 'Cat' 'Cat'"

/*
Nullish coalescing operator (expr1 ?? expr2) : Returns expr1 if it is neither null nor undefined; otherwise, returns expr2.
Following are the examples of Nullish coalescing operator:
*/

const n1 = null ?? 1; // returns 1
const n2 = undefined ?? 2; // returns 2
const n3 = false ?? 3; // returns false
const n4 = 0 ?? 4; // returns 0
console.log(n1, n2, n3, n4); // logs "1 2 false 0"

/*
Note how ?? works like ||, but it only returns the second expression when the first one is "nullish", i.e., null or undefined.
?? is a better alternative than || for setting defaults for values that might be null or undefined,
in particular when values like '' or 0 are valid values and the default should not apply.
*/

/*
Logical NOT (!expr) : Returns false if its single operand can be converted to true; otherwise, returns true.
Following are the examples of NOT operator:
*/
const n5 = !true; // !true returns false
const n6 = !false; // !false returns true
const n7 = !"Cat"; // !true returns false
console.log(n5, n6, n7); // logs "false true false"

/*
Big Int operators
    Most operators that can be used between numbers can be used between BigInt values as well.
*/

//BigInt addition
const b1 = 1n + 2n; // 3n

//Division with BigInts round towards zero
const b2 = 1n / 2n; // 0n

//Bitwise operations with BigInts do not truncate either side
const b3 = 40000000000000000n >> 2n; // 10000000000000000n
console.log(b1, b2, b3); // logs "3n 0n 10000000000000000n"

/*
Note
    One exception is unsigned right shift (>>>), which is not defined for BigInt values. 
    This is because a BigInt does not have a fixed width, so technically it does not have a "highest bit".
*/

// const e1 = 8n >>> 2n;
/* 
logs "remaining-operators.js:163 Uncaught TypeError: BigInts have no unsigned right shift, 
use >> instead"

Note: The above code i.e e1 declaration is commented because it throws an error.
*/

/*
Also, BigInts and numbers are not mutually replaceable — you cannot mix them in calculations.
The code below throws an error.
*/

// const e2 = 1n + 2;
/*
logs "Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions"

This is because BigInt is neither a subset nor a superset of numbers. 
BigInts have higher precision than numbers when representing large integers, but cannot represent decimals, 
so implicit conversion on either side might lose precision. 

Note: The above code i.e e2 declaration is commented because it throws an error.
*/

//Use explicit conversion to signal whether you wish the operation to be a number operation or a BigInt one like below.
const ec1 = Number(1n) + 2; // 3
const ec2 = 1n + BigInt(2); // 3n
console.log(ec1, ec2); //logs "3 3n"

//You can compare BigInts with numbers.
const cb1 = 1n > 2; // false
const cb2 = 3 > 2n; // true
console.log(cb1, cb2);

/*
String operators
    In addition to the comparison operators, which can be used on string values, 
    the concatenation operator (+) concatenates two string values together, 
    returning another string that is the union of the two operand strings.
*/

console.log("samrid " + "dangol"); // logs the string "samrid dangol".

//The shorthand assignment operator += can also be used to concatenate strings.

let myString = "sam";
myString += "rid"; // evaluates to "samrid" and assigns this value to myString.
console.log(myString);

/*
Conditional (ternary) operator
    The conditional operator is the only JavaScript operator that takes three operands. 
    The operator can have one of two values based on a condition. 
    The syntax is: condition ? val1 : val2

    If condition is true, the operator has the value of val1. Otherwise it has the value of val2. 
    You can use the conditional operator anywhere you would use a standard operator.
*/

let age = 27;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // logs "adult"

/*
Comma operator
    The comma operator (,) evaluates both of its operands and returns the value of the last operand. 
    This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop. 
    It is regarded bad style to use it elsewhere, when it is not necessary. 
    Often two separate statements can and should be used instead.
*/

/*
For example, if a is a 2-dimensional array with 10 elements on a side, 
the following code uses the comma operator to update two variables at once. 
The code prints the values of the diagonal elements in the array:
*/

const cx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ca = [cx, cx, cx, cx, cx];

for (let i = 0, j = 9; i <= j; i++, j--) {
  console.log(`a[${i}][${j}]= ${ca[i][j]}`);
  /*
  logs
    a[0][9]= 9
    a[1][8]= 8
    a[2][7]= 7
    a[3][6]= 6
    a[4][5]= 5
    */
}

/*
Unary Operator
    A unary operation is an operation with only one operand.
    Types:  
        delete
        typeof
        void
*/

/*
delete
    The delete operator deletes an object's property. The syntax is:
        delete object.property;
        delete object[propertyKey];
        delete objectName[index];

    where object is the name of an object, property is an existing property, and propertyKey is a string or symbol 
    referring to an existing property.

    If the delete operator succeeds, it removes the property from the object. Trying to access it afterwards will yield undefined. 
    The delete operator returns true if the operation is possible; it returns false if the operation is not possible.
*/
console.log(delete Math.PI); // returns false so logs false (cannot delete non-configurable properties)

const myObj = { prop: "object" };
console.log(myObj); // logs {prop: 'object'}
console.log(delete myObj.prop); // returns true (can delete user-defined properties)
console.log(myObj.prop); // logs "undefined"
console.log(myObj); // logs {}

/*
Note
Deleting array elements
    Since arrays are just objects, it's technically possible to delete elements from them. 
    This is, however, regarded as a bad practice — try to avoid it. When you delete an array property, 
    the array length is not affected and other elements are not re-indexed. To achieve that behavior, 
    it is much better to just overwrite the element with the value undefined. 
    To actually manipulate the array, use the various array methods such as splice.
*/

/*
typeof operator
    The typeof operator returns a string indicating the type of the unevaluated operand. 
    operand is the string, variable, keyword, or object for which the type is to be returned. The parentheses are optional.
*/

const func = () => "I'm a function";
const funcType = "arrow function";
const length = 1;
const funcArray = [func(), funcType, length];
const today = new Date();

console.log(typeof func); // logs "function"
console.log(typeof funcType); // logs "string"
console.log(typeof length); // logs "number"
console.log(typeof funcArray); // logs "object"
console.log(typeof today); // logs "object"
console.log(typeof doesntExist); // logs "undefined"

//Keywords
console.log(typeof true); // logs "boolean"
console.log(typeof null); // logs "object"

//Primitives
console.log(typeof 62); // logs "number"
console.log(typeof "Hello world"); // logs "string")

//Property Values
console.log(typeof funcArray[1]); // logs "string"
console.log(typeof funcArray.length); // logs "number"
console.log(typeof Math.PI); // logs "number"

//Methods and Objects
console.log(typeof blur); // logs "function"
console.log(typeof parseInt); // logs "function"

//Predefined Objects
console.log(typeof Date); // logs "function"
console.log(typeof Function); // logs "function"
console.log(typeof Math); // logs "object"
console.log(typeof Option); // logs "function"
console.log(typeof String); // logs "function"

/*
Relational Operator
    A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.
    Types of Relational Operator
        in
        instanceof
*/

/*
in
    The in operator returns true if the specified property is in the specified object. The syntax is:
        propNameOrNumber in objectName
    where propNameOrNumber is a string, numeric, or symbol expression representing a property name or array index, 
    and objectName is the name of an object.      
*/

//Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(2 in trees); // logs "true"
console.log(5 in trees); // logs "false"
console.log("cedar" in trees); // logs "false" -  as you must specify the index number, not the value at that index
console.log("length" in trees); //  logs "true" (length is an Array property)
console.log(trees.length); // logs "5"

//built-in objects
console.log("PI" in Math); // logs "true"
const string1 = new String("coral");
console.log("length" in string1); // logs "true"
console.log(string1.length); // logs "5"

//Custom objects
const myBike = { make: "Honda", model: "Aviator", year: 1998 };
console.log("make" in myBike); // logs "true"
console.log("model" in myBike); // logs "true"
console.log("color" in myBike); // logs "false"

/*
instanceof
    The instanceof operator returns true if the specified object is of the specified object type. The syntax is:
        object instanceof objectType
    where object is the object to test against objectType, and objectType is a constructor representing a type, such as Map or Array.

    Use instanceof when you need to confirm the type of an object at runtime. 
    For example, when catching exceptions, you can branch to different exception-handling code depending 
    on the type of exception thrown.
*/

const obj1 = new Array();
if (obj1 instanceof Map) {
  console.log("It is the instance of Map");
} else {
  console.log("It is not the instance of Map");
}
