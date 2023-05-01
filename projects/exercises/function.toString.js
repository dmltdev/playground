// .toString() is a method of the Function object. It returns a string representing the source code of the function.

let getFunctionString = (func) => { 
    return func.toString(); 
}

// Call the function

let funcString = getFunctionString(getFunctionString);
console.log(funcString);