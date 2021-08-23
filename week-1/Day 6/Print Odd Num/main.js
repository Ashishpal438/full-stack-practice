function moveTwoAhead(num) {
   
  var i = 1;
  while(i <= num) {
   if((i % 2)=== 1){
   console.log(i);
   i++;
    }
    else{
      i++;
    }
  }return i
}
moveTwoAhead(20);