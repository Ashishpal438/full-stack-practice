function transposeTheMatrix(N, M, matrix){
    for(var i=0; i<M; i++){
      var mat = [];
     for(var j=0; j<N; j++){
       mat.push(matrix[j][i])
     }
      console.log(mat.join(" "))
    }
     
   }
transposeTheMatrix(4,3,[[0,0,0],[1,1,1],[2,2,2],[3,3,3]])   