var mergeTwoLists = function(l1, l2) {
    var temp = new ListNode(-1)
    var h1 = l1;
    var h2 = l2;
    var t1 = temp;
    
    while(h1 !== null && h2 !== null){
        if(h1.val >= h2.val){
            t1.next = h2;
            t1 = t1.next;
            h2 = h2.next;
        }else if(h2.val > h1.val){
            t1.next = h1
            t1 = t1.next
            h1= h1.next
        }
    }
    if(h1 !== null){
        while(h1!== null){
            t1.next = h1
        t1 = t1.next
        h1 = h1.next 
        }
       
    }else if(h2 !== null){
        while(h2 !== null){
          t1.next = h2
        t1 = t1.next
        h2 = h2.next  
        }
        
    }
    return temp.next
};