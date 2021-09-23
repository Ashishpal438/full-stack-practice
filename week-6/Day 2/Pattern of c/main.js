function patternPrintingI(N) {
    for(var i=1; i<=N; i++){
     pattern = "";
      for(var j=1; j<=N; j++){
        if(i === 1 || i === N){
         pattern = pattern + "* "
        }else{
         pattern = "*"
        }
       
      }
      console.log(pattern)
    }
  
}
patternPrintingI(5)