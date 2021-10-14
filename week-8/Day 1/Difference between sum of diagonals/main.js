function  diagonalSumDifference(grid, n) {
    //code here
    var d1sum = 0;
    var d2sum = 0;
    for(var i=0;i<n; i++){
      for(var j=0; j<n; j++){
          if(i===j){
            d1sum = d1sum + grid[i][j] ;
            break;
          }
      }
      for(var k=n-1; k>=0; k--){
          if(k === n-1-i){
              d2sum = d2sum + grid[i][k];
      }
     }
    } 
    if(d1sum >= d2sum){
       return (d1sum - d2sum);
    }else{
       return (d2sum - d1sum);
       }
}

console.log(diagonalSumDifference([[1,2,3],[4,5,6],[7,8,9]],3));