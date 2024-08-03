//Activity 1: Creating and Exporting Modules
//Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
import { add } from './adder.mjs';
console.log(add(2, 3)); // 5

//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
import { person } from './person.mjs';

console.log(person.greet()); 

//Activity 2: Named and Default Exports
//Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { add2, subtract } from './math.mjs';

console.log(add(5, 3));       // 8
console.log(subtract(5, 3));  // 2

//Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
import multiply from './multiply.mjs';

console.log(multiply(4, 5)); // 20

//Activity 3: Importing Entire Modules
//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as utils from './utils.mjs';

console.log(utils.PI);            // 3.14
console.log(utils.add3(7, 2));     // 9
console.log(utils.subtract3(10, 2)); // 8

//Activity 4: Using Third-Party Modules
//Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import _ from 'lodash';

const array = [1, 2, 3, 4, 5];
console.log(_.reverse(array)); // [5, 4, 3, 2, 1]

//Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });




