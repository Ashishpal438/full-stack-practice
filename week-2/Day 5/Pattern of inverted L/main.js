function invertedL(N) {
    for(var i=1;i<=N;i++){
  var pattern = "";
    for(var j=1;j<=N;j++){
     if(i===1){
        pattern = pattern + "*" + " ";
      } else{
     pattern = "*"
     }
     } 
      console.log(pattern)
    }
 }
 invertedL(5)