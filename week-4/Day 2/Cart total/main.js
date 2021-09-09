function cartTotal(N, price, quantity) {
    sum = 0;
    for(var i=0; i<N; i++){
     sum = sum + (price[i] * quantity[i]);
    }
    console.log(sum);
  }cartTotal(5, [20,30,25,13,54],[4,2,5,3,2])  