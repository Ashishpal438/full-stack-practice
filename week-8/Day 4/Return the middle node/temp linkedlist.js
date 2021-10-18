const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const LinkedList = class {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    let newNode = new LinkedListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      var current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
};

var list = new LinkedList();
list.add(16);
list.add(13);
list.add(7);
list.add(1);

list.insertNodeAtPosition(16, 1, 2);
console.log(list);
