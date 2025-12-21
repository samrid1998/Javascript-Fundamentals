/*
Expressions
    At a high level, an expression is a valid unit of code that resolves to a value. 

Operators
    Assignment operators
    Comparison operators
    Arithmetic operators
    Bitwise operators
    Logical operators
    BigInt operators
    String operators
    Conditional (ternary) operator
    Comma operator
    Unary operators
    Relational operators
*/

/*
Assignment Operator
    An assignment operator assigns a value to its left operand based on the value of its right operand. 
    The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. 
*/

let a = 4;
console.log(a); // logs "4"

function f() {
  return 5;
}

let b = f();
console.log(b); // logs "5"

/*
Operator Precedence
    The precedence of operators determines the order they are applied when evaluating an expression. 
*/

const p = 1 + 2 * 3;
const q = 2 * 3 + 1;
console.log(p, q); // logs "7 7"

/*
Note
    Despite * and + coming in different orders, both expressions would result in 7 
    because * has precedence over +, so the *-joined expression will always be evaluated first.
    You can override operator precedence by using parentheses (which creates a grouped expression — the basic expression).
*/

const r = (1 + 2) * 3;
console.log(r); // logs "9" - as operator inside the parantheses are evaluated first.

/*
Compound Assignment Operator
    There are also compound assignment operators that are shorthand for the arithmetic and assignment operations.
*/

a += 1;
b -= 1;
console.log(a, b); // logs "5 4" - as previously the values of a and b were 4 and 5 respectively.

a *= 2;
b /= 2;
console.log(a, b); // logs "10 2" - as previously the values of a and b were 5 and 4 respectively.

a %= 3;
b **= 3;
console.log(a, b); // logs "1 8" - as previously the values of a and b were 10 and 2 respectively.

a += f();
b -= f();
console.log(a, b); // logs "6 3" - as previously the values of a, b and f() were 1, 8 and 5 respectively.

a *= f();
b /= f();
console.log(a, b); // logs "30 0.6" - as previously the values of a, b and f() were 6, 3 and 5 respectively.

a %= f();
b **= f();
console.log(a, b); // logs "0 0.07775999999999998" - as previouly the values of a, b and f() were 30, 0.6 and 5 respectively.

/*
Assignment to properties
    If an expression evaluates to an object, then the left-hand side of an assignment expression 
    may make assignments to properties of that expression.
*/

const obj = {};

obj.x = 3;
console.log(obj.x); // logs "3"
console.log(obj); // logs { x: 3 }

const key = "y";
obj[key] = 5;
console.log(obj[key]); // logs "5"
console.log(obj); // logs { x: 3, y: 5 }.

/*
Destructuring
    For more complex assignments, the destructuring syntax is a JavaScript expression 
    that makes it possible to extract data from arrays or objects using a syntax 
    that mirrors the construction of array and object literals.
*/

//Without Destructuring
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];

console.log(one, two, three); // logs "one two three"

//With Destructuring
const fooo = ["four", "five", "six"];
const [four, five, six] = fooo;

console.log(four, five, six); // logs "four five six"

/*
Comparison operators
    A comparison operator compares its operands and returns a logical value based on whether the comparison is true. 
    The operands can be numerical, string, logical, or object values.
    If the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison.

    Types of comparison opertors:
        Equal (==)
        Not equal (!=)
        Greater than (>)
        Greater than or equal (>=)
        Less than (<)
        Less than or equal (<=)
        Strict equal (===)
        Strict not equal (!==)
*/

const var1 = 3;
const var2 = 4;

//Equal (==)
console.log(3 == var1, "3" == var1, 3 == "3"); // logs "true true true"

//Not equal (!=)
console.log(var1 != 4, var2 != "3"); // logs "true true"

//Greater than (>)
console.log(var2 > var1, "12" > 2); // logs "true true"

//Greater than or equal (>=)
console.log(var2 >= var1, var1 >= 3); // logs "true true"

//Less than (<)
console.log(var1 < var2, "2" < 12); // logs "true true"

// Less than or equal (<=)
console.log(var1 <= var2, var2 <= 5); // logs "true true"

/*
The sole exceptions to type conversion within comparisons involve the === and !== operators, 
which perform strict equality and inequality comparisons.
*/

//Strict equal (===)
console.log(3 === var1); // logs "true"

//Strict not equal (!==)
console.log(var1 !== "3", 3 !== "3"); // logs "true true"

/*
Arithmetic Operators
    An arithmetic operator takes numerical values (either literals or variables) 
    as their operands and returns a single numerical value. 
    The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/).
*/

let x = 2;
let y = 3;

let sum = x + y; // Addition
let difference = x - y; // Subtraction
let product = x * y; // Multiplication
let quotient = x / y; // Division

console.log(sum, difference, product, quotient); // logs "5 -1 6 0.6666666666666666"

/*In addition to the standard arithmetic operations (+, -, *, /), 
JavaScript also provides the arithmetic operators such as:
    Remainder (%)
    Exponentiation operator (**) 
    Increment (++)
    Decrement (--)
    Unary negation (-)
    Unary plus (+)
*/

/*
Remainder and exponentiation operator
    Remainder (%) : Binary operator. Returns the integer remainder of dividing the two operands.
    Exponentiation operator (**) : Calculates the base to the exponent power, that is, base^exponent.
*/

let remainder = x % y; // Modulo operator - returns remainder after division
let power = x ** y; // Exponentiation (**) – raises a to the power of b

console.log(remainder, power); // logs "2 8"

/*
Increment and Decrement operator
    Increment (++) : Unary operator. Adds one to its operand. 
        If used as a prefix operator (++x), returns the value of its operand after adding one; 
        if used as a postfix operator (x++), returns the value of its operand before adding one.
    Decrement (--) : Unary operator. Subtracts one from its operand. 
        The return value is analogous to that for the increment operator.
*/

//Used as prefix operator (changes value before use)

let c = 1;
console.log(++c); // logs "2" -> increment first, then use
console.log(--c); // logs "1" -> decrement first, then use

//Used as postfix operator (uses value before change)

let d = 1;
console.log(d++); // logs "1" -> use first, then increment
console.log(d); // logs "2"
console.log(d--); //logs "2" -> use first, then decrement
console.log(d); // logs "1"

/*
Unary negation and plus operator
    Unary negation (-) : Unary operator. Returns the negation of its operand.
    Unary plus (+) : Unary operator. Attempts to convert the operand to a number, if it is not already.
*/

let e = 1;
console.log(-e); // logs "-1"

console.log(typeof +"1"); // logs "number" - converts the string operand to a number
console.log(+true); // logs "1" - converts boolean operand to a number
