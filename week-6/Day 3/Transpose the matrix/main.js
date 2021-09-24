function transposeTheMatrix(N, M, matrix){
    for(var i=0; i<M+1; i++){
       var mat = [];
     for(var j=0; j<N; j++){
      mat.push(matrix[j][i])
     }
      console.log(mat.join(" "))
    }
   }
transposeTheMatrix(3,2,[[0,0],[1,1],[2,2]])   