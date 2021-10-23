function spiralTraversal(mat,row,col){
    var top = 0
    var bottom = row-1
    var left =0
    var right = col-1
    var direction = 0

    while(top<=bottom && left<=right ){
        if(direction == 0){
            for(var i=left; i<=right; i++){
                console.log(mat[top][i]);
            }
            top++;
        }
        if(direction == 1){
            for(var j=top; j<=bottom; j++){
                console.log(mat[j][right]);
             }
             right--;
        }
        
        if(direction == 2){
            for(var k=right; k>=left;k--){
                console.log(mat[bottom][k]);
            }
            bottom--;
        }  
        if(direction == 3){
            for(var l=bottom; l>=top;l--){
                console.log(mat[l][left]);
            }
            left++;
        
        }
        
       direction = (direction +1 )%4
    }
       
}

var mat = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12],
        [13,14,15,16]]

spiralTraversal(mat,4,4)        