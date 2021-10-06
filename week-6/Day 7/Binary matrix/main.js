function binaryMatrix(N,M, matrix) {
    for(var i=0 ; i<N; i++){
        for(var j=0; j<M; j++){
            if(matrix[i][j] === 0){
                matrix[i][j] = 1;
            }else{
                matrix[i][j]=0
            }
        }
    }
    
    for(var j=0; j<N; j++){
         console.log(matrix[j].join(" "))
    }
   
  }
binaryMatrix(3,2,[[1,0],[0,1],[1,1]])  