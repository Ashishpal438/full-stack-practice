function oddSumBelowN(num) {

    let i = 1;
  let sum = 0;
  while(i <= num){
  sum += i;
    i += 2;
  }
  console.log(sum);
}

oddSumBelowN(10)
