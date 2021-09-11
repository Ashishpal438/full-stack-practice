function smallestAndLargestOfAll(n, arr){
    var min = arr[0];
    var max = arr[0];
    for(var i=0;i<n;i++){
       
        if(min > arr[i]){
        min = arr[i];
        }
      if(max < arr[i]){
      max = arr[i]
        }
    }
    console.log(min);
    console.log(max);
  }
  smallestAndLargestOfAll(5,[4,5,8,9,6])