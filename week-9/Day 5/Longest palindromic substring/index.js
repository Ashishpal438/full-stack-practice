var longestPalindrome = function(s) {
    var longestPalindrome = 0
    var ans = ''
    for(var i=0; i<s.length; i++){
      var sub = ""
      for(var j=i; j<s.length; j++){
          sub += s[j]
         //console.log(sub)
          if(checkpalindrome(sub)){
              if(sub.length > longestPalindrome){
                longestPalindrome = sub.length
                  ans = sub
                  //console.log("ans is ===",ans)
              }
          }
      }
    }
    return ans
    
   function checkpalindrome(str){
        let i=0
        let j=str.length-1
        while(i<j){
          if(str[i]!==str[j]){
              return  false
          }else{
              i++
              j--
          }
        }
        return true
    }
};