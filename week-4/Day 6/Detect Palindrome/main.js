function detectPalindrome(num){
    var str = "" + num;
    var isPalindrome = true;
     for(var i=0; i<str.length; i++){
       
       if(str[i] !== str[str.length-(i+1)]){
        isPalindrome = false;
         break;
       }
     }
     if(isPalindrome){
     console.log("Yes")
     }else{
     console.log("No")
     }
   }
detectPalindrome(2112)   