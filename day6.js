//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let array = [1, 2, 3, 4, 5];
console.log(array); // Output: [1, 2, 3, 4, 5]

//Task 2: Access the first and last elements of the array and log them to the console.
console.log('First element:', array[0]); // Output: First element: 1
console.log('Last element:', array[array.length - 1]); // Output: Last element: 5

//Task 3: Use the push method to add a new number to the end of the array and log the updated array.
array.push(6);
console.log('After push:', array); // Output: After push: [1, 2, 3, 4, 5, 6]

//Task 4: Use the pop method to remove the last element from the array and log the updated array.
array.pop();
console.log('After pop:', array); // Output: After pop: [1, 2, 3, 4, 5]

//Task 5: Use the shift method to remove the first element from the array and log the updated 
array.shift();
console.log('After shift:', array); // Output: After shift: [2, 3, 4, 5]

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
array.unshift(10);
console.log('After unshift:', array); // Output: After unshift: [10, 2, 3, 4, 5]

//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubledArray = array.map(num => num * 2);
console.log('Doubled array:', doubledArray); // Output: Doubled array: [20, 4, 6, 8, 10]

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenArray = array.filter(num => num % 2 === 0);
console.log('Even array:', evenArray); // Output: Even array: [10, 2, 4]

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result
let sum = array.reduce((acc, num) => acc + num, 0);
console.log('Sum of array:', sum); // Output: Sum of array: 24

//Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log('Using for loop:');
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// Output:
// Using for loop:
// 10
// 2
// 3
// 4
// 5

//Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log('Using forEach method:');
array.forEach(element => console.log(element));
// Output:
// Using forEach method:
// 10
// 2
// 3
// 4
// 5

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Matrix:', matrix);
// Output: 
// Matrix: [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

//Task 13: Access and log a specific element from the two-dimensional array
console.log('Specific element:', matrix[1][2]); // Output: Specific element: 6




