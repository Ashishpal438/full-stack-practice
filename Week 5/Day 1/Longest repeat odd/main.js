function longestRepeatedOdd(N, array) {
    var maxCount = 0
    for(var i=0; i<N; i++){
     if(array[i] % 2 === 1){
        var count = 1;
       for(var j=i+1; j<N; j++){
        if(array[i] === array[j]){
         count++;
        }else{
         break;
        }
       }
        if(count > maxCount) {
         maxCount = count;
        }
     }
    }  
    console.log(maxCount)
  }
longestRepeatedOdd(12,[1,1,1,1,2,2,2,1,1,1,1,1])  