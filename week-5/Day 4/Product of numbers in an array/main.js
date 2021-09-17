function productOfNumbers(N, arr) {
    var product = 1;
    for(var i=0; i<N; i++){
     product = product * arr[i];
    }
    console.log(product)
  }
productOfNumbers(5,[1,2,3,4,5])  