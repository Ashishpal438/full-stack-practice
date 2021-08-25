function masaiDivisors(left, right, k) {
  
  var count = 0;
  for(i=left;i<=right;i++){
  if(i%k==0){
   count++;
  }
  }
  console.log(count);
}
masaiDivisors(10,20,2)