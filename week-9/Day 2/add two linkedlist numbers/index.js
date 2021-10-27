var addTwoNumbers = function(l1, l2) {
    
    var carry = 0;
    var h1 = l1
    var h2 = l2
    var l3 = new ListNode(1)
    var h3 = l3
    while(h1!==null || h2!== null){
   ///if h1 is null======
        if(h1===null){
            sum = h2.val + carry
             if(sum > 9){
            carry = 1
            var lastdigit = sum % 10
            h3.next = new ListNode(lastdigit)
            h3 = h3.next
        }else{
            carry = 0
            h3.next = new ListNode(sum)
            h3 = h3.next
         }
            h2 = h2.next
        }
        
   // if h2 is null=======     
        else if(h2===null){
            sum = h1.val + carry
             if(sum > 9){
            carry = 1
            var lastdigit = sum % 10
            h3.next = new ListNode(lastdigit)
            h3 = h3.next
        }else{
            carry = 0
            h3.next = new ListNode(sum)
            h3 = h3.next
        }
            h1 = h1.next
        }
    // else==============    
        else{
              var sum =  h1.val + h2.val + carry
                if(sum > 9){
            carry = 1
            var lastdigit = sum % 10
            h3.next = new ListNode(lastdigit)
            h3 = h3.next
            }
            else{
            carry = 0
            h3.next = new ListNode(sum)
            h3 = h3.next
            }
             h1= h1.next
             h2 = h2.next
          }
        }

    if(carry>0){
     h3.next = new ListNode(carry)
    }
    return l3.next
};
