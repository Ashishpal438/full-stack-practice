//declaring a function to check if a number is odd ---
function isOdd(num){
    if(num % 2 !== 0){
      return true;
    }
    else{
      return false;
    }
   }
   
   //using the above function to print odd numbers to a given limit ---
   var limit = 30;
   for(var i=1;i<=limit;i++){
     if(isOdd(i)){
       console.log(i)
     }
   }