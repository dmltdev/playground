function nullishCoalescing(value, defaultValue) {
    return value ?? defaultValue;
}

let name = null;
let defaultName = "John";

let result = nullishCoalescing(name, defaultName);
console.log(result); // Output: "John"

name = "Alice";
result = nullishCoalescing(name, defaultName);
console.log(result); // Output: "Alice"
