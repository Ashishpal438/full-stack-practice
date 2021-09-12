function competeWithNeighbour(n, arr){
    var count = 0;
    if(arr[0]>arr[1]){
      count++;
      }
     if(arr[n-1] > arr[n-2]){
      count++;
      }
    for(var i=0; i<arr.length; i++){
     if(arr[i] > arr [i+1] && arr[i] > arr[i-1]){
     count++;
      }
     }
    console.log(count);
  }
  competeWithNeighbour(8,[1,2,1,4,2,3,6,5])