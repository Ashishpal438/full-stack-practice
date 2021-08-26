function yourFirstPattern(n) {
  
  for(i=1;i<=n;i++){
  var pattern = "";
    for(j=1;j<=n;j++){
      pattern = pattern + "* ";
    }
    console.log(pattern);
  }
}
yourFirstPattern(5)