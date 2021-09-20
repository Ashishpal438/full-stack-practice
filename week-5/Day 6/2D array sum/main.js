function twoArrayAndSum(n, m, matrix, s){
    var count = 0;
   for(var i=0; i<n; i++){
    for(var j=0; j<m; j++){
     if(j <= m-3){
      if(matrix[i][j] + matrix[i][j+1] + matrix[i][j+2] === s){
        count++;
      }
     }
      if(i<=n-3){
       if(matrix[i][j] + matrix[i+1][j] + matrix[i+2][j] === s){
        count++;
       }
      }
      if(i<=n-3 && j<=m-3){
       if(matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2] === s){
        count++;
       }
      }
      if(i>=2 && j<=m-3){
       if(matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2] === s){
        count++;
       }
      }
    }
   }
    console.log(count)
  }
twoArrayAndSum(3,3,[[3,2,1],[2,2,2],[1,5,1]],6)  