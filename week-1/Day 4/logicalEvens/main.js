function logicalEvens(one, two) {
  
  var remainder1 = one % 2;
  var remainder2 = two % 2;
  if( (remainder1 === 0) && (remainder2 === 0) ) {
    return("Both");
  }
  else{
 return("No");
  }
}
console.log(logicalEvens(8,18));