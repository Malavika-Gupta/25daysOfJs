//Task 1: Check if a number is even or odd
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      console.log(number + ' is even');
    } else {
      console.log(number + ' is odd');
    }
  }
isEvenOrOdd(4); // Output: 4 is even

//Task 2: Calculate the square of a number
function square(number) {
    return number * number;
  }

  console.log(square(5)); // Output: 25
  
//Task 3: Find the maximum of two numbers
const findMax = function(a, b) {
    console.log(Math.max(a, b));
  };

  findMax(7, 3); // Output: 7

//Task 4: Concatenate two strings
const concatenate = function(str1, str2) {
    return str1 + str2;
  };
  console.log(concatenate('Good ', 'morning')); // Output: Good morning
  
//Task 5: Calculate the sum of two numbers
const sum = (a, b) => a + b;
console.log(sum(10, 20)); // Output: 30

//Task 6: Check if a string contains a specific character
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter('World', 'a')); // Output: false

//Task 7: Return the product of two parameters with a default value
function multiply(a, b = 1) {
    return a * b;
  }
  console.log(multiply(5, 2)); // Output: 10

//Task 8: Return a greeting message
function greet(name, age = 'unknown') {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
  console.log(greet('Bob', 25)); // Output: Hello, my name is Bob and I am 25 years old.
  
//Task 9: Call a function a specified number of times
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
      fn();
    }
  }
  repeatFunction(() => console.log('Hello!'), 3);
  // Output: 
  // Hello!
  // Hello!
  // Hello!

//Task 10: Apply two functions to a value
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
  }
  const double = x => x * 2;
  const square = x => x * x;
  console.log(applyFunctions(double, square, 3)); // Output: 36
  console.log(applyFunctions(square, double, 3)); // Output: 18

//
  
  
  


  