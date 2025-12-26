/*
Basic Expressions
    All operators eventually operate on one or more basic expressions. 
    These basic expressions include identifiers and literals, but there are a few other kinds as well. 
    They are listed below,
        this
        new 
        super
*/
/*
this
    The this keyword is usually used within a function. In general, when the function is attached to an object as a method, 
    this refers to the object that the method is called on. 
    It functions like a hidden parameter that is passed to the function. 
    this is an expression that evaluates to the object, so you can use all the object operations we introduced.
        this["propertyName"];
        this.propertyName;
        doSomething(this);
*/

function getFullName() {
  return `${this.firstName}${this.middleName ? " " + this.middleName : ""} ${
    this.lastName
  }`;
}

//We can now attach this function to an object, and it will use the properties of that object when called:

const father = {
  firstName: "Harsha",
  middleName: "Narayan",
  lastName: "Dangol",
};

const mother = {
  firstName: "Maiya",
  lastName: "Dangol",
};

//Attach the same function
father.getFullName = getFullName;
mother.getFullName = getFullName;

console.log(father); // logs {firstName: 'Harsha', middleName: 'Narayan', lastName: 'Dangol', getFullName: ƒ}
console.log(father.getFullName()); // logs "Harsha Narayan Dangol"
console.log(mother); // logs {firstName: 'Maiya', lastName: 'Dangol', getFullName: ƒ}
console.log(mother.getFullName()); // logs "Maiya Dangol"

/*
Grouping Operator
    The grouping operator ( ) controls the precedence of evaluation in expressions. 
    For example, you can override multiplication and division first, then addition and subtraction to evaluate addition first.
*/

const numOne = 1;
const numTwo = 2;
const numThree = 3;

//default precedence
console.log(numOne + numTwo * numThree); // logs "7" - evaluated by default like numOne + (numTwo * numThree)
//console.log(numOne + (numTwo * numThree)); // logs "7"
//The above code is commented because my code formatter kept removing the brackets inside the console.log bracket.

//now overriding precedence
console.log((numOne + numTwo) * numThree); // logs "9" - addition before multiplication which is equivalent to a1 * c1 + b1 * c1
console.log(numOne * numThree + numTwo * numThree); // logs "9"

/*
Property accessor
    The property accessor syntax gets property values on objects, using either dot notation or bracket notation.
        object.property;
        object["property"];
*/

console.log(father.firstName); // logs "Harsha"
console.log(father["middleName"]); // logs "Narayan"
console.log(mother.lastName); // logs "Dangol"

/*
Optional Chaining
    The optional chaining syntax (?.) performs the chained operation on an object if it is defined and non-null, 
    and otherwise short-circuits the operation and returns undefined. 
    This allows you to operate on a value that may be null or undefined without causing a TypeError.
*/
const son = { firstName: "Samrid" };
console.log(son.name); // logs "undefined"
//console.log(son.name[0]); // logs "Uncaught TypeError: Cannot read properties of undefined (reading '0')"
//The above code is commented because it throws an error.

console.log(son?.name?.[0]); // logs "undefined"
console.log(son?.firstName); // logs "Samrid"
console.log(son?.firstName?.[0]); // logs "S"

/*
new
    You can use the new operator to create an instance of a user-defined object type or of one of the built-in object types. 
    Use new as follows:
        const objectName = new ObjectType(param1, param2, /* …, *\/ paramN);
*/

const family = new Array("Dad", "Mom");
console.log(family); // logs ['Dad', 'Mom']
console.log(typeof family); // logs "object"

/*
super
    The super keyword is used to call functions on an object's parent. 
    It is useful with classes to call the parent constructor, for example.
        super(args); // calls the parent constructor.
        super.functionOnParent(args);
*/

class Parent {
  constructor(lastName) {
    this.lastName = lastName;
  }
}

class Child extends Parent {
  constructor(firstName, lastName) {
    super(lastName);
    this.firstName = firstName;
    /*
    Note if this operator is called before super(), it throws an error 
    "Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or 
    returning from derived constructor at new Child"s
    */
  }
}
const child = new Child("Samrid", "Dangol");
console.log(child.firstName); // logs "Samrid"
console.log(child.lastName); // logs "Dangol"
