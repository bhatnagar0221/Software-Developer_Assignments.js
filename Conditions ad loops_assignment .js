//  Ans 1:
//  Conditional statements are such statements in which either one of the condition is satisfying then it will be executed.
// Example:
const drivingAge = 15;
if (drivingAge >= 18) {
  console.log("You can get the driving license");
} else {
  console.log("You cannot get the driving license");
}

// Ans 2:
const grade = 95;
if (grade > 90) {
  console.log("A Grade");
} else if (grade < 90 && grade > 70) {
  console.log("B Grade");
} else if (grade > 50 && grade < 70) {
  console.log("C Grade");
} else {
  console.log("F Grade");
}

// Ans 3
// Loops are used to perform iterations. There are two loops:  For loop and While Loop
// Syntax: Suppose we need to print no from 1 - 10
const num = 10;
for (let i = 1; i <= num; i++) {
  console.log(`Number printed will be ${i}`);
}

// Similarly we can use while loop to perform same operation
let i = 0;
while (i < num) {
  console.log(`Number is ${i}`);
  i++;
}

// Ans 4:
const num1 = 10;
const num2 = 25;
console.log(Math.random(10, 25) + 10);

// Ans 5:
const orderIncAndDec = 25;
let j = 0;
while (j < orderIncAndDec) {
  console.log(`Ascending order is ${j}`);
  j++;
}

let k = orderIncAndDec;
while (k > 0) {
  console.log(`Descending order is ${k}`);
  k--;
}
