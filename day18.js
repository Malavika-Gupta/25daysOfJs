//Activity 1: Sorting Algorithms
//Task 1: Implement the Bubble Sort algorithm
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Bubble Sort:", arr);
    return arr;
}

// Example usage:
bubbleSort([64, 34, 25, 12, 22, 11, 90]);
//Bubble Sort: [
 //   11, 12, 22, 25,
 //   34, 64, 90
 // ]

//Task 2: Implement the Selection Sort algorithm
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap arr[minIdx] and arr[i]
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
    console.log("Selection Sort:", arr);
    return arr;
}

// Example usage:
selectionSort([64, 25, 12, 22, 11]);
//Selection Sort: [ 11, 12, 22, 25, 64 ]

//Task 3: Implement the Quicksort algorithm
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
let sortedArray = quickSort([64, 25, 12, 22, 11]);
console.log("Quicksort:", sortedArray);
//Quicksort: [ 11, 12, 22, 25, 64 ]

//Activity 2: Searching Algorithms
//Task 4: Implement the Linear Search algorithm
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Linear Search: Index of target:", i);
            return i;
        }
    }
    console.log("Linear Search: Target not found");
    return -1;
}

// Example usage:
linearSearch([2, 3, 4, 10, 40], 10);
//Linear Search: Index of target: 3

//Task 5: Implement the Binary Search algorithm
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log("Binary Search: Index of target:", mid);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log("Binary Search: Target not found");
    return -1;
}

// Example usage:
binarySearch([2, 3, 4, 10, 40], 10);

//Activity 3: String Algorithms
//Task 6: Count the occurrences of each character in a string
function countCharacterOccurrences(str) {
    let charCount = {};

    for (let char of str) {
        charCount[char] = charCount[char] + 1 || 1;
    }

    console.log("Character counts:", charCount);
    return charCount;
}

// Example usage:
countCharacterOccurrences("hello world");

//Task 7: Find the longest substring without repeating characters
function longestSubstringWithoutRepeatingCharacters(s) {
    let map = new Map();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    console.log("Longest substring length:", maxLen);
    return maxLen;
}

// Example usage:
longestSubstringWithoutRepeatingCharacters("abcabcbb");

//Activity 4: Array Algorithms
//Task 8: Rotate an array by k positions

function rotateArray(arr, k) {
    k = k % arr.length;
    let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    console.log("Rotated Array:", rotatedArray);
    return rotatedArray;
}

// Example usage:
rotateArray([1, 2, 3, 4, 5, 6, 7], 3);

//Task 9: Merge two sorted arrays into one sorted array
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log("Merged Array:", mergedArray);
    return mergedArray;
}

// Example usage:
mergeSortedArrays([1, 3, 5], [2, 4, 6]);

//Task 10: Solve the Fibonacci sequence using Dynamic Programming
function fibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log("Fibonacci sequence:", fib);
    return fib[n];
}

// Example usage:
fibonacci(12);



















