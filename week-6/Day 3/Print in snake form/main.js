var arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
  ]
   
  var r = arr.length;
  var c = arr[0].length;
  
  var newarr = [];
  for(var i=0; i<r; i++){
    if(i % 2 === 0){
      for(var j=0; j<c; j++){
        newarr.push(arr[i][j])
      }
    }else{
      for(k=c-1; k>=0; k--){
        newarr.push(arr[i][k])
      }
    }
  }
  console.log(newarr.join(" "))