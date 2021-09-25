function zTraversal(N,arr){
    var ans = [];
    for(var i=0; i<N; i++){
        for(var j=0; j<N; j++){
            if(i===0){
                ans.push(arr[i][j]);
            }
        }
        
        for(var k=N-1; k>=0; k--){
           if(i+k==N-1 && i!==0){
               ans.push(arr[i][k]);
           } 
        }
        
        for(var l=0; l<N;l++){
            if(i===N-1 && l>0){
                ans.push(arr[i][l]);
            }
        }
    }
     console.log(ans.join(" "));
}
zTraversal(3,[[1,2,3],[4,5,6],[7,8,9]])