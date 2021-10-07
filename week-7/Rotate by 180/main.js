function rotateBy180(N, matrix){
    
    for(var i=N-1; i>=0; i--){
         var ans = [];
        for(var j=N-1; j>=0; j--){
           
              ans.push(matrix[i][j])
           
        }
        console.log(ans.join(" "))
    }
  
}
rotateBy180(3,[[1,2,3],[4,5,6],[7,8,9]])