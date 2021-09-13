function masaiPalSubString(S){
    var largestPalindrome = 0;
  for(var i=0; i<S.length; i++){
   var str = "";
    for(var j=i; j<S.length; j++){
     str = str + S[j];
  // checking if the substring is palindromic -----
      var isPalindrome = true;
      for(var k=0; k< str.length; k++){
       if(str[k] !== str[str.length-k-1]){
        isPalindrome = false;
         break;
       }
      }
 // if substring is palindrome, checking if its length is greater than previous palindromic substring------
      if(isPalindrome){
       if(largestPalindrome < str.length){
        largestPalindrome = str.length;
       }
      }
      
    } 
     
  }
  console.log(largestPalindrome)
 }
var S = "thisracecarisgood"
 masaiPalSubString(S)