
function greatest(a,b,c){

if(a > b && a > c) {
 return("a is greater");
}
else if(b > a && b > c) {
  return("b is greater");
}
else{
  return("c is greater");
}

}

console.log(greatest(5,12,17));