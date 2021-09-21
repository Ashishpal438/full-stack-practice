function oddPalindrome(N, str){
    var newstr = "";
      for(var i=0; i<N; i++){
       if(i % 2 === 1){
        newstr = newstr + str[i]
       }
      }
      
       var isPalindrome = true;
      for(var i=0; i<newstr.length; i++){
       if(newstr[i] !== newstr[newstr.length-1-i]){
        isPalindrome = false;
         break;
       }
      }
      if(isPalindrome){
       console.log("yes")
      }else{
       console.log("no")
      }
    }
    oddPalindrome(6,"abcdeb")