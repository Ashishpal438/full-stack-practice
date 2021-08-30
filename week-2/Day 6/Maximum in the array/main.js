function maximumInArray(N,arr){
    var max = arr[0];
    for(var i=0;i<N;i++){
      if(arr[i] > max){
       max = arr[i]
        }
      
    }
    console.log(max)
  }

  console.log(maximumInArray(5,[8,7,9,3,5]));