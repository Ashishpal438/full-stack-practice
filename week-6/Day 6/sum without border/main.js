function sumWithoutBorders(N, M, matrix){
    var sum=0;
     for(var i=1;i<N-1;i++){
         for(var j=1;j<M-1;j++){
             sum=sum+matrix[i][j]
         }
         
     }
     console.log(sum)
 
   
 }
sumWithoutBorders(3,3,[[1,2,3],[4,5,6],[7,8,9]]) 