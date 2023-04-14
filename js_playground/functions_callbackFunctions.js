// Callback function is a function that is passed as an argument to another function
// and is executed after some operation has been completed.

// Example 1
function greet(name) {
    console.log('Hello ' + name);
}

function greetWithCallback(name, callback) {
    console.log('Hello ' + name);
    callback();
}

greetWithCallback('John', function() {
    console.log('This is a callback function');
});

// Example 2

const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB = func(val);
    if (checkA === checkB) {
      return func(val);
    } else {
      return 'inconsistent results';
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 5));