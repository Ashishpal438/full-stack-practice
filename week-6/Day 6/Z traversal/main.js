function zTraversal(N,arr){
    var ans = [];
  for(var i=0; i<N; i++){
      for(var j=0; j<N; j++){
          if(i===0){
              ans.push(arr[i][j])
          }
          if(i+j == N-1 && i>0){
              ans.push(arr[i][j])
          }
          if(i==N-1 && j>0){
              ans.push(arr[i][j])
          }
      }
  } 
  console.log(ans.join(" "))
} 
zTraversal(3,[[1,2,3],[4,5,6],[7,8,9]])