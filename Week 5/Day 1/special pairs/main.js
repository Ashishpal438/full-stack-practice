function sumOfSpecialPairs(N,A){
    var sum = 0;
   for(var i=0; i<N; i++){
    for(var j=i+1; j<N; j++){
  // checking for (j-i) to be prime ---
      var num = j-i;
       var isPrime = true;
      if(j-i === 1){
        isPrime = false;
      }
      for(var k=2; k<num; k++){
       if(num % k === 0){
        isPrime = false;
       }
      }
 // if j-i is prime then finding the absolute diff ---
      if(isPrime && j>i){
       if(A[i] > A[j]){
        sum = sum + (A[i] - A[j]);
       }else{
        sum = sum +(A[j] - A[i]);
       }
      }
    }
   }
 console.log(sum);
 }
 sumOfSpecialPairs(6,[1,2,3,5,7,12])