function rotateBy90Clockwise(N, matrix){
    for(var i=0; i<N; i++){
   var mat=[];
   for(var j=N-1; j>=0; j--){
     mat.push(matrix[j][i]);
   }
   console.log(mat.join(" "))
 }
 }
rotateBy90Clockwise(3,[[1,1,1],[2,2,2],[3,3,3]]) 