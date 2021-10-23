function search(mat,row,col,x){
    var i=0; 
    var j= col-1;
    while(i<row && j>=0){
        if(x<mat[0][0]){
            console.log("Not found");
            break;
        }
        else if(x>mat[row-1][col-1]){
            console.log("Not Found");
            break
        }
        else if(mat[i][j] ==x){
            console.log("Found");
            break
        }
        else if(mat[i][j] < x){
            i++
        }else{
            j--
        }
    }
}

var mat = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12],
        [13,14,15,16]]
   
search(mat,4,4,158)        