function patternPrinting3(N){
    for(var i=1; i<=N; i++){
       var spaces = "";
         for(var k=1; k<=N-1; k++){
           spaces = spaces + " " + " ";
         }
        var pattern = ""
      for(var j=1; j<=N; j++){
       if(i === 1 || i === N){
        pattern = pattern + "*" + " ";
       }else{
        pattern = spaces + "*" 
       }
      }
      console.log(pattern)
    }
}
patternPrinting3(5)