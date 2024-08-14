//Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i=0;i<nums.length;i++){
        for (j=i+1;j<nums.length;j++){
            if (nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
    
};

console.log(twoSum([1,2,3,4,5,6],7))
//Output-[ 0, 5 ]

//Reverse Integer
var reverse = function(x) {
    let tmpX = Math.abs(x);
    let reversed = 0;
    while (tmpX != 0) {
        let r = tmpX % 10;
        reversed = reversed * 10 + r;
        tmpX = Math.floor(tmpX / 10);
    }
    if (reversed > Math.pow(2, 31)) return 0;
    return reversed * Math.sign(x);
}
console.log(reverse(58))
//Output - 85

//Palindrome
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=x.toString()
    let i=0
    let j=str.length-1
    while(i<j){
        if(str[i]!==str[j]) return false
        i++
        j--
    }
    return true
};
console.log(isPalindrome(1881))
//Output - true

//Merge two sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

//Valid Paranthesis
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length %2 !== 0) return false;
    let stack = [];
    for(let i=0; i<s.length;i++){
        if(s[i] === '('){
            stack.push(')')
        } else if (s[i] === '['){
            stack.push(']')
        } else if (s[i] === '{'){
            stack.push('}')
        } 
        else if (stack.length === 0 || stack.pop() !== s[i]){
            return false;
        }
    }
    return stack.length === 0 ?  true :  false
    
    
};
console.log(isValid("()[]{}"));
// true