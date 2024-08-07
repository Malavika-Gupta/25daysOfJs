//Activity 1: Basic Recursion
//Task 1: Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Test cases
console.log(factorial(5)); // 120

//Task 2: Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log(fibonacci(6)); // 8

//Activity 2: Recursion with Arrays
//Task 3: Sum of Array
function sumArray(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return arr[n - 1] + sumArray(arr, n - 1);
}

// Test cases
let array1 = [1, 2, 3, 4, 5];
console.log(sumArray(array1, array1.length)); // 15

//Task 4: Maximum Element in Array
function maxElement(arr, n) {
    if (n === 1) {
        return arr[0];
    }
    return Math.max(arr[n - 1], maxElement(arr, n - 1));
}

// Test cases
let array2 = [2, 5, 4, 8, 1];
console.log(maxElement(array2, array2.length)); // 8

//Activity 3: String Manipulation with Recursion
//Task 5: Reverse a String
function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

// Test cases
console.log(reverseString("hello")); // "olleh"

//Task 6: Palindrome Check
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

//Activity 4: Recursive Search
//Task 7: Binary Search
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, high);
    }
}

// Test cases
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sortedArray, 5)); // 4

//Task 8: Count Occurrences in Array
function countOccurrences(arr, target, n) {
    if (n <= 0) {
        return 0;
    }
    let count = (arr[n - 1] === target) ? 1 : 0;
    return count + countOccurrences(arr, target, n - 1);
}

// Test cases
let array3 = [1, 2, 3, 4, 2, 2, 5];
console.log(countOccurrences(array3, 2, array3.length)); // 3

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(root) {
    if (root === null) {
        return;
    }
    inOrderTraversal(root.left);
    console.log(root.value);
    inOrderTraversal(root.right);
}

// Example tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Test case
inOrderTraversal(root); // 4 2 5 1 3

//Task 10: Depth of Binary Tree
function depthOfTree(root) {
    if (root === null) {
        return 0;
    }
    let leftDepth = depthOfTree(root.left);
    let rightDepth = depthOfTree(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example tree
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);

// Test case
console.log(depthOfTree(root2)); // 3

