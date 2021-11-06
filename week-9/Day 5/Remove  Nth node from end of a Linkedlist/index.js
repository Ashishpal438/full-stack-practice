var removeNthFromEnd = function(head, n) {
    var curr = head
    var len = 0
    while(curr!==null){
        curr = curr.next
        len++
    }
    len = len-n+1
    if(len==1){
    return head.next
    }
   //console.log(len)
    var h = head
    var prev = null
    var i=1
    while(i<len){
        prev = h
        h=h.next
        i++
    }
    prev.next = h.next
    return head
};