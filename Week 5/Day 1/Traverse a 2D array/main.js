function traverse2dArray(N, M, matrix){
    var ans = [];
   for(var i=0; i<M; i++){
    for(var j=N-1; j>=0; j--){
     ans.push(matrix[j][i])
    }
   }
    console.log(ans.join(" "))
  }
traverse2dArray(4,3,[[1,8,3],[2,8,10],[3,6,11],[4,5,12]])  