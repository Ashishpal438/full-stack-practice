function evenSumColumns(N,M,arr){
    for(var j=0; j<M; j++){
     var sum = 0;
      for(var i=0; i<N; i++){
       if(arr[i][j] % 2 === 0){
        sum = sum + arr[i][j];
       }
      }
      console.log(sum);
    }
   }
evenSumColumns(3,3,[[1,2,3],[4,5,6],[7,8,9]])   