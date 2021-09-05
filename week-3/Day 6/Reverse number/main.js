function primeNumberReverse(N) {
  for(var i=1;i<=N;i++){
     var pattern = "";
   for(var j=N;j>=1;j--){
     pattern = pattern + j + " ";
   }
    console.log(pattern)
  }
  
}
primeNumberReverse(5)
