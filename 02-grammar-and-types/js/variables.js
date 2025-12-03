/*
Variable Declaration
    In a statement like let x = 123, the let x part is called a declaration, and the = 123 part is called an initializer.
    The declaration allows the variable to be accessed later in code without throwing a ReferenceError,
    while the initializer assigns a value to the variable. 
    In var and let declarations, the initializer is optional. 
    If a variable is declared without an initializer, it is assigned the value undefined.
    In essence, `let x = 42` is equivalent to `let x; x = 42`.

    Meanwhile, const declarations always need an initializer, because they forbid any kind of assignment after declaration, 
    and implicitly initializing it with undefined is likely a programmer mistake.
 */

let x;
console.log(x); // logs "undefined"

x = 123;
console.log(x); // logs "123"

// const y; // logs "SyntaxError: Missing initializer in const declaration'
/*
Note:
    const declaration without the initializer is a syntax error and this error won't let the other code run.
    So, I have commented const y above.
*/

const PI = 3.14;
console.log(PI); // logs "3.14"
// PI = 3.15; // logs "TypeError: Assignment to constant variable.""

/*
Note:
    Because it throws a TypeError and stops the code below to run, it is commented.

    However, const only prevents re-assignments, but doesn't prevent mutations. 
    The properties of objects assigned to constants are not protected, so the following statement is executed without problems.
*/

const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT); // logs "{key: 'otherValue'}"

//Also,the contents of an array are not protected, so the following statement is executed without problems.
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // logs ['HTML', 'CSS', 'JAVASCRIPT'];

/*
Variable Scope
    Global scope: The default scope for all code running in script mode.
    Module scope: The scope for code running in module mode.
    Function scope: The scope created with a function.

In addition, variables declared with let or const can belong to an additional scope:
    Block scope: The scope created with a pair of curly braces (a block).
*/

if (true) {
  var a = 1;
  let b = 2;
}
console.log(a);
/*
    logs "1" because variables created with var are not block-scoped, 
    but only local to the function (or global scope) that the block resides within.
*/

// console.log(b);
/*
    logs "ReferenceError: b is not defined"
    because let and const declarations can also be scoped to the block statement that they are declared in.
    Because it throws a ReferenceError and stops the code below to run, it is commented.
*/

/*
Variable Hoisting
    var-declared variables are hoisted, meaning you can refer to the variable anywhere in its scope, 
    even if its declaration isn't reached yet. 
    However, if you access a variable before it's declared, the value is always undefined, 
    because only its declaration and default initialization (with undefined) is hoisted, but not its value assignment.

    Whether let and const are hoisted is a matter of definition debate. 
    Referencing the variable in the block before the variable declaration always results in a ReferenceError,
    because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.
*/

var z;
console.log(z); // logs "undefined", doesn't throw any error.
console.log(z === undefined); // logs "true"
z = 3;

// console.log(p);
/*
    logs "ReferenceError: Cannot access 'p' before initialization"
    because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.
    Because it throws a ReferenceError and stops the code below to run, it is commented.
*/
let p = 3;

/*
Global Variables
    Global variables are in fact properties of the global object.
    In web pages, the global object is window, so you can read and set global variables using the window.variable syntax. 
*/

var q = 4;
let r = 5;
console.log(window); // logs "Window {window: Window, self: Window, document: document, name: '', location: Location, …}"
console.log(window.q); // logs "4";
console.log(window.r); // logs "undefined"
window.r = 5;
console.log(window.r); // logs "5"

/*
    let and const are block-scoped and do not attach themselves to the global window object. 
    Only var (or explicitly attaching to window) will show up there.
*/
