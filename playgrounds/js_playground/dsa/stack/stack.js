// Stack class
class Stack {
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if (this.items.length == 0)
        return "Underflow";
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    printStack()
    {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
        return str;
    }
}

// !Testing

let stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(6);
stack.push(7);

console.log(stack.peek())
console.log(stack.pop());

console.log(stack.peek())
console.log(stack.pop());

console.log(stack.peek())
console.log(stack.pop());

console.log(stack.peek())
console.log(stack.pop());

console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.printStack());