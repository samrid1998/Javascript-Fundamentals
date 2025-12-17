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

//Function Scopes

//Variables and function defined in the global scope

const sub1 = 60;
const sub2 = 40;
const student = "Champak";

function getScoreGlobal() {
  return `${student} scored ${sub1 + sub2}`;
}

console.log(getScoreGlobal()); // logs "Champak scored 100"

//Nested function
function getScore() {
  const sub1 = 20;
  const sub2 = 30;

  function add() {
    return `${student} scored ${sub1 + sub2}`;
  }

  return add();
}

console.log(getScore()); // logs "Champak scored 50"

/*
Closures
    A closure is any piece of source code (most commonly, a function) that refers to some variables, 
    and the closure "remembers" these variables even when the scope in which these variables were declared has exited.
*/

//Outer function i.e parent scope that defines a variable called "name"
const pet = function (name) {
  //Inner scope defined within the parent scope, which refers to variable "name" defined in the parent scope.
  const getName = function () {
    return name;
  };
  return getName; // Returns the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");
/*
The inner scope manages to survive beyond the lifetime of the parent scope. 
Here, it is saved to a variable that's defined outside the parent scope, 
and it's returned from the parent scope (as parent scope is a function).
*/

console.log(myPet());
/*
logs "Vivie" 
    Even when you call the function outside of the parent scope, 
    you can still access the variables or functions that were defined in the parent scope, 
    even though the parent scope has finished execution.
*/

/*
Another Example of Closures
    An object containing methods for manipulating the inner variables of the outer function being returned.
*/

const createAnimal = function (name) {
  let gender;

  const animal = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getGender() {
      return gender;
    },

    setGender(newGender) {
      if (
        typeof newGender === "string" &&
        (newGender.toLowerCase() === "male" ||
          newGender.toLowerCase() === "female")
      ) {
        gender = newGender;
      }
    },
  };

  return animal;
};

const animal = createAnimal("Pig");
console.log(animal.getName()); // logs "Pig"

animal.setName("Peppa Pig");
animal.setGender("male");
console.log(animal.getGender()); // logs "male"
console.log(animal.getName()); // logs "Peppa Pig"

/*
Scope Chaining with multiple nested functions
    Function A contains a function B, which itself contains a function C.
    Both functions B and C form closures here. So, B can access A, and C can access B.
    In addition, since C can access B which can access A, C can also access A.

    Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it.
    This is called scope chaining. 
*/

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs "6" (i.e 1 + 2 + 3)

/*
Scope Chain and Name conflicts
    When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. 
    More nested scopes take precedence. 
    So, the innermost scope takes the highest precedence, while the outermost scope takes the lowest. 
    This is the scope chain.
*/

function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}
console.log(outside()); // Here outside() returns the inside() function
console.log(outside()(10)); // The returned inside() function is immediately invoked with the argument 10.

/*
logs "20"
    The name conflict happens at the statement return x * 2 and is between inside's parameter x and outside's variable x. 
    The scope chain here is inside => outside => global object. 
    Therefore, inside's x takes precedences over outside's x, and 20 (inside's x) is returned instead of 10 (outside's x).
*/

/*
Using the arguments object
    The arguments of a function are maintained in an array-like object. 
    Within a function, you can address the arguments passed to it as arguments[i]; where i is the ordinal number of the argument, 
    starting at 0. So, the first argument passed to a function would be arguments[0]. 
    The total number of arguments is indicated by arguments.length.
    Using the arguments object, you can call a function with more arguments than it is formally declared to accept. 
    This is often useful if you don't know in advance how many arguments will be passed to the function. 
*/

function myConcat(separator) {
  let result = "";

  for (let i = 1; i < arguments.length; i++) {
    /* 
    Using arguments.length to determine the number of arguments actually passed to the function, 
    and then access each argument using the arguments object. 
    */

    result += arguments[i];

    if (i !== arguments.length - 1) {
      result += separator;
    }
  }

  return result;
}

//You can pass any number of arguments to this function, and it concatenates each argument into a string "list":
console.log(myConcat(", ", "red", "orange", "blue")); //logs "red, orange, blue"
console.log(myConcat(" & ", "apple", "banana")); // logs "apple, banana"

/*
Note
    The arguments variable is "array-like", but not an array. 
    It is array-like in that it has a numbered index and a length property.
    However, it does not possess all of the array-manipulation methods.
*/

/*
Function Parameters
    Default Paremeters
    Rest Parameters
*/

/*
Default Parameters
    In JavaScript, parameters of functions default to undefined. 
    However, in some situations it might be useful to set a different default value. 
    This is exactly what default parameters do.
*/

function multiplyDefault(a, b = 1) {
  return a * b;
}

console.log(multiplyDefault(5)); // logs "5" using the default value b = 1
console.log(multiplyDefault(5, 2)); // logs "10"

/*
Rest Parameters
    The rest parameter syntax allows us to represent an indefinite number of arguments as an array. 
    In the following example, the function multiply uses rest parameters to collect arguments from the second one to the end. 
    The function then multiplies these by the first argument.
*/

function multiplyRest(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const twoMultiplication = multiplyRest(2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const threeMultiplication = multiplyRest(3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(twoMultiplication); // logs "[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]"
console.log(threeMultiplication); // logs "[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]"

/*
Arrow Functions
    An arrow function expression (also called a fat arrow to distinguish from a hypothetical -> syntax in future JavaScript)
    has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. 
    Arrow functions are always anonymous.

    Two factors influenced the introduction of arrow functions: 
        shorter functions
        non-binding of this.
*/

//Shorter functions
function multiplyArrow(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
  /*
  Without arrow function, this would have been longer.
  return theArgs.map(function (x) {
    return multiplier * x;
  });
  */
}

const fourMultiplication = multiplyArrow(4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(fourMultiplication); // logs "[4, 8, 12, 16, 20, 24, 28, 32, 36, 40]"

/*
Non-binding this
    Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, 
    undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). 
    This proved to be less than ideal with an object-oriented style of programming.
    
    An arrow function does not have its own this; the this value of the enclosing execution context is used. 
    Thus, in the following code, the this within the function that is passed to setInterval has the same value 
    as this in the enclosing function:
*/

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` properly refers to the person object
  }, 1000);
}

const p = new Person();
console.log(p);
