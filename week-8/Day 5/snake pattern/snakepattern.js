function snake(mat,r,c){
    for(var i=0; i<r;i++){
        if(i%2 === 0){
            for(var j=0; j<c; j++){
                console.log(mat[i][j])
            }
        }else{
            for(var k=c-1; k>=0; k--){
                console.log(mat[i][k])
            }
        }
    }

}
var mat = [[1,2,3],[4,5,6],[7,8,9]]
snake(mat,3,3)
