function traverse2dArray(N, M, matrix){
    var ans = [];
   for(var i=0; i<M; i++){
    for(var j=N-1; j>=0; j--){
     ans.push(matrix[j][i])
    }
   }
    console.log(ans.join(" "))
  }
traverse2dArray(3,3,[[1,2,3],[4,5,6],[7,8,9]])  