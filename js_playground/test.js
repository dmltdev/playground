let getFunctionString = (func) => { 
    return func.toString(); 
}

// Call the function

let funcString = getFunctionString(getFunctionString);
console.log(funcString);