/* 
2635. Apply Transform Over Each Element in Array
https://leetcode.com/problems/apply-transform-over-each-element-in-array/

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

*/

const map = function(arr, fn) {
    let res = [];
    arr.forEach((element, index) => {
        let temp = fn(element, index);
        res.push(temp)
    })
    return res;
}

let arr1 = [1,2,3];
let fn1 = function plusone(n) { return n+1};

console.log(map(arr1, fn1));