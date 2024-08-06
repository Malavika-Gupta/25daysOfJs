//Activity 1: Understanding Closures
//Task 1-Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
    let outerVariable = 'Hello, World!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Logs: Hello, World!

//Task 2-Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let counter = 0;

    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // Logs: 1
counter.increment();
console.log(counter.getValue()); // Logs: 2

//Activity 2: Practical Closures
//Task 3-Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIDGenerator() {
    let lastID = 0;

    return function() {
        lastID++;
        return lastID;
    };
}

const generateID = createIDGenerator();
console.log(generateID()); // Logs: 1
console.log(generateID()); // Logs: 2
console.log(generateID()); // Logs: 3

//Task 4-Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeting(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

const greetMalavika = createGreeting('Malavika');
greetMalavika(); // Logs: Hello, Malavika!

//Activity 3: Closures in Loops
//Task 5-Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray() {
    let functions = [];

    for (let i = 0; i < 5; i++) {
        functions[i] = (function(index) {
            return function() {
                console.log(index);
            };
        })(i);
    }

    return functions;
}

const functionArray = createFunctionArray();
functionArray[0](); // Logs: 0
functionArray[1](); // Logs: 1
functionArray[2](); // Logs: 2
functionArray[3](); // Logs: 3
functionArray[4](); // Logs: 4

//Task 6-Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = (function() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items;
        }
    };
})();

itemManager.addItem('banana');
itemManager.addItem('apple');
console.log(itemManager.listItems()); // Logs: ['banana', 'apple']
itemManager.removeItem('banana');
console.log(itemManager.listItems()); // Logs: ['apple']

//Task 7-Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Logs: 3 (computed)
console.log(memoizedAdd(1, 2)); // Logs: 3 (cached)

//Task 8-Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Logs: 120 (computed)
console.log(memoizedFactorial(5)); // Logs: 120 (cached)
