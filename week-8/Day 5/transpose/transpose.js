function transpose(mat,row,col){
for(var i=0; i<row; i++){
    for(var j=0; j<col; j++){
        console.log(mat[j][i])
    }
}
}
var mat = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12],
        [13,14,15,16]]
transpose(mat,4,4)