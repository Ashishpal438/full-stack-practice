function cirTraversal(matrix,N) {
    var ans = [];
    for(var i=0; i<N; i++){
        
       for(var j=N-1; j>=0; j--){
          if(i===0){
               ans.push(matrix[j][i]);
          }
       } 
      
      for(var k=1; k<N; k++){
         if(i===0){
              ans.push(matrix[i][k]);
             
         }
      }
      
      for(var l=1; l<N; l++){
          if(i===N-1){
              ans.push(matrix[l][i]);
          }
      }
      
      for(var m=N-2; m>=1; m--){
          if(i===N-1){
              ans.push(matrix[i][m]);
          }
      }
    }
    console.log(ans.join(" "));
   }
cirTraversal([[1,2,3],[4,5,6],[7,8,9]],3)   