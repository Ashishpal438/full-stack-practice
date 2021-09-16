function specificDiagonals(R, C, matrix, K){
    var d1 = [];
    var d2 = [];
     for(var i=0; i<R; i++){
       var isFound = false;
      for(var j=0; j<C; j++){
        if(matrix[i][j] === K){
          var diff = i-j;
          var sum =  i+j;
          isFound = true;
          break;
        }
      }
       if(isFound){
        break;
       }
     }  
     
     for(var i=0; i<R; i++){
      for(var j=0; j<C; j++){
       if(i-j === diff){
        d1.push(matrix[i][j]);
       }if(i+j === sum){
        d2.push(matrix[i][j]);
       }
      }
     }
     console.log(d1.join(" "));
     console.log(d2.join(" "));
   }
specificDiagonals(3,3,[[1,2,3],[4,5,6],[7,8,9]],5)