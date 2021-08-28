function oddSumAgain(num) {
    var sum = 0;
    for(var i=1;i<=num;i++){
      if(i % 2 !== 0){
        sum = sum + i;
      }
      console.log(sum);
    }
  }
  
  oddSumAgain(5)