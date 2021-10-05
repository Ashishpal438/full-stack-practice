function sumOfDigits(N){
    var sum =0;
   var i = N;
   while(i>0){
      var last =  i % 10 ;
      sum = sum + last;
      i = Math.floor(i/10);
   }
   console.log(sum)
}
sumOfDigits(39)