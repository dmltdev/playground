function withLogging(fn) {
  return function (...args) {
    console.log("Arguments", args);
    const result = fn(...args);
    console.log("Result", result);
    return result;
  };
}
const add = withLogging((a, b) => a + b);
add(1, 2);
