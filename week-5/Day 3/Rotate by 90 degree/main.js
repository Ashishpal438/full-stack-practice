function rotateBy90(R, matrix){
    for(var i=R-1; i>=0; i--){
      var mat = [];
     for(var j=0; j<R; j++){
       mat.push(matrix[j][i])
     }
      console.log(mat.join(" "))
    }
     
   }
rotateBy90(3,[[1,2,3],[4,5,6],[7,8,9]])   