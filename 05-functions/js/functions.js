/*
Functions
    A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, 
    but for a procedure to qualify as a function, it should take some input and return an output 
    where there is some obvious relationship between the input and the output. 
*/

function calcuateSquareArea(length) {
  console.log(`The area of the square is ${length * length}.`); // logs "The area of the square is 144."
}

calcuateSquareArea(12); //Calling the function with argument 12.

/*
Note
    Defining a function does not execute it. 
    Calling the function actually performs the specified actions with the indicated parameters.
*/

/*
Note
    Functions must be in scope when they are called, but the function declaration can be hoisted 
    (appear below the call in the code).  Function Hoisting is discussed below.
    The scope of a function declaration is the function in which it is declared 
    (or the entire program, if it is declared at the top level)./
*/

/*
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
    The name of the function like calculateSquareArea above.
    The JavaScript statements that define the function, enclosed in curly braces, { … } like the console.log above.
    A list of parameters to the function, enclosed in parentheses and separated by commas like length above.

    Note: Parameters are essentially passed to functions by value — 
    so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function,
    the change is not reflected globally or in the code which called that function.
*/

/*
    When you pass an object as a parameter, 
    if the function changes the object's properties, that change is visible outside the function as shown in the following example:
*/

let scooter = {
  model: "aviator",
};

function newScooter(scooter) {
  scooter.model = "ather";
}

console.log(scooter.model); // logs "aviator"

newScooter(scooter);

console.log(scooter.model); //logs "ather"

//Same for arrays that are passed to the function as a paramter

let office = ["SnigdhTech"];

function newOffice() {
  office[0] = "AlpinistStudios";
}

console.log(office[0]); // logs "SnigdhTech"

newOffice(office);

console.log(office[0]); //logs "AlpinistStudios"

/*
Function declarations and expressions can be nested, which forms a scope chain.
*/

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

let squares = addSquares(12, 16);
console.log(squares); //logs "400"

/*
Function expressions
    While the function declaration above is syntactically a statement, functions can also be created by a function expression.
    Such a function can be anonymous; it does not have to have a name. 
    For example, the function calculateSquareArea could have been defined as:
*/

const calculateSquareAreaExp = function (length) {
  return `The area of the square is ${length * length}.`; // logs "The area of the square is 144.";
};

console.log(calculateSquareAreaExp(12));

/*
However, a name can be provided with a function expression. Providing a name allows the function to refer to itself, 
and also makes it easier to identify the function in a debugger's stack traces:
*/

const calculateFactorial = function fact(n) {
  return n < 2 ? 1 : n * fact(n - 1);
};

console.log(calculateFactorial(3)); // logs "6"
console.log(calculateFactorial(8)); // logs "40320"

/*
    Function expressions are convenient when passing a function as an argument to another function. 
    The following example defines a map function that should receive a function as first argument and an array as second argument. 
    Then, it is called with a function defined by a function expression:
*/

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // logs [0, 1, 8, 125, 1000]

//In JavaScript, a function can be defined based on a condition. For example,

let myFunction;
let num = 0;
if (num === 0) {
  myFunction = function () {
    console.log("Function defined inside if statement is running");
  };
}

/*
A function can call itself. A function that calls itself is called a recursive function.
For example, here is a function that computes factorials recursively:
*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(
  factorial(1),
  factorial(2),
  factorial(3),
  factorial(4),
  factorial(5)
); // logs "1 2 6 24 120"

//Function Hoisting
console.log(square1(5)); // 25

function square1(n) {
  return n * n;
}

/*
    This code runs without any error, despite the square() function being called before it's declared. 
    This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, 
    so the code above is equivalent to the function below:
*/

function square2(n) {
  return n * n;
}

console.log(square2(5)); // 25

/*
Note
    Function hoisting only works with function declarations — not with function expressions. 
*/
