//Activity 1: Basic Regular Expressions
// Task 1: Match all occurrences of the word "JavaScript"
let text1 = "JavaScript is a programming language. JavaScript can be used for front-end and back-end.";
let regex1 = /JavaScript/g;
let matches1 = text1.match(regex1);
console.log("Task 1 Matches:", matches1);

// Task 2: Match all digits in a string
let text2 = "My phone number is 123-456-7890.";
let regex2 = /\d+/g;
let matches2 = text2.match(regex2);
console.log("Task 2 Matches:", matches2);

//Activity 2: Character Classes and Quantifiers
// Task 3: Match all words that start with a capital letter
let text3 = "The Sky is Blue.";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = text3.match(regex3);
console.log("Task 3 Matches:", matches3);

// Task 4: Match all sequences of one or more digits
let text4 = "The order numbers are 45, 123, and 7890.";
let regex4 = /\d+/g;
let matches4 = text4.match(regex4);
console.log("Task 4 Matches:", matches4);

//Activity 3: Grouping and Capturing
// Task 5: Capture parts of a US phone number
let text5 = "My phone number is (123) 456-7890.";
let regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let matches5 = text5.match(regex5);
console.log("Task 5 Matches:", matches5.slice(1)); // Log only the captured groups

// Task 6: Capture the username and domain from an email address
let text6 = "My email is example@domain.com.";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = text6.match(regex6);
console.log("Task 6 Matches:", matches6.slice(1)); // Log only the captured groups

//Activity 4: Assertions and Boundaries
// Task 7: Match a word at the beginning of a string
let text7 = "You are beautiful. You are pretty";
let regex7 = /^You\b/;
let matches7 = text7.match(regex7);
console.log("Task 7 Matches:", matches7);

// Task 8: Match a word at the end of a string
let text8 = "This is a test.";
let regex8 = /\btest\.$/;
let matches8 = text8.match(regex8);
console.log("Task 8 Matches:", matches8);

//Activity 5: Practical Applications
// Task 9: Validate a simple password (at least one uppercase, lowercase, digit, and special character)
let password = "Password123!";
let regex9 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
let isValidPassword = regex9.test(password);
console.log("Task 9 - Is the password valid?", isValidPassword);

// Task 10: Validate a URL
let url = "https://www.example.com";
let regex10 = /^(https?:\/\/)?([\w\d-]+\.){1,2}[\w\d-]+(\/[\w\d-]*)*\/?$/;
let isValidURL = regex10.test(url);
console.log("Task 10 - Is the URL valid?", isValidURL);


