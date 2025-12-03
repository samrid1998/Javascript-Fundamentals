/*
Block statements 
    Block statements are control flow statements (if, for, while).
Conditional Statements
    A conditional statement is a set of commands that executes if a specified condition is true.
    JavaScript supports two conditional statements: if...else and switch.
*/

/*
if..else statement
    Use the if statement to execute a statement if a logical condition is true. 
    Use the optional else clause to execute a statement if the condition is false.
*/

let isLearningJS = true;

if (isLearningJS) {
  console.log("I'm learning Javascript."); // logs "I'm learning Javascript."
} else {
  console.log("I'm not learning Javascript.");
}

/*
switch statement
    A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label.
    If a match is found, the program executes the associated statement.
*/

let relationshipStatus = "Single";

switch (relationshipStatus) {
  case "Single":
    console.log("I'm single."); // logs "I'm single."
    break;
  /*
    If break is omitted, the program continues execution inside the switch statement 
    (and will execute statements under the next case, and so on).

    The optional break statement associated with each case clause ensures that 
    the program breaks out of switch once the matched statement is executed
*/
  case "Married":
    console.log("I'm married.");
    break;
  case "Engaged":
    console.log("I'm engaged.");
    break;
  case "Divorced":
    console.log("I'm divorced.");
    break;
  case "Widowed":
    console.log("I'm widowed.");
    break;
  default:
    console.log("It's complicated.");
}

/*
Exception Handling Statements
    You can throw exceptions using the throw statement and handle them using the try...catch statements.
*/

let today = 9;
let tomorrow = 5;
try {
  // statements to try
  dayName = evaluateDayName(tomorrow); //function could throw exception
  anotherDayName = evaluateDayName(today); // throws exception
  /*
    Note: If the first try statement throws an exception, the second one won't run 
    because the control jumps straight into the catch block.
  */
} catch (e) {
  dayName = "unknown";
  console.error(e.name); // logs "statements.js:70 Error"
  console.error(e.message); // logs "statements.js:71 Invalid day code"
} finally {
  console.log("Have a nice day!"); // logs "Have a nice day!"
}

/*
It is also important to note that the finally block will execute whether or not an exception is thrown. 
If an exception is thrown, however, the statements in the finally block execute 
even if no catch block handles the exception that was thrown.
*/

function evaluateDayName(day) {
  day--; // Adjust day number for array index (so that 0 = Sun, 6 = Sat)
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (!days[day]) {
    throw new Error("Invalid day code"); // throw keyword is used here
  }
  console.log(`It's ${days[day]}.`); // logs "It's Thursday"
}
