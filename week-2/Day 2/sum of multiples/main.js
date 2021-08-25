function sumOfMultiples(n,k,y) {
  
  var sum = 0;
  for(i=1;i<=k;i++){
    var x = i * n;
  if( x % y === 0){
  sum = sum + x;
  }
  }
  console.log(sum);
}

sumOfMultiples(5,10,2)