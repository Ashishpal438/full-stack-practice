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

    middleNode(head) {
        var slow = this.head;
        var fast = this.head;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data
    };
    
  };
  
  var list = new LinkedList();
  list.add(16);
  list.add(13);
  list.add(7);
  list.add(1);
  list.add(8)
  
  console.log(list.middleNode(16));
  

  