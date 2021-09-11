function equalTo42(size,arr) {
    var count = 0;  
    for(var i=0;i<arr.length;i++){
      if(arr[i] === 42){
        count = 1;
          break;
      }
     }
    if(count === 1){
    console.log("Yes")
    }
    else{console.log("No")}
  }
  equalTo42(5,[4,5,7,42,65])