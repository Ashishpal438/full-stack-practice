function sumOfIndexes(N,M,arr){
    for(var i=0; i<N; i++){
    var newarr = [];
      for(var j=0; j<M; j++){
        var sum = 0;
        sum = sum + i + j;
       newarr.push(sum)
      }
      console.log(newarr.join(" "))
    }
 }
sumOfIndexes(3,2,[1,2],[3,4],[5,6])