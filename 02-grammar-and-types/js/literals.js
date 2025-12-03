/*
Literals
    Literals represent values in JavaScript. These are fixed values—not variables—that you literally provide in your script. 
    This section describes the following types of literals:
        Array literals
        Boolean literals
        Numeric literals
        Object literals
        RegExp literals
        String literals
*/

/*
Array Literals
    An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets ([]).
    The length is set to the number of arguments specified.
*/

const fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // logs "3"

/*
Boolean Literals
    The Boolean type has two literal values: true and false.
*/

const isWinter = true;
console.log(isWinter); // logs "true"

/*
Numeric Literals
    Numeric literals include integer literals in different bases as well as floating-point literals in base-10.
        Integer Literals: Integer literals Integer and BigInt literals can be written 
            in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).
        Floating Point Literals: A floating-point literal can have the following parts:
                An unsigned decimal integer, a decimal point (.), afraction (another decimal number),a exponent.
 */

let num = 100; //Integer Literal
const pi = 3.14159265359; //Floating Point Literal
console.log(num, pi); // logs "100 3.14159265359"

/* 
Object Literals
    An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).
*/

const family = {
  father: "Harsha Narayan Dangol",
  mother: "Maiya Dangol",
  child: { 4: "Samrid Dangol" },
};
console.log(family.father, family.mother, family.child[4]); // logs "Harsha Narayan Dangol Maiya Dangol Samrid Dangol"

/*
RegExp literals
    A regex literal is a pattern enclosed between slashes.
*/

const re = /ab+c/;
console.log(re); // logs "/ab+c/"

/*
String Literals
    A string literal is zero or more characters enclosed in double (") or single (') quotation marks.
    You can call any of the String object's methods on a string literal value like length.
*/

let familyName = "Dangol";
console.log(familyName, familyName.length); // logs "Dangol 6"
console.log("Dangol".length); // logs 6

/*
Template Literals 
    Template literals are enclosed by the back-tick (`) (grave accent) character instead of double or single quotes.
    Template literals provide syntactic sugar for constructing strings. 
*/

let firstName = "Samrid";
let lastName = "Dangol";
let birthYear = 1998;
let presentYear = 2025;
let studyingJavaScript = true;

//Template Strings
console.log(
  `My name is ${firstName} ${lastName} and I'm ${
    presentYear - birthYear
  } years old. It is ${studyingJavaScript} that I'm studying JavaScript.`
);

// logs "My name is Samrid Dangol and I'm 27 years old. It is true that I'm studying JavaScript."
