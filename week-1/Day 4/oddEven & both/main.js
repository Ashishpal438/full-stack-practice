function oddEvenBoth(one, two) {
  var remainder1 = one % 2;
  var remainder2 = two % 2;
  
  if( (remainder1 === 0) && (remainder2 === 0) ) {
    return("Even");
  }
  else if( (remainder1 !== 0) && (remainder2 !== 0) ) {
  return("Odd");
  }
  else{
  return("Even-Odd")
    }
}
console.log(oddEvenBoth(15,18));