function divisibleByKII(num,k) {
    
  var sum = 0;
  for(var i=1;i<=num;i++){
  if(i%k==0){
 sum = sum + i;
  }
  }
  console.log(sum);
}

divisibleByKII(20,2)
