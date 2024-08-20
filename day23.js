//Median of two sorted arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i++]);
        } else {
            merged.push(nums2[j++]);
        }
    }

    while (i < nums1.length) merged.push(nums1[i++]);
    while (j < nums2.length) merged.push(nums2[j++]);

    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid-1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

//Merge k sorted lists
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {

    const mergeTwoLists = (l1, l2) => {
        const dummy = new ListNode();
        let current = dummy;
        
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        
        if (l1 !== null) current.next = l1;
        if (l2 !== null) current.next = l2;
        
        return dummy.next;
    };

    if (lists.length === 0) return null;

    while (lists.length > 1) {
        const mergedLists = [];
        
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        
        lists = mergedLists;
    }

    return lists[0];
}

const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const l3 = new ListNode(2, new ListNode(6));

const lists = [l1, l2, l3];
const mergedList = mergeKLists(lists);

const printList = (head) => {
    let current = head;
    const result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
};

printList(mergedList);

//Trapping rain water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
};

//Word Ladder
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) == -1) return 0;

    let visited = new Set();
    let queue = [beginWord];
    let length = 0;
    let wordSet = new Set(wordList);

    while (queue.length > 0) { // BFS Loop through all the elements in the Queue;
        let size = queue.length;
        length++;

        for (let i = 0; i < size; i++) {
            let current = queue.shift(); // Get the first Element in the queue

            for (let j = 0; j < current.length; j++) { // Check each Character in the queue item and compare each values

                let temp = current.split("");
                // comapre each values by changing each charater bit from 'a' to 'z' and check with the wordList
                for (let char = 97; char <= 122; char++) {
                    temp[j] = String.fromCharCode(char);

                    let newWord = temp.join("");
                    if (newWord == endWord) { // if the newWord is the endWord return
                        return length + 1;
                    }

                    // if the word is in WordList and not Visited then add it to the queue and visted Set
                    if (wordSet.has(newWord) && !visited.has(newWord)) {
                        queue.push(newWord);
                        visited.add(newWord);
                    }
                }
            }
        }
    }

    return 0;
};

// Test Case 
let beginWord1 = "hit";
let endWord1 = "cog";
let wordList1 = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord1, endWord1, wordList1)); // Expected output: 5