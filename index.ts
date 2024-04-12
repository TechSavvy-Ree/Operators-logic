// 1. Hello Variable
let greeting: string = "Hello, World!";
console.log(greeting);

// 2. Basic Math
let number1: number = 10;
let number2: number = 5;
console.log("Sum:", number1 + number2);
console.log("Difference:", number1 - number2);
console.log("Product:", number1 * number2);
console.log("Quotient:", number1 / number2);

// 3. Swapping Values
let m: number = 1;
let n: number = 2;
console.log("Before swapping:", m, n);
[m, n] = [n, m];
console.log("After swapping:", m, n);

// 4. Type Annotation
let message: string = "Hello";
// message = 123; // Uncommenting this line will cause a TypeScript error

// 5. Modulus Operator
let num1: number = 10;
let num2: number = 3;
console.log("Remainder:", num1 % num2);

// 6. Increment Challenge
let counter: number = 0;
console.log("Before increment:", counter);
counter++;
console.log("After increment #1:", counter);
counter += 1;
console.log("After increment #2:", counter);

// 7. Logical Gates
let a: boolean = true;
let b: boolean = false;
let c: boolean = true;
console.log("AND gate:", a && b);
console.log("OR gate:", a || b);
console.log("NOT gate for c:", !c);

// 8. Compound Assignment
let num: number = 10;
num += 5; // num is now 15
num -= 3; // num is now 12
num *= 2; // num is now 24
num /= 4; // num is now 6

// 9. Even or Odd
let o: number = 7;
if (o % 2 === 0) {
  console.log(o + " is even.");
} else {
  console.log(o+ " is odd.");
}

// 10. Voting Eligibility
let age: number = 21;
if (age >= 18) {
  console.log("Eligible to vote.");
} else {
  console.log("Not eligible to vote.");
}

// 11. Grading System
let score: number = 85;
let grade: string;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Grade:", grade);

// 12. Max of Three
let x: number = 10;
let y: number = 20;
let z: number = 15;
let max: number = Math.max(x, y, z);
console.log("Maximum of three numbers:", max);

// 13. Leap Year Checker
let year: number = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

// 14. Fahrenheit to Celsius Converter
let fahrenheit: number = 32;
let celsius: number = (fahrenheit - 32) * (5 / 9);
console.log(fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C.");

// 15. Positive, Negative, or Zero
let number: number = -5;
if (number > 0) {
  console.log(number + " is positive.");
} else if (number < 0) {
  console.log(number + " is negative.");
} else {
  console.log(number + " is zero.");
}

// 16. Multiplication Table
let numbers: number = 5;
console.log("Multiplication table for", numbers);
for (let i = 1; i <= 10; i++) {
  console.log(numbers + " x " + i + " = " + numbers * i);
}