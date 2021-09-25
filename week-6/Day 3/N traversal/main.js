function nTraversal(matrix) {
    var n = matrix.length;
    var ans = [];
    for(var i=0; i<n; i++){
        
       for(var j=n-1; j>=0; j--){
           if(i===0){
              ans.push(matrix[j][i]);
           }
       }
       
       for(var k=1; k<n; k++){
           if(i===k  ){
               ans.push(matrix[i][k]);
           }
       }
        
        for(var l=n-2; l>=0; l--){
           if(i === n-1 ){
              ans.push(matrix[l][i]);
           }
       }
       
    }
    console.log(ans.join(" "));
  }
  nTraversal([[1,2,3],[4,5,6],[7,8,9]])