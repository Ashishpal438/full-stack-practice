function ticTacToe(matrix){
    var n = matrix.length;
   for(var i=0; i<n; i++){
    for(var j=0; j<n; j++){
  //checking horizontally ===
      if(j+2<n){
       if(matrix[i][j] === matrix[i][j+1] && matrix[i][j] === matrix[i][j+2]){
        console.log(matrix[i][j]);
         break; 
       }
      }
   //checking vertically =====
      if(i+2<n){
       if(matrix[i][j] === matrix[i+1][j] && matrix[i][j] === matrix[i+2][j]){
        console.log(matrix[i][j]);
         break;
       }
      }
  //checking diagonally downwards=====
      if(i+2<n && j+2<n){
       if(matrix[i][j] === matrix[i+1][j+1] && matrix[i][j] === matrix[i+2][j+2]){
        console.log(matrix[i][j]);
         break;
       }
      }
  //checking diagonlly upwards=====
      if(i-2>=0 && j+2<n){
       if(matrix[i][j] === matrix[i-1][j+1] && matrix[i][j] === matrix[i-2][j+2]){
        console.log(matrix[i][j]);
         break;
       }
      }
    }
   }
    
  }
  ticTacToe([["x","o","x"],["o","x","x"],["o","o","o"]])