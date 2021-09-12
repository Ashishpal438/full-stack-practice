function longQueue(n, arr){
    var count = 1;
    for(var i=0; i<arr.length; i++){
    if(arr[i] > arr[i+1]){
    count++;
    }
    }
    console.log(count);
  }
longQueue(6,[1,2,4,3,5,8])  