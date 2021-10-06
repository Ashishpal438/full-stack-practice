function seperationOfOddEven(N, arr,Q) {

    for(var i=0; i<N; i++){
       for(var j=0; j<N; j++){
            if(Q===1){
            if(arr[j] %2 ===1 && arr[j+1] %2 === 0){
               var temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1]= temp;
            }
        }
        if(Q===2){
          if(arr[j] %2 ===0 && arr[j+1] %2 === 1){
               var x = arr[j];
               arr[j] = arr[j+1];
               arr[j+1]= x;
            } 
        }
       }
    }
    console.log(arr.join(" "))
  }
  seperationOfOddEven(5,[1,2,3,4,5],1)