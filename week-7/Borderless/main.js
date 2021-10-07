function sumWithoutBorders(N, M, matrix){
    var sum = 0;
    for(var i=0; i<N; i++){
        for(var j=0; j<M; j++){
            if(i !== 0 && j!==0 && i!== N-1 && j!== M-1){
                sum = sum + matrix[i][j]
            }
        }
    }
    console.log(sum)
  }
sumWithoutBorders(4,4,[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])  