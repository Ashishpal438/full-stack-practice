function patternOfL(N) {
    for(var i=1;i<=N;i++){
    var pattern = "";
      for(var j=1;j<=N;j++){
      if(i===N){
      pattern = pattern + "*" + " ";
      }
        else if (i<N){
        pattern = "*"
        }
      }
      console.log(pattern);
    }
  }
patternOfL(5)  