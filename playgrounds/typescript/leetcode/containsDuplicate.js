const containsDuplicate = (nums) => {
    let ht = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in ht) {
            return true;
        }
        ht[nums[i]] = 1;
    }
    return false;
};
console.log(containsDuplicate([1, 3, 5, 7, 1, 3, 5, 7]));
//# sourceMappingURL=containsDuplicate.js.map