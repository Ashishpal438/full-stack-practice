function traverse2dArray(N, M, matrix){
    var arr = [];
   for(var i=M-1; i>=0; i--){
    for(var j=0; j<N; j++){
      arr.push(matrix[j][i])
    }
   }
    console.log(arr.join(" "))
  }
traverse2dArray(4,3,[[1,8,9],[2,7,10],[4,3,5],[5,7,6]])  