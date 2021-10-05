function masaiTraversalAndQueries(N, M, q, arr){
    var ans1 = [];

  for(var i=0; i <N; i++){
         for(var j=0; j<M; j++){
            if(i%2===0 && q===1){
                ans1.push(arr[i][j]);
            }
            if(i%2===1 && q===2){
                 ans1.push(arr[i][j]);
        }
         }
        for(var k=M-1; k>=0; k--){
            if(i%2 === 1 && q==1){
            ans1.push(arr[i][k]);
            }  
            if(i%2===0 && q===2){
                 ans1.push(arr[i][k]);
             }
       }
     }
    console.log(ans1.join(" "));

}
masaiTraversalAndQueries(3,3,1,[[1,2,3],[4,5,6],[7,8,9]])