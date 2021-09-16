function goInZigZag(N, M, matrix){
    var arr = [];
   for(var i=0; i<N; i++){
    if(i%2===0){
     for(var j=M-1; j>=0; j--){
      arr.push(matrix[i][j])
     }
    }else{
     for(var k=0; k<M; k++){
      arr.push(matrix[i][k])
     }
    }
   } 
    console.log(arr.join(" "))
  }
goInZigZag(5, 5,[
    [4, 7, 1, 1, 7],
    [8, 9, 9, 6, 1],
    [6, 4, 9, 5, 1],
    [7, 7, 4, 7, 7],
    [8, 6, 2, 5, 5]
])  