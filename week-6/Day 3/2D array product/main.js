function twoArrayAndProduct(n, m, matrix, p){
    var count = 0;
   for(var i=0; i<n; i++){
    for (var j=0; j<m; j++){
   //for checking horizontally ------  
     if( j+2 < m){
      if(matrix[i][j] * matrix[i][j+1] * matrix[i][j+2] === p){
       count++;
      }
     }
   //for checking vertically -------   
      if(i+2 < n){
       if(matrix[i][j] * matrix [i+1][j] * matrix[i+2][j] === p){
        count++;
       }
      }
   //for checking diagonally left to right (down)------
      if(i+2 < n &&  j+2 < m){
       if(matrix[i][j] * matrix[i+1][j+1] * matrix[i+2][j+2] === p){
        count++;
       }
      }
   //for checking diagonally left to right (upwards)------   
      if(i-2 < n && i-2 >= 0 &&  j+2 < m){
       if(matrix[i][j] * matrix[i-1][j+1] * matrix[i-2][j+2] === p){
        count++;
       }
      }
    }
   }
    console.log(count)
  }
twoArrayAndProduct(3,3,[[3,2,1],[2,2,2],[1,5,1]],6)  