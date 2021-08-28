function patternOfN(N) {
    for(var i=1;i<=N;i++){
    var pattern = "";
      
      for(var j=1;j<=N;j++){
      pattern = pattern  +( (i - 1)*N + j ) + " " ;
        
      }
      console.log(pattern);
    }
}
patternOfN(5)