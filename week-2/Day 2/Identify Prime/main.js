function identifyPrime(num) {
    
 var count = 0;
  for(var i=1;i<=num;i++){
  if(num%i===0){
  count++;
  }
  }
  if(count == 2){
  console.log("Yes") 
    }
  else{
  console.log("No")
    }
}

identifyPrime(17)