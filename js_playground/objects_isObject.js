/*
Write a JavaScript program to list the properties of a JavaScript object. 
Sample object:
var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 };
  Sample Output: name,sclass,rollno 
  */
  
  
  // Sample object
  const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
    get getInfo() {
      return this.name + this.sclass + this.rollno
    },
    set setName(name) {
      this.name = name;
    }
  };
  
  student.setName = 'John';
  console.log(student.getInfo);
  
  // Function
  
  function _keys(obj) // Return object keys
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
  function isObject(obj) // How to actually check if object is an object
  {
    return typeof obj === 'object' && obj !== null && ! Array.isArray(obj)
  }
  console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
  console.log(_keys(student));
  
  var animals = ['tiger', 'lion', 'zebra'];
  var cup = {color: 'black',    weight: '500gm' };
  const chart = ['a', 'b', 'c', 'd', 'e', 'f'];
  console.log(typeof chart); //JS treats arrays as objects
  console.log(Array.isArray(chart)); // How to actually check if array is an array
  
  console.log(isObject(chart)); // returns false because of !Array.isArray(obj) condition
  console.log(isObject(student)); // returns true