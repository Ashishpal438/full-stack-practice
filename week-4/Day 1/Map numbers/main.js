function mapNumbers(N,K){
    var newObj = {};
  for(var i=1;i<=N;i++){
  newObj[i] = i + "-" + (i+K-1);
  }
  for(key in newObj){
  console.log(newObj[key]);
  }
}
mapNumbers(5,10)