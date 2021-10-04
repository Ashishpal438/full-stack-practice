function productOfNumbers(N, arr) {
    var out = 1;
  for(var i=0; i<N; i++){
      out = out * arr[i]
  }
  console.log(out)
}
productOfNumbers(4,[1,2,3,4])