
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    var slow = head;
    var fast = head;
    
    while(fast!==null && fast.next!==null){
        fast = fast.next.next;
        slow = slow.next;
        
        if(slow === fast){
            return true;
        }
    }
    return false
};

