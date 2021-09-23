 function sumOfMatrix(N,M,Grid) {
   
    var sum = 0;
    for(var i=0; i<N; i++){
        for(var j=0; j<M; j++){
            sum = sum + Grid[i][j]
        }
    }
     console.log(sum) 
 }

 sumOfMatrix(2,3,[[1,0,1],[-8,9,-2]])