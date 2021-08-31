function minimumInArray(N,arr){
  
  var min = arr[0];
  for(var i=0;i<N;i++){
  if(arr[i] < min ){
   min = arr[i]
  }
  }
  console.log(min)
}

minimumInArray(5, [5,3,8,9,7])