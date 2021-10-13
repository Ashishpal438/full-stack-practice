var isPalindrome = function(s) {
   
    var x="abcdefghijklmnopqrstuvwxyz0123456789"
    var capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var small="abcdefghijklmnopqrstuvwxyz"
    var output=""

    for(var i=0;i<s.length;i++){
        for(var j=0;j<x.length;j++){
          if(s[i]===x[j]){
             output+=s[i]
              break;
          }else{
              for(var k=0;k<capital.length; k++){
                   if(s[i]===capital[j]){
              output+=small[j]
                       break;
            }
           }
       }
    }
    }

    var rev = "";
    for(var l=output.length-1; l>=0; l--){
        rev = rev + output[l];
     }
    
     if(output===rev){
         return true
     }else{
         return false
     }
}   

console.log(isPalindrome("A man, a plan, a canal: Panama"));