function array2D(N,M,arr){
    for(var i=0; i<N; i++){
      var newarr = [];
     for(var j=0; j<M ; j++){
       newarr.push(arr[i][j])
     }
      console.log(newarr.join(" "))
    }
  }
array2D(3,2,[[1,2],[3,4],[5,6]])  