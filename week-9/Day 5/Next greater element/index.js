var nextGreaterElement = function(nums1, nums2) {
    var ans = []
   
    for(var i=0; i<nums1.length; i++){
        var st = [];
        var x = nums1[i]
        
        for(var j=nums2.length-1; j>=0; j--){
          
          if(x===nums2[j]){
             while(st.length!==0 && st[st.length-1] <= nums2[j]){
                st.pop()
             } 
              if(st.length===0){
                  ans.push(-1)
                 
              }else{
                  ans.push(st[st.length-1])
                
              }
              break
          }
            
          else{
             st.push(nums2[j])
          }
       }
       // console.log(st)
     }
    return ans
};