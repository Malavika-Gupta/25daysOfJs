//Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let total = 0;
let i = 1;
while (i <= 10) {
    total += i;
    i++;
}
console.log(`Sum: ${total}`);

//Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let i1 = 10;
while (i1 >= 1) {
    console.log(i1);
    i1--;
}

//Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

//Task 6: Write a program to calculate the factorial of a number using a do...while loop.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (num) => {
    num = parseInt(num);
    let factorial = 1;
    let i = num;
    do {
        factorial *= i;
        i--;
    } while (i > 0);
    console.log(`Factorial of ${num} is ${factorial}`);
    rl.close();
});


//Task 7: Write a program to print a pattern using nested for loops.
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern.trim());
}

//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

//Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// Using a for loop
console.log("Using a for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Using a while loop
console.log("Using a while loop:");
i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern.trim());
}


