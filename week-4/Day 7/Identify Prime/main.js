function identifyPrime(num) {
    var isPrime = true;
   for(var i=2; i< num ; i++){
    if(num % i === 0){
     isPrime = false;
      break;
    }
   } if(isPrime){
     console.log("Yes"); 
   } else{
     console.log("No")
    }
 }
identifyPrime(11)