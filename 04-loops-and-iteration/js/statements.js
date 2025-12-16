/*
Loops
    Loops offer a quick and easy way to do something repeatedly.
    The statements for loops provided in JavaScript are:
        for statement
        do...while statement
        while statement
        labeled statement
        break statement
        continue statement
        for...in statement
        for...of statement
*/

/*
for statement
    for (initialization; condition; afterthought)
    statement
*/

for (i = 0; i < 5; i++) {
  console.log(`${i} -> for`);
  /* 
  logs 
  0 -> for
  1 -> for
  2 -> for
  3 -> for
  4 -> for
  */
}

/*
do...while statement
    do
        statement
    while (condition);
Statement is always executed once before the condition is checked.
*/

let j = 0;
do {
  j += 1;
  console.log(`${j} -> do-while`);
  /*
  logs
  1 -> do-while
  2 -> do-while
  3 -> do-while
  4 -> do-while
  5 -> do-while
  */
} while (j < 5);

/*
while statement
    while (condition)
        statement
The condition test occurs before statement in the loop is executed. 
If the condition returns false, execution stops, and control is passed to the statement following while.
*/

let m = 0;
let n = 0;
while (m < 3) {
  m++;
  console.log(`${m} ->while loop`);
  /*
  logs
  1 ->while loop
  2 ->while loop
  3 ->while loop
  */
}

/*
break statement
    break;
    break label;
Break statement is used to terminate a loop, switch, or in conjunction with a labeled statement.
*/

let arr = [8, 9, 10];
let theValue = 9;

for (let i = 0; i < arr.length; i++) {
  console.log(`Current Iteration ; ${i}`);
  /*
  logs 
  Current Iteration ; 0
  Current Iteration ; 1
  and jumps to line 95
  */
  if (arr[i] === theValue) {
    console.log(`Value found at index ${i} of an array`);
    // logs "Value found at index 1 of an array"
    break;
  }
}

/*
labelled statement
    label:statement
*/

//break with labelled statement
let p = 0;
let q = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", p); // runs once and jumps to the inner loop
  p += 1;
  q = 1;
  while (true) {
    console.log("Inner loops:", q); // runs twice i.e when q = 1 & q = 2 and jumps to the outer loop as soon as q = 3
    q += 1;
    if (q === 3 && p === 3) {
      break labelCancelLoops; // breaks out of outer loop labelled labelCancelLoops when both the value satisfies
    } else if (q === 3) {
      break; // breaks out of inner while loop when q = 3
    }
  }
}
/*
logs
Outer loops: 0
Inner loops: 1
Inner loops: 2
Outer loops: 1
Inner loops: 1
Inner loops: 2
Outer loops: 2
Inner loops: 1
Inner loops: 2
*/

/*
continue statement
    The continue statement can be used to restart a while, do-while, for, or label statement.
        with label: It applies to the looping statement identified with that label.
            continue label;
        without label: It terminates the current iteration of the innermost enclosing while, do-while, or for statement 
            and continues execution of the loop with the next iteration. 
            In a while loop, it jumps back to the condition. 
            In a for loop, it jumps to the increment-expression.
                continue;
        In contrast to the break statement, continue does not terminate the execution of the loop entirely.

*/

let c = 0;
let d = 0;
while (c < 5) {
  c++;
  if (c === 3) {
    continue;
    /*
        continue statement terminates the iteration when c = 3.
        If you comment out the continue;, the loop would run till the end and you would see 1,3,6,10,15.
    */
  }
  d += c;
  console.log(d);
  /* 
    Logs:
    1 
    3 
    7 
    12
    */
}

let i1 = 0;
let j1 = 10;
checkIandJ: while (i1 < 4) {
  console.log(i1);
  i1 += 1;
  checkJ: while (j1 > 4) {
    console.log(j1);
    j1 -= 1;
    if (j1 % 2 === 0) {
      continue;
    }
    console.log(j1, "is odd.");
  }
  console.log("i1 =", i1);
  console.log("j1 =", j1);
}
/*
logs 
0 // checkIandJ starts, runs the first line
10 // checkJ statement starts looping until the j1 is greater than 4
9 is odd
9
8
7 is odd
7
6
5 is odd
5 // checkJ statement ends as soon as j1 = 4
i1 = 1 // continues with remaining checkIandJ statements and runs until i1 is lesser than 4.
j1 = 4
1
i1 = 2
j1 = 4
2
i1 = 3
j1 = 4
3
i1 = 4
j1 = 4 // checkIandJ ends here as soon as i1 = 4

*/

/*
for...in statement
    The for...in statement iterates a specified variable over all the enumerable properties of an object.   
    for (variable in object)
        statement
*/

let car = {
  make: "Ford",
  model: "Mustang",
};

dumpProps(car, "car");

function dumpProps(obj, objName) {
  for (const i in obj) {
    console.log(`${objName}.${i} = ${obj[i]} `);
    /*
    logs
    car.make = Ford
    car.model = Mustang
    */
  }
}

/*
for...of statement
    The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on),
    invoking a custom iteration hook with statements to be executed for the value of each distinct property.
    for (variable of iterable)
        statement
*/

//Difference between for...in statement and for...of statement

const arr1 = [3, 5, 7];
arr1.foo = "hello";

for (const i in arr1) {
  console.log(i); // logs "0" "1" "2" "foo"
}

for (const i of arr) {
  console.log(i); // logs "3" "5" "7"
}

/*
The for...of and for...in statements can also be used with destructuring. 
For example, you can simultaneously loop over the keys and values of an object using Object.entries().
*/

let scooter = {
  make: "Honda",
  model: "Aviator",
};

dumpPropsScooter(scooter, "scooter");

function dumpPropsScooter(obj, objName) {
  for (const [key, val] of Object.entries(obj)) {
    console.log(key, val);
    /*
      logs
      scooter.make = Honda
      scooter.model = Aviator
      */
  }
}
