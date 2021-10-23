function rotateAntiClockWise(mat,row,col){
 for(var j=col-1; j>=0; j--){
     for(var i=0; i<row; i++){
         console.log(mat[i][j]);
     }
 }
}

var mat = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12],
        [13,14,15,16]]

rotateAntiClockWise(mat,4,4)        