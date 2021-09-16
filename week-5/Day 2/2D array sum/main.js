function twoArrayAndSum(n, m, matrix, s){
    var count = 0;
   for(var i=0; i<n; i++){
    for(var j=0; j<m; j++){
   // check horizontally====
      if(j+2<m){
       if(matrix[i][j] + matrix[i][j+1] + matrix[i][j+2] === s){
        count++;
       }
      }
  // check vertically=====
      if(i+2<n){
       if(matrix[i][j] + matrix[i+1][j] + matrix[i+2][j] === s){
        count++;
       }
      }
  //check diagonally downwards=====
      if(i+2<n && j+2<m){
       if(matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2] === s){
        count++;
       }
      }
  //check diagonally upwards=====
      if(i-2>=0 && j+2<m){
       if(matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2] === s){
        count++;
       }
      }
    }
   }
    console.log(count)
  }
twoArrayAndSum(3,3,[[3,2,1],[2,2,2],[1,5,1]],6)  