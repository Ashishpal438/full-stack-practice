var mat = [['.','*','.'],   
           ['*','.','*'],
           ['.','*','.']
]

function symmetric(mat, row , col){
    var hor = true
    for(var i=0; i<row ; i++){
        for(var j=0; j<col; j++){
          if(mat[i][j] !== mat[row-1-i][j]){
              hor = false;
              break;
          }
        }
        if(hor===false) break
    }
   

    var ver = true
    for(var i=0; i<row; i++){
        for(var j=0; j<col; j++){
            if(mat[j][i] !== mat[j][col-i-1]){
                ver = false;
                break
            }
        }
        if(ver === false){
            break
        }
    }
   
    if(ver && hor){
        console.log("Both");
    }
    else if(ver){console.log("Vertical");}
    else if(hor){
        console.log("Horizontal");
    }else{
        console.log("No");
    }
}

symmetric(mat,3,3)