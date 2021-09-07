function dotsAndDashes(N) {
    for(var i=1;i<=N;i++){
      var pattern = ""
    if(i % 2 !== 0){
    console.log("_")
      }
    else{
      for(var j=1;j<=N;j++){
    pattern = pattern + "*";
       }
      console.log(pattern)
      }
    } 
      
  }
dotsAndDashes(5)  