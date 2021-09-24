var matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
  ]
  var N = matrix.length;
  
  var d1 = [];
  var d2 = [];
  
  for(var i=0; i<N; i++){
     d1.push(matrix[i][i]);
      d2.push(matrix[i][N-(i+1)]);
  }
  console.log(d1.join(" "));
  console.log(d2.join(" "));