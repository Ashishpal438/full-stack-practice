function oddSumRows(N,M,arr){
    for(var i=0; i<N; i++){
     var sum =0;
      for(var j=0; j<M; j++){
       if(arr[i][j] % 2 === 1){
        sum = sum + arr[i][j];
       }
      }
      console.log(sum);
    }
  }
oddSumRows(3,3,[[1,2,3],[4,5,6],[7,8,9]])  