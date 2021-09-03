//declaring a function to check if a number  is prime 

function isPrime(num){
    var count = 0;
    for(var i=1;i<=num;i++){
      if(num % i === 0){
       count++;
      }
    }
    if(count === 2){
      return true;
    }
    else{
      return false;
    }
  }
  
  // using the above function to print non-prime numbers to a given limit
  
  var limit = 20;
  for(var i=2;i<=limit;i++){
    if(!isPrime(i)){
      console.log(i)
    }
  }