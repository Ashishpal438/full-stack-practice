function cirTraversal(matrix,N) {
    var ans = ''
    var left = 0
    var right = N-1
    var top = 0
    var bottom = N-1
    
    while(bottom == N-1){
        for(var i=bottom; i>=top; i--){
            ans += matrix[i][left] + ' '
        }
        left++
        
        for(var j=left; j<=right; j++){
            ans += matrix[top][j] + ' '
        }
        top++
        
        for(var k=top; k<=bottom; k++){
            ans += matrix[k][right] + ' '
        }
        right--
        
        for(var l=right; l>=left; l--){
            ans += matrix[bottom][l] + ' '
        }
        bottom--
    }
    console.log(ans)
   }
   