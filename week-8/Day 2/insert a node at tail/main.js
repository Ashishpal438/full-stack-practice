
class Node {
    constructor(data,next){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.data = null;
        this.size = 0
    }
   
    insertNodeAtTail(head, data) {
    
        var newNode = new Node(data);
        
     //if the list is empty, then head itself will point to the newNode --->
     
        if(!this.head){
            this.head = newNode;
            return this.head;
        }
        
      // Else, traverse the list to find the tail 
      //(the tail node will initially be pointing at null), and update the tail's next pointer --->
      
        let tail = this.head;
       while(tail.next !== null){
            tail = tail.next;
       }
       
       tail.next = newNode;
       
       return this.head;
  }
}
var list = new LinkedList();
list.insertNodeAtTail(5,7)
console.log(list);