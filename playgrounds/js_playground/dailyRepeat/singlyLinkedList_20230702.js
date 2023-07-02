class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    constructor (head = null) {
        this.head = head;
        this.tail = null;
        this.length = 0;
    }

    push (data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}

let list = new LinkedList();
console.log(list)
list.push(5);
console.log(list);
list.push(10);
console.log(list);