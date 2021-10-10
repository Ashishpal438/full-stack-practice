var diagonalSum = function(mat) {
    var n = mat.length;
     var sum = 0;
     for(var i=0; i<n; i++){
         var m = mat[i].length;
         for(var j=0; j<m; j++){
             if(i-j === 0){
                 sum = sum + mat[i][j]
             }
             if(i+j == m-1 && i-j !== 0){
                  sum = sum + mat[i][j] 
            }
             
         }
     }
     return sum
 };
 console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]));