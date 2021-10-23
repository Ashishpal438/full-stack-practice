
function boundaryElemnts(mat,r,c){
    var top = 0
    var bottom = r-1
    var left =0
    var right = c-1

 
        for(var i=left; i<=right; i++){
            console.log(mat[top][i]);
        }
        top++;
        for(var j=top; j<=bottom; j++){
           console.log(mat[j][right]);
        }
        right--;

        for(var k=right; k>=left;k--){
            console.log(mat[bottom][k]);
        }
        bottom--;
        for(var l=bottom; l>=top;l--){
            console.log(mat[l][left]);
        }
        left--;
    
}

var mat = [[1,2,3,0],
           [4,5,6,0],
           [7,8,9,0]]

boundaryElemnts(mat,3,4)       