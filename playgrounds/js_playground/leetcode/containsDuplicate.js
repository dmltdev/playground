/*
const containsDuplicate = (nums: number[]): boolean => {
    let arr:any = new Set(nums);
    arr = Array.from(arr);
    let result:boolean = nums.every((element, index) => {
        return element === arr[index];
    })
    return !result;
}
*/
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
