var getDecimalValue = function(head) {
    // if(head.val===0){
    //     return 0
    // }
    var temp = head
    var prev = null
    var next = null
    while(temp !== null){
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next
    }
     var h = prev
     var out = 0
     var count = 0
     while(h !== null){
         if(h.val===1){
               out += 2**count
             console.log(count)
         }
         count++
           h= h.next
     }
    return out
};