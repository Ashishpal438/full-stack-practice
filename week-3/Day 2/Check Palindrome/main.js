function checkPalindrome(N, str) {
   
    for(var i=0;i<N;i++){
      var a = 'No'
      if(str[i]  === str[str.length - (i + 1)] ) {
        a = 'Yes'
      }
      else{
        break
        }
      
    }
     console.log(a);
  }

  checkPalindrome(5, "NAMAN")