const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

class LinkedList{
   
    constructor() {
        this.head = null;
        this.size = 0;
    }

  insertNodeAtHead(data){
  
   //creating a new node ---->
    let newNode = new  LinkedListNode(data);
   
  // console.log(newNode)
    
    // setting the next of new node as head --->
   newNode.next = this.head;
    
    
    // moving head to new node ---->
    this.head = newNode;
    
    // returnig new head ---->
    return this.head;

}
  
}

var list = new LinkedList()
list.insertNodeAtHead(4,1)

console.log(list)