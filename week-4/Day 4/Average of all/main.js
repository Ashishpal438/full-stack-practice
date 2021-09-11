function averageOfAll(n, arr){
    var sum = 0;
    for(var i=0;i<n;i++){
    sum = sum + arr[i]
    }
    var avg = sum/arr.length;
    console.log(Math.ceil(avg))
  }
  averageOfAll(5,[1,2,3,4,5])