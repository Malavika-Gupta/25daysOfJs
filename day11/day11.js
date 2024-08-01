//Activity 1: Understanding Promises
//Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const resolveAfter2Seconds = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1: Promise resolved after 2 seconds");
        }, 2000);
    });
};

resolveAfter2Seconds().then(message => console.log(message));

//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const rejectAfter2Seconds = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Task 2: Promise rejected after 2 seconds");
        }, 2000);
    });
};

rejectAfter2Seconds().catch(error => console.error(error));

//Activity 2: Chaining Promises
//Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data 1 fetched");
        }, 1000);
    });
};

const fetchData2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data 2 fetched");
        }, 1000);
    });
};

const fetchData3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data 3 fetched");
        }, 1000);
    });
};

fetchData1()
    .then(data => {
        console.log(data);
        return fetchData2();
    })
    .then(data => {
        console.log(data);
        return fetchData3();
    })
    .then(data => {
        console.log(data);
    });

//Activity 3: Using Async/Await
//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const resolvePromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 4: Promise resolved");
        }, 2000);
    });
};

const asyncFunction = async () => {
    const result = await resolvePromise();
    console.log(result);
};

asyncFunction();

//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const rejectPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Task 5: Promise rejected");
        }, 2000);
    });
};

const asyncFunctionWithErrorHandling = async () => {
    try {
        const result = await rejectPromise();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

asyncFunctionWithErrorHandling();

//Activity 4: Fetching Data from an API
//Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log("Task 6:", data))
    .catch(error => console.error("Task 6 Error:", error));

//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchDataAsync = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log("Task 7:", data);
    } catch (error) {
        console.error("Task 7 Error:", error);
    }
};

fetchDataAsync();

//Activity 5: Concurrent Promises
//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), 1500));

Promise.all([promise1, promise2, promise3])
    .then(values => console.log("Task 8:", values));

//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promiseA = new Promise(resolve => setTimeout(() => resolve("Promise A resolved"), 1000));
const promiseB = new Promise(resolve => setTimeout(() => resolve("Promise B resolved"), 2000));
const promiseC = new Promise(resolve => setTimeout(() => resolve("Promise C resolved"), 1500));

Promise.race([promiseA, promiseB, promiseC])
    .then(value => console.log("Task 9:", value));
