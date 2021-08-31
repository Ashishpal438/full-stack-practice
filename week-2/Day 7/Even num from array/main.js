function evenArray(n, arr){
 
  for(var i=0;i<n;i++){
  if(arr[i] % 2 === 0){
    console.log(arr[i])
    }
  }
}
evenArray(5,[2,5,7,8,6])