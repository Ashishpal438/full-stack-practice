function detectPalindrome(N) {
    var str = "" + N;
    var n = str.length
   // console.log(str.length);
    var isPalindrome = true;
    for(var i=0; i<n; i++){
        var start = str[i];
        var end = str[n-i-1] ;
       // console.log(start,end);
        if(start !== end){
          isPalindrome = false;
          break;
        }

    }
    if(isPalindrome){
        console.log("Yes");
    }else{
        console.log("No");
    }
 }
detectPalindrome(1221)