function evenSumBelowN(num) {
  let i = 0;
  let sum = 0;
  while (i <= num) {
    sum = sum + i;
    i += 2;
  }
  console.log(sum);
}

evenSumBelowN(25);
