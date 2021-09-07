function twoPrimes(a,b) {
  var isPrime1 = true;
  for(var i=2;i<a;i++){
    if(a % i === 0){
    isPrime1 = false;
      break;
    }
  }
  var isPrime2 = true;
  for(var j=2;j<b;j++){
  if(b % j === 0 ){
  isPrime2 = false;
    break;
   }
  }
  
  if(isPrime1 && isPrime2){
  console.log("True");
  } else{
  console.log("False");
  }

}
twoPrimes(7,9)
