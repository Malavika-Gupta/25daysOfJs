//1
let num1 = 12;
let num2 = 13;
let sum = num1 + num2;
console.log("The sum is: " + sum);

//2
let difference=num2-num1;
console.log("The difference is: " + difference);

//3
let product = num1 * num2;
console.log("The product is: " + product);

//4
let num3 = 10;
let num4 = 5;
let quotient = num1 / num2;
console.log("The quotient is: " + quotient);

//5
let num5 = 10;
let num6 = 3;
let remainder = num1 % num2;
console.log("The remainder is: " + remainder);

//6
let num = 10;
num += 15;  
console.log("The new value of num is: " + num);

//7
num -= 5;  
console.log("The new value of num is: " + num);

//8
let num_1 = 10;
let num_2 = 5;

console.log("Is num1 greater than num2? " + (num_1 > num_2));  
console.log("Is num1 less than num2? " + (num_1 < num_2));     

//9
let num_3=10
console.log("Is num3 greater than or equal to num2? " + (num_3 >= num_2));  
console.log("Is num1 less than or equal to num2? " + (num_1 <= num_2));     

//10
let integer = 10;
let string = '10';
console.log("Is num1 equal to num2 (==)? " + (integer == string));  // true
console.log("Is num1 strictly equal to num2 (===)? " + (integer === string));  // false

//11
let a = 10;
let b = 5;
let c = 15;
let andResult = (a > b) && (c > a);
console.log("Are both conditions true? " + andResult);  // true

//12
let x = 10;
let y = 20;
let z = 15;
let orResult = (x > y) || (z > x);
console.log("Is at least one condition true? " + orResult);  // true

//13
let p = 10;
let q = 5;
let notResult = !(p < q);
console.log("Is the condition false? " + notResult);  // true

//14
let number = -10;
let result = (number >= 0) ? "The number is positive" : "The number is negative";
console.log(result);

//FR1
// Function to perform basic arithmetic operations
function arithmeticOperations(a, b) {
    console.log(`Addition: ${a} + ${b} = ${a + b}`);
    console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
    console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
    console.log(`Division: ${a} / ${b} = ${a / b}`);
    console.log(`Remainder: ${a} % ${b} = ${a % b}`);
}

//FR2
// Function to compare two numbers and use logical operators
function comparisonAndLogicalOperators(a, b) {
    console.log(`${a} == ${b}: ${a == b}`);
    console.log(`${a} != ${b}: ${a != b}`);
    console.log(`${a} > ${b}: ${a > b}`);
    console.log(`${a} < ${b}: ${a < b}`);
    console.log(`${a} >= ${b}: ${a >= b}`);
    console.log(`${a} <= ${b}: ${a <= b}`);
    
    console.log(`(${a} > 0 && ${b} > 0): ${a > 0 && b > 0}`);
    console.log(`(${a} > 0 || ${b} > 0): ${a > 0 || b > 0}`);
    console.log(`!(${a} > 0): ${!(a > 0)}`);
}

//FR3
// Function to determine if a number is positive or negative using the ternary operator
function ternaryOperator(number) {
    const result = number >= 0 ? 'Positive' : 'Negative';
    console.log(`The number ${number} is ${result}`);
}



