function twoArrayAndPhrase(n, m, matrix){
    var count = 0;
   for(var i=0; i<n; i++){
    for(var j=0; j<m; j++){
     if(matrix[i][j] === "s"){
       
  //checking for horizontally ------     
     if(j+3 < m){
       if(matrix[i][j] + matrix[i][j+1] + matrix[i][j+2] + matrix[i][j+3] === "saba"  ){
       count++;
       }
     }
  // checking for vertically down -----
      if(i+3 < n){
      if(matrix[i][j]+ matrix[i+1][j] + matrix[i+2][j] + matrix[i+3][j] === "saba"  ){
       count++;
      }
     }
  // checking for diagonlly down -----
      if(i+3 < n && j+3 < m){
       if(matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2] + matrix[i+3][j+3] === "saba"  ){
        count++;
       }
      }
  // checking for diagonally upWards -------
      if(i-3>=0 && j+3<m){
       if(matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2] + matrix[i-3][j+3] === "saba"  ){
        count++;
       }
      } 
    }
   }
   }  
    console.log(count)
  }
twoArrayAndPhrase(5,5,[["s","a","f","e","r"],["a","m","j","a","d"],["b","a","b","o","l"],["a","a","r","o","n"],["s","o","n","g","s"]])  