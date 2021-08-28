function patternPrinting(N) {
 
  for(var i=1;i<=N;i++){
  var pattern = "";
    for(var j=1;j<=i;j++){
    pattern = pattern + "*";
    }
    console.log(pattern)
  }
}
patternPrinting(5)