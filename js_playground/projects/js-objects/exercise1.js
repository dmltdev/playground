/*
Write a JavaScript program to list the properties of a JavaScript object. 
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno 
*/

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