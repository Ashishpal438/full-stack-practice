function nTraversal(matrix) {
    let ans = ''
  for(var i=0; i<matrix.length; i++){
      if(i===0){
          for(var j=matrix[0].length-1; j>=0; j--){
          ans += matrix[j][i] + " "
          }
      }
      
      else if(i==matrix.length-1){
          for(var j=matrix[0].length-1; j>=0; j--){
              ans += matrix[j][i] + ' '
          }
      }
      
      else{
          for(var j=1; j<matrix[0].length; j++){
              if(i==j){
                    ans += matrix[i][j] + ' '
              }
          }
      }
      
  }
  console.log(ans)
}
