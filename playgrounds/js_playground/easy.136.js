"use strict";
/*
 */
function singleNumber(nums) {
    // return nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num)) || 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            return nums[i];
        }
    }
    return 0;
}
let test = [1, 0, -1];
singleNumber(test); //?
//# sourceMappingURL=easy.136.js.map