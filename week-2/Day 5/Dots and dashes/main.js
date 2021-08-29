function dotsAndDashesII(N) {
    for(i=1;i<=N;i++){
      var pattern = "";
      for(j=1;j<=N;j++){
        if(i % 2 === 0){
        pattern = pattern + "*";
       }else{
         pattern = pattern + "_";
        }
      }
       console.log(pattern)
    }
}

dotsAndDashesII(7);