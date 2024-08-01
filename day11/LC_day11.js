//Q1
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};

//Q2
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

    if(nums.length === 0){
        return init;
    }
    let accu = init
    for(let  i = 0;i < nums.length;i++){
    accu = fn(accu, nums[i])
    }
    return accu;
};