//Activity 1: Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (!this.head) return null;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);

console.log("Linked List after adding nodes:");
linkedList.display(); // Output: 10 20 30

linkedList.remove();
console.log("Linked List after removing a node:");
linkedList.display(); // Output: 10 20


//Activity 2: Stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack after pushing elements:");
console.log(stack.items); // Output: [10, 20, 30]

console.log("Top element:", stack.peek()); // Output: 30

stack.pop();
console.log("Stack after popping an element:");
console.log(stack.items); // Output: [10, 20]

// Reversing a string
const reversed = reverseString("hello");
console.log("Reversed string:", reversed); // Output: "olleh"


// Reversing a string using Stack
function reverseString(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedStr = '';
    while (stack.items.length > 0) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}


//Activity 3: Queue
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) return "Underflow";
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) return "No elements in Queue";
        return this.items[0];
    }
}

// Simulating a printer queue
function simulatePrinterQueue(tasks) {
    const queue = new Queue();
    tasks.forEach(task => queue.enqueue(task));

    while (queue.items.length > 0) {
        console.log("Printing: " + queue.dequeue());
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue after enqueuing elements:");
console.log(queue.items); // Output: [10, 20, 30]

queue.dequeue();
console.log("Queue after dequeuing an element:");
console.log(queue.items); // Output: [20, 30]

// Simulating a printer queue
simulatePrinterQueue(["Document1", "Document2", "Document3"]);


//Activity 4: Binary Tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);

console.log("In-order traversal of Binary Tree:");
binaryTree.inOrderTraversal(binaryTree.root); 
// Output: 3 5 10 15


//Activity 5: Graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}


const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");

console.log("Breadth-first search starting from vertex A:");
console.log(graph.bfs("A")); // Output: [ 'A', 'B', 'C' ]
