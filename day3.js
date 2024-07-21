//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
checkNumber(19);  // The number is positive.
checkNumber(-8);  // The number is negative.
checkNumber(0);   // The number is zero.

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("The person is eligible to vote.");
    } else {
        console.log("The person is not eligible to vote.");
    }
}
checkVotingEligibility(29);  // The person is eligible to vote.
checkVotingEligibility(11);  // The person is not eligible to vote.

//Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function findLargest(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else {
        if (b >= c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}
findLargest(10, 20, 30);  // 30
findLargest(50, 80, 30);  // 80
findLargest(10, 60, 40);  // 60

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function dayOfWeek(dayNum) {
    switch (dayNum) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number");
    }
}
dayOfWeek(1);  // Monday
dayOfWeek(5);  // Friday
dayOfWeek(8);  // Invalid day number

//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function assignGrade(score) {
    switch (true) {
        case (score >= 90):
            console.log('A');
            break;
        case (score >= 80):
            console.log('B');
            break;
        case (score >= 70):
            console.log('C');
            break;
        case (score >= 60):
            console.log('D');
            break;
        default:
            console.log('F');
    }
}
assignGrade(98);  // A
assignGrade(87);  // B
assignGrade(76);  // C
assignGrade(62);  // D
assignGrade(55);  // F

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
}
checkEvenOdd(10);  // Even
checkEvenOdd(7);   // Odd

//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}
isLeapYear(2024);  // 2024 is a leap year.
isLeapYear(1900);  // 1900 is not a leap year.
isLeapYear(2000);  // 2000 is a leap year.
isLeapYear(2023);  // 2023 is not a leap year.

//Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}
checkNumber(10);  // The number is positive.
checkNumber(-5);  // The number is negative.
checkNumber(0);   // The number is zero.


