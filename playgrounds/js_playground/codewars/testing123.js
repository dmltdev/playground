/*
//!First method using for loop
export function number(array: string[]): string[]{
    for (let i:number = 0; i < array.length; i++) {
        let word:string = array[i];
        array[i] = `${i+1}: ${word}`;
    }
    return array;
};
*/
//! Second method using array.map
export function number(array) {
  return array.map((el, i) => `${i + 1}: ${el}`);
}
let arr = ["a", "b", "c", "d"];
console.log(number(arr));
//# sourceMappingURL=testing123.js.map
