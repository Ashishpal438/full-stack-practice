const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    if(head === null){
        return true;
    }
    //----Finding the middle node ---// (First middle in case of even sized LL)
    var slow = head;
    var fast = head;
    while(fast.next!==null && fast.next.next!==null){
        fast = fast.next.next;
        slow = slow.next
    }
    //----Reversing the 2nd half ----//
    var curr = slow.next;
    var prev = null
    while(curr!==null){
        prev = curr
        curr = curr.next
    }
   
   var h2 = prev
   var h1 = head
   //---checking from the start of both the 1st half and 2nd reversed half---///
   while(h2!== null){
       if(h1.data !== h2.data){
           return false;
       }else{
           h1 = h1.next
           h2 = h2.next
       }
   }
   return true
};
