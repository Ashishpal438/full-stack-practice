function sumOfSpecialPairs(N,A){
    var sum = 0;
     for(var i=0; i<N; i++){
      for(var j=i+1; j<N; j++){
        //console.log(i,j)
        // checking if j-i is prime-----and j >i (which is always true in this case)
         var num = j-i;
        var isPrime = true;
        if(num === 1){
         isPrime = false;
        }else{
          for(var k=2; k<num; k++){
         if(num % k === 0){
          isPrime = false;
          }
         }
       }
        
       // console.log(num)
      //if both conditons are true then finding the absolute difference------  
       if(isPrime){
        if(A[i]>A[j]){
         sum = sum + (A[i] - A[j])
           //console.log(sum)
        }else if(A[j] > A[i]){
         sum = sum + (A[j] - A[i]) 
           //console.log(sum)
        }
       }
    
      }
     }
     console.log(sum)
   }
   sumOfSpecialPairs(6,[1,2,3,5,7,12])