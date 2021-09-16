function masaiPalSubString(S){
    var largest = 0;
     for(var i=0; i<S.length; i++){
      var str = "";
       for(var j=i;j<S.length;j++){
        str = str + S[j]; //----generated substring
       //checking if the generated substring is palindromic or not ----
         var isPalindrome = true;
         for(var k=0; k<str.length; k++){
          if(str[k] !== str[str.length-k-1]){
           isPalindrome = false;
          }
         }
         if(isPalindrome){
          if(str.length > largest){
           largest = str.length;
          }
         }
       }
     }
   console.log(largest);
 }
 masaiPalSubString("thisracecarisgood")